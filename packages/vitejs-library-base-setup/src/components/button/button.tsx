/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, useMemo } from 'react'
import './button.css'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label?: string
  children?: ReactNode
  onClick?: () => void
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button-primary' : 'button-secondary'
  const style = useMemo(() => ({ backgroundColor }), [backgroundColor])

  return (
    <button
      type='button'
      className={['button', `button-${size}`, mode].join(' ')}
      style={style}
      {...props}
    >
      {children || label}
    </button>
  )
}

export default Button
