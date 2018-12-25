# Final Form Material UI
[![NPM Version](https://img.shields.io/npm/v/final-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/final-form-material-ui)
[![NPM Downloads](https://img.shields.io/npm/dm/final-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/final-form-material-ui)

A set of wrapper components to facilitate using [Material-UI](https://github.com/mui-org/material-ui) with Final Form.

### Available fields
```jsx
import {TextField, Checkbox, Radio, Select, Input} from 'final-form-material-ui';
```

##### TextField
```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {TextField} from 'final-form-material-ui';

<Field
    name="domain"
    type="text"
    component={TextField}
    label="Domain"
    margin="normal"
    fullWidth
/>
```

##### Input
```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {Input} from 'final-form-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';

<Field
	name="password"
	component={Input}
	className="input"
	type="password"
	placeholder="Password"
	endAdornment={
		<InputAdornment position="end">
			<Link className="inputLink" to="/forgot">
				Forgot password?
			</Link>
		</InputAdornment>
	}
/>
```

##### Select
Use can pass any props from [`Select docs`](https://material-ui.com/api/select/) to `Field`.
Additional props for `Field`:
* `label` - label for select
* `formControlProps` - object of props for `FormControl` component

```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {Select} from 'final-form-material-ui';
import MenuItem from '@material-ui/core/MenuItem';

<Field
    name="city"
    label="Select city"}
    formControlProps={{className: 'my-class'}}
    component={Select}
>
    <MenuItem value="London">
        London
    </MenuItem>
    
    <MenuItem value="Paris">
        Paris
    </MenuItem>
</Field>
```
