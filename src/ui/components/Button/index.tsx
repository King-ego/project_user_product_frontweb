import React, { ButtonHTMLAttributes } from 'react';


import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({children,...rest}) => {
  return <Container {...rest} >{children}</Container>;
};

export default Button;
