import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

export type Props = FieldRenderProps<
	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
> &
	TextFieldProps;

const TextFieldWrapper: React.SFC<Props> = ({
	input: { name, onChange, value, onFocus, onBlur },
	meta,
	helperText,
	...rest
}) => {
	const showError =
		((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
		meta.touched;

	return (
		<TextField
			{...rest}
			name={name}
			helperText={showError ? meta.error || meta.submitError : helperText}
			error={showError}
			inputProps={{ onFocus, onBlur }}
			onChange={onChange}
			value={value}
		/>
	);
};

export default TextFieldWrapper;
