import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';

import { Container } from './style';

import Logo from '../../assets/Logo_mockup.jpg';

import Input from '../../ui/components/Input';
import Button from '../../ui/components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt='Logo' />

        <form>
          <h1>Faça LogiIn</h1>

          <Input
            type='text'
            name='email'
            icon={FiMail}
            placeholder='Seu email'
          />

          <Input
            type='password'
            name='senha'
            icon={FiLock}
            placeholder='Sua senha'
          />

          <Button type='submit'>Entrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
