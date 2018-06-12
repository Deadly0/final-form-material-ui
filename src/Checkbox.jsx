import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


export default ({input: { checked, name, onChange, ...restInput }, meta, ...rest}) => (
	<Checkbox
		{...rest}
		name={name}
		inputProps={restInput}
		onChange={onChange}
		checked={!!checked}
	/>
)
