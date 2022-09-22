import {Given, When, Then} from 'cypress-cucumber-preprocessor'

Given(/^que o usuário acessa a página inicial do e-commerce$/, () => {
	return true;
});

When(/^o usuário clica no link Criar Conta$/, () => {
	return true;
});

When(/^o usário preenche o formulário de cadastro com dados válidos$/, () => {
	return true;
});

When(/^o usuário clica no botão Criar Conta$/, () => {
	return true;
});

Then(/^o usário deverá ser direcionado para página Minha Conta$/, () => {
	return true;
});
