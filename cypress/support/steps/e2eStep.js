import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pageObjects/homePage';
import LoginPage from '../pageObjects/loginPage';
import ProductPage from '../pageObjects/productPage';
import SearchPage from '../pageObjects/searchPage';
import CheckoutPage from '../pageObjects/checkoutPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const productPage = new ProductPage();
const searchPage = new SearchPage();
const checkoutPage = new CheckoutPage();

When(/^o usuário clica no link Sign In no cabeçalho$/, () => {
	homePage.clickSignIn();
});


When(/^o usuário realiza login com sucesso$/, () => {
	loginPage.login('nilay_conte12@wj.com', '134679rA');
	loginPage.buttonSubmit();
});

When(/^o usuário pesquisa por produto na barra de pesquisa$/, () => {
	homePage.searchProduct();
});

When(/^o usuário escolhe produto pesquisado$/, () => {
	searchPage.clickProduct();
});

When(/^o usuário escolhe tamanho e cor$/, () => {
	cy.wait(10000);
	productPage.size();
	productPage.color();
	cy.wait(10000);
	productPage.addToCart();
});

When(/^o usuário adiciona produto no carrinho$/, () => {
	cy.wait(20000);
	homePage.showCart();
	cy.wait(15000);
	homePage.ProceedToCheckout();
});

When(/^o usuário preenche os campo da página shipping and address$/, () => {
	cy.wait(35000);
	checkoutPage.CheckoutFrom();

});

When(/^o usuário seleciona o metodo de envio$/, () => {
	cy.wait(15000);
	checkoutPage.shippingMethods();
	checkoutPage.buttonSubmit();
});

When(/^o usuário clica no botão Place order$/, () => {
	cy.wait(11000);
	checkoutPage.placeOrder();
});

Then(/^o usuário deverá ver a mensagem "([^"]*)"$/, (mensagem) => {
  cy.wait(40000);
	checkoutPage.messageThanks(mensagem);
});
