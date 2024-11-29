import React, { memo } from 'react';
import { ButtonProps } from './type';
import { StyledButton } from './style';

const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    loading,
    className,
    style,
    htmlType,
    type,
    round,
  } = props

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { onClick } = props;
    onClick?.(e)
  }

  return (
    <StyledButton
      onClick={handleClick}
      className={className}
      style={style}
      type={htmlType}
      disabled={loading}
      $type={type ?? 'default'}
      $disabled={loading ?? false}
      $round={round ?? false}
    >
      {props.children}
    </StyledButton>
  )
})

export default Button