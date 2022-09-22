Feature: Cadastro de usuário

  Como um usuário
  Quero realizar cadastro com dados válidos
  Para ter acesso as funcionalidades de usuário cadastrado

  Scenario: Cadastro com sucesso
    Given que o usuário acessa a página inicial do e-commerce
    When o usuário clica no link Criar Conta
    And o usário preenche o formulário de cadastro com dados válidos
    And o usuário clica no botão Criar Conta
    Then o usário deverá ser direcionado para página Minha Conta
