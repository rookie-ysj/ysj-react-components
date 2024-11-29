import React, { PropsWithChildren } from 'react';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export interface BaseButtonProps {
  type?: ButtonType,
  htmlType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  round?: boolean
}

export type MergedHTMLAttributes = Omit<React.ComponentProps<'button'>, keyof BaseButtonProps>;

export type ButtonProps = PropsWithChildren<BaseButtonProps> & MergedHTMLAttributes