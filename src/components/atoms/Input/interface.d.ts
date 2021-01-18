import { InputHTMLAttributes } from 'react';

export interface InputIconsProp
  extends InputHTMLAttributes<HTMLInputAttributes> {
  name: string;
  title: string;
}
