import { TextareaHTMLAttributes } from 'react';

export interface InputIconsProp
  extends InputHTMLAttributes<TextareaHTMLAttributes> {
  name: string;
  title: string;
}
