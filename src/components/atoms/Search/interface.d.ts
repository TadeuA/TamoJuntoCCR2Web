import { IconBaseProps } from 'react-icons';
import { InputHTMLAttributes, ComponentType } from 'react';

export interface InputIconsProp
  extends InputHTMLAttributes<HTMLInputAttributes> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

export interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrors: boolean;
}
