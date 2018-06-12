# Final Form Material UI
A set of wrapper components to facilitate using Material UI with Final Form

### How to use
```
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
```
import {TextField, Checkbox, Radio} from 'final-form-material-ui';
```
