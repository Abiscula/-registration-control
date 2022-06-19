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


### `Página: Cadastro de pessoas`

Nessa página é onde iremos realizar o cadastro de uma nova pessoa na plataforma. Todos os campos são obrigatórios, portanto existem validações que impedem o envio incorreto dos dados.

O campo de CEP faz uma chamada para a API <a href="https://viacep.com.br/">ViaCEP</a> que retorna o endereço completo do usuário, bastando apenas preencher o número da residência.

![registerPage1](https://user-images.githubusercontent.com/85578784/174488607-a65dd9f5-f553-4fcc-9ece-f8808ccf2a66.gif)

Também é possível visualizar, que existem modais de alerta personalizadas para orientar os usuários sobre suas ações.

![registerPage2](https://user-images.githubusercontent.com/85578784/174488943-b0a576e8-7501-4cd7-85ba-0bf13de3d646.gif)


### `Página: Criação de contratos`

Na criação de contrato existem algumas validações para impedir o envio incorreto do contrato. A data do contrato é sempre gerada com a data do dia, e a validade o administrador pode escolher (em meses). Usuários que já possuem contrato vinculado ao seu nome não irão aperecer na lista de profissionais disponíveis.

![registerContract](https://user-images.githubusercontent.com/85578784/174489706-d460ae1c-2be4-49f4-b51a-e0c4064f640d.gif)

O número do contrato é gerado com timestamp da hora atual, portanto sempre será um valor único.


### `Página: Listagem de contratos`

Nessa parte da aplicação é possivel ver uma lista de todos contratos cadastrados no site, aplicando ou retirando filtros relacionados a data de validade dos contratos.
Ao clicar no icone de contrato será aberto uma modal com o documento na integra.

![listContracts](https://user-images.githubusercontent.com/85578784/174489896-b5a1add4-41c1-4799-8ad4-0afde2a7ab38.gif)

Ao abrir o contrato também é possivel baixar uma cópia do documento clicando no botão "Baixar contrato".

![listContracts2](https://user-images.githubusercontent.com/85578784/174490007-713e13eb-b875-4818-b54e-9d2b59d5ab0d.gif)


### `Página: Estatísticas`

Na ultima tela da aplicação podemos visualizar alguns dados referentes às pessoas e contratos cadastrados.

![image](https://user-images.githubusercontent.com/85578784/174490107-9f8353fa-6b23-4ef7-8b6a-3a62ea3811e7.png)

Nas caixas superiores podemos ver a quantidade de pessoas e contratos cadastrados, e nas inferiores temos os dados de contratos à vencer e tempo médio de prestação de serviço, apresentado em dias.



