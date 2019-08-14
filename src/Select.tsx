// Based on: https://github.com/rainerschuster/final-form-material-ui/blob/master/src/Select.tsx

import * as React from 'react';
import MuiSelect from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {FormControlProps} from '@material-ui/core/FormControl';
import {FieldRenderProps} from 'react-final-form';


interface SelectProps extends FieldRenderProps<any, any> {
  native?: boolean,
  label?: string,
  formControlProps?: FormControlProps,
}

export const Select: React.FunctionComponent<SelectProps> = ({
  input: {name, value, onChange, ...restInput},
  meta,
  label,
  formControlProps,
  ...rest
}) => {
  const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

  return (
    <FormControl {...formControlProps} error={showError}>
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <MuiSelect
        name={name}
        onChange={onChange}
        inputProps={restInput}
        value={value}
        {...rest}
      />
      {showError &&
        <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
      }
    </FormControl>
  );
};

export default Select
