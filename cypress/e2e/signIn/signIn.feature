
Feature: Cadastro de usuário
  Como um usuário
  Quero realizar cadastro com dados válidos
  Para ter acesso as funcionalidades de usuário cadastrado

  Background:
    Given que o usuário acessa o site luma

  Scenario Outline: Cadastro com sucesso
    When o usuário clica no link Criar Conta
    And o usário preenche o formulário com "<firstName>" "<lastName>" "<email>" "<pass>" "<confirmPass>"
    And o usuário clica no botão Criar Conta
    Then o usário deverá ser a mensagem "<mensagem>"

    Examples:
      | firstName | lastName | email                 | pass     | confirmPass | mensagem                                           |
      | Nilay     | Conte    | nilay_conte@wj.com.br | 134679rA | 134679rA    | Thank you for registering with Main Website Store. |