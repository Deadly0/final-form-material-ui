import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import {FieldRenderProps} from 'react-final-form';


const RadioWrapper: React.SFC<FieldRenderProps> = ({
	input: {checked, value, name, onChange, onBlur, onFocus, ...restInput},
	meta,
	...rest
}) => (
	<Radio
		{...rest}
		name={name}
		inputProps={restInput}
		onChange={onChange}
		onBlur={onBlur}
		onFocus={onFocus}
		checked={checked}
		value={value}
	/>
);

export default RadioWrapper;
