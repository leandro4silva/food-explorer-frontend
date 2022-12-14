import React from 'react';
import { Container, Logo, Form, Anchor } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import iconFoodExplorer from '../../assets/food-explorer.svg';

export function SignIn() {
	return (
		<Container>
			<Logo>
				<img src={iconFoodExplorer} alt="Food Explorer" />
				food explorer
			</Logo>
			<Form>
				<h2>Faça login</h2>
				<Input name='email' type="email" label='Email' placeholder='Exemplo: exemplo@exemplo.com.br' />
				<Input name='password' type="password" label='Senha' placeholder='No mínimo 6 caracteres' />
				<Button title='Entrar' />
				<Anchor href='/'>
					Criar uma conta
				</Anchor>
			</Form>
		</Container>
	);
}