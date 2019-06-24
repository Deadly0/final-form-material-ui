import * as React from 'react';
import { SelectProps } from '@material-ui/core/Select';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FieldRenderProps } from 'react-final-form';
export declare type Props = FieldRenderProps<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, any> & SelectProps & {
    label: string;
    formControlProps: FormControlProps;
};
declare const FormHelperTextWrapper: React.SFC<Props>;
export default FormHelperTextWrapper;
