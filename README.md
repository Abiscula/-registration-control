![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)


# Controle de contratos

Com este aplicativo é possivel registrar pessoas no banco de dados, criar contratos e vincula-los com alguma pessoa previamente cadastrada (somente 1 contrato por pessoa), ter acesso a uma lista paginada com todos contratos criados e por fim um dashboard contendo algumas estatísticas para facilitar o controle do administrador.

## Instruções de uso

Para utilizar essa aplicação, será necessário clonar este repositório e o repositório <a href="https://github.com/Abiscula/-registration-control-backend">-registration-control-backend</a>. Em ambos repositórios será necessário executar o comando <b>"npm install"</b> para baixar todas as dependências do projeto.
<ul>
  <li>front-end: <b>"npm start"</b></li>
  <li>back-end: <b>"npm run dev"</b></li>
</ul>

### `Página: Principal`

Essa é a apenas a página de apresentação da aplicação, na imagem abaixo aparece um icone vermelho no canto superior direita da tela. Esse icone irá aparecer como forma de alerta quando houve algum contrato vencido na plataforma.

Também é possivel visualizar o menu lateral que fornece acesso a todas às páginas da aplicação.

![defaultPage](https://user-images.githubusercontent.com/85578784/174488400-b01371ea-2286-40f5-a50e-574f96c78fed.gif)


### `Pagina: Cadastro de pessoas`

Nessa página é onde iremos realizar o cadastro de uma nova pessoa na plataforma. Todos os campos são obrigatórios, portanto existem validações que impedem o envio incorreto dos dados.

O campo de CEP faz uma chamada para a API <a href="https://viacep.com.br/">ViaCEP</a> que retorna o endereço completo do usuário, bastante apenas preencher o número da residência.

![registerPage1](https://user-images.githubusercontent.com/85578784/174488607-a65dd9f5-f553-4fcc-9ece-f8808ccf2a66.gif)

Também é possível visualizar, que existem modais de alerta personalizadas para orientar os usuários sobre suas ações.

![registerPage2](https://user-images.githubusercontent.com/85578784/174488943-b0a576e8-7501-4cd7-85ba-0bf13de3d646.gif)


### `Pagina: Criação de contratos`

