import {When} from 'cypress-cucumber-preprocessor/steps'
import SignInPage from '../pageObjects/signInPage'
import HomePage from '../pageObjects/homePage';
import MyAccountPage from '../pageObjects/myAccountPage';

const signPage = new SignInPage();
const homePage = new HomePage();
const myAccountPage = new MyAccountPage();

When(/^o usuário clica no link Criar Conta$/, () => {
	homePage.CreateAnAccount();
});

When(/^o usário preenche o formulário com "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, 
(firstName, lastName, email, pass, confirmPass) => {
	signPage.fillFrom(firstName, lastName, email, pass, confirmPass);
});

When(/^o usuário clica no botão Criar Conta$/, () => {
	signPage.submitAccountForm();
});


When(/^o usário deverá ser a mensagem "([^"]*)"$/, (mensagem) => {
	cy.wait(3000);
	myAccountPage.messageSucess(mensagem);
});

