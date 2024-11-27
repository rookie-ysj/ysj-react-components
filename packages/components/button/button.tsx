import React, { PropsWithChildren } from 'react';

type BaseButtonProps = PropsWithChildren<{
  type?: 'primary' | 'dashed' | 'link' | 'default',
  loading?: boolean
}>

type MergedHTMLAttributes = React.ComponentProps<'button'>;

type ButtonProps = BaseButtonProps & MergedHTMLAttributes

const Button: React.FC<ButtonProps> = (props) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { onClick } = props;
    onClick?.(e)
  }

  return (
    <button onClick={handleClick} disabled={props.loading} className={props.className} style={props.style}>
      {props.children}
    </button>
  )
}

export default Button