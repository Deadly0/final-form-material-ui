import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import Input, { InputProps } from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export type Props = FieldRenderProps<HTMLTextAreaElement | HTMLInputElement, any> &
	InputProps;

const InputWrapper: React.SFC<Props> = ({ input, meta, ...rest }) => {
	const { name, value, onChange, onBlur, onFocus } = input;
	const showError =
		((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
		meta.touched;

	return (
		<>
			<Input
				{...rest}
				name={name}
				error={showError}
				inputProps={{ onBlur, onFocus }}
				onChange={onChange}
				value={value}
			/>

			{showError && (
				<FormHelperText>
					{meta.error || meta.submitError}
				</FormHelperText>
			)}
		</>
	);
};

export default InputWrapper;
