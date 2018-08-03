import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


export default ({input: {name, value, onChange, ...restInput}, meta, label, formControlProps, ...rest}) => {
	const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

	return (
		<FormControl {...formControlProps} error={showError}>
			<InputLabel htmlFor={name}>{label}</InputLabel>

			<Select
				{...rest}
				name={name}
				onChange={onChange}
				inputProps={restInput}
       				value={(rest.multiple ? (!!value && value !== '') ? value : [] : value)}
			/>

			{showError &&
				<FormHelperText>{meta.error || meta.submitError}</FormHelperText>
			}
		</FormControl>
	);
};
