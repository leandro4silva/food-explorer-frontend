import React from 'react';
import { Container, Logo, Form, Anchor } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import iconFoodExplorer from '../../assets/food-explorer.svg';


export function SignUp(){
	return(
		<Container>
			<Logo>
				<img src={iconFoodExplorer} alt="Food Explorer" />
				food explorer
			</Logo>
			<Form>
				<h2>Crie sua conta</h2>
				<Input name='name' label='Seu nome' type="text" placeholder='Exemplo: Maria da Silva' />
				<Input name='email' label='Email' type="email" placeholder='Exemplo: exemplo@exemplo.com.br' />
				<Input name='password' label='Senha' type="password" placeholder='No mínimo 6 caracteres' />		
				<Button title='Criar conta' />
				<Anchor href='/'>
                    Já tenho uma conta
				</Anchor>
			</Form>
		</Container>
	);
}