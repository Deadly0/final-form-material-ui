import * as React from 'react';
import {FieldRenderProps} from 'react-final-form';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';


const InputWrapper: React.SFC<FieldRenderProps> = ({input: {name, onChange, value, ...restInput}, meta, ...rest}) => {
	const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

	return (
		<>
			<Input
				{...rest}
				name={name}
				error={showError}
				inputProps={restInput}
				onChange={onChange}
				value={value}
			/>

			{showError &&
				<FormHelperText>
					{meta.error || meta.submitError}
				</FormHelperText>
			}
		</>
	);
};

export default InputWrapper;
