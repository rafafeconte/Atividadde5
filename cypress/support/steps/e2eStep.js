import {Given, When, Then} from 'cypress-cucumber-preprocessor'

Given(/^que o usuário acessa o site luma$/, () => {
	return true;
});

When(/^o usuário clica no link Sign In no cabeçalho$/, () => {
	return true;
});

When(/^o usuário realiza login com sucesso$/, () => {
	return true;
});

When(/^o usuário pesquisa por produto na barra de pesquisa$/, () => {
	return true;
});

When(/^o usuário escolhe produto pesquisado$/, () => {
	return true;
});

When(/^o usuário escolhe tamanho e cor$/, () => {
	return true;
});

When(/^o usuário adiciona produto no carrinho$/, () => {
	return true;
});

When(/^o usuário preenche os campo da página shipping and address$/, () => {
	return true;
});

When(/^o usuário seleciona o metodo de envio$/, () => {
	return true;
});

When(/^o usário seleciona o metodo de pagamento$/, () => {
	return true;
});

When(/^o usuário clica no botão Place order$/, () => {
	return true;
});

Then(/^o usuário deverá ver a mensagem "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
