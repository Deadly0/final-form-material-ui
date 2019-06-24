import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextFieldProps } from '@material-ui/core/TextField';
export declare type Props = FieldRenderProps<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, any> & TextFieldProps;
declare const TextFieldWrapper: React.SFC<Props>;
export default TextFieldWrapper;
