import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import {FieldRenderProps} from 'react-final-form';


const RadioWrapper: React.SFC<FieldRenderProps> = ({
	input: {checked, value, name, onChange, ...restInput},
	meta,
	...rest
}) => (
	<Radio
		{...rest}
		name={name}
		InputProps={restInput}
		onChange={onChange}
		checked={checked}
		value={value}
	/>
);

export default RadioWrapper;
