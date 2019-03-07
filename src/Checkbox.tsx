import * as React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { FieldRenderProps } from 'react-final-form';

export type Props = FieldRenderProps<HTMLInputElement> & CheckboxProps;

const CheckboxWrapper: React.SFC<Props> = ({
	input: { checked, name, onChange, onFocus, onBlur },
	meta,
	...rest
}) => (
	<Checkbox
		{...rest}
		name={name}
		inputProps={{ onFocus, onBlur }}
		onChange={onChange}
		checked={checked}
	/>
);

export default CheckboxWrapper;
