import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { InputProps } from '@material-ui/core/Input';
export declare type Props = FieldRenderProps<HTMLTextAreaElement | HTMLInputElement, any> & InputProps;
declare const InputWrapper: React.SFC<Props>;
export default InputWrapper;
