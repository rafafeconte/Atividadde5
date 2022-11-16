Feature: Fluxo E2e
  sendo um usuário cadastro no sistema
  Posso efetuar o login no sistema
  Para que possa realiza compras no site


  Scenario: Realizar login e finalizar compra com fluxo completo
    Given que o usuário acessa o site luma
    When o usuário clica no link Sign In no cabeçalho
    And o usuário realiza login com sucesso
    And o usuário pesquisa por produto na barra de pesquisa
    And o usuário escolhe produto pesquisado
    And o usuário escolhe tamanho e cor
    And o usuário adiciona produto no carrinho
    And o usuário preenche os campo da página shipping and address
    And o usuário seleciona o metodo de envio
    And o usuário clica no botão Place order
    Then o usuário deverá ver a mensagem "Thank you for your purchase!"


