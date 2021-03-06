import React from 'react';
import { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} color='#000' />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
