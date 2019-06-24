import * as React from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { FieldRenderProps } from 'react-final-form';

export type Props = FieldRenderProps<HTMLInputElement, any> & RadioProps;

const RadioWrapper: React.SFC<Props> = ({
	input: { checked, value, name, onChange, onFocus, onBlur },
	meta,
	...rest
}) => (
	<Radio
		{...rest}
		name={name}
		inputProps={{ onFocus, onBlur }}
		onChange={onChange}
		checked={checked}
		value={value}
	/>
);

export default RadioWrapper;
