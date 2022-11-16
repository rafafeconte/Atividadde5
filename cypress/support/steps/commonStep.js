import {Given, When} from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../pageObjects/homePage'

const homePage = new HomePage();

Given(/^que o usuário acessa o site luma$/, () => {
	homePage.go();

});

