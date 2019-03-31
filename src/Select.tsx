import * as React from 'react';
import Select, { SelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FieldRenderProps } from 'react-final-form';

export type Props = FieldRenderProps<
	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
> &
	SelectProps & {
		label: string;
		formControlProps: FormControlProps;
	};

const FormHelperTextWrapper: React.SFC<Props> = ({
	input: { name, value, onChange, onBlur, onFocus },
	meta,
	label,
	formControlProps,
	...rest
}) => {
	const showError =
		((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
		meta.touched;

	return (
		<FormControl {...formControlProps} error={showError}>
			<InputLabel htmlFor={name}>{label}</InputLabel>

			<Select
				{...rest}
				name={name}
				onChange={onChange}
				inputProps={{ onBlur, onFocus }}
				value={value}
			/>

			{showError && (
				<FormHelperText>
					{meta.error || meta.submitError}
				</FormHelperText>
			)}
		</FormControl>
	);
};

export default FormHelperTextWrapper;
