import * as React from 'react';
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { FieldRenderProps } from 'react-final-form';
export declare type Props = FieldRenderProps<HTMLInputElement, any> & CheckboxProps;
declare const CheckboxWrapper: React.SFC<Props>;
export default CheckboxWrapper;
