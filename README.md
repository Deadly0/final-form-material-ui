# Final Form Material UI
[![NPM Version](https://img.shields.io/npm/v/final-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/final-form-material-ui)
[![NPM Downloads](https://img.shields.io/npm/dm/final-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/final-form-material-ui)

A set of wrapper components to facilitate using
[`material-ui`](https://github.com/callemall/material-ui)
with Final Form

### How to use
```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {TextField} from 'final-form-material-ui';

const field = () => (
	<Field
	    name="domain"
	    type="text"
	    component={TextField}
	    label="Domain"
	    margin="normal"
	    fullWidth
	/>
)

```

### Available fields
```jsx
import {TextField, Checkbox, Radio} from 'final-form-material-ui';
```
