# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

| **Caso de Teste** 	| **CT-01 - Cadastro de usuários (profissionais)** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Cadastro” no menu <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 - Efetuar login** 	|
|	Requisito Associado 	| RF-002 - A aplicação deve permitir ao usuário cadastrado efetuar login em sua conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar o login. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Preencher os campos obrigatórios <br> - Clicar em "Entrar" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03.00 - Efetuar logout(profissionais)** 	|
|	Requisito Associado 	| RF-003 - A aplicação deve permitir ao usuário cadastrado fazer logout de sua conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar o logout. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em "Sair" |
|Critério de Êxito | - O logout foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03.01 - Efetuar logout(clientes)** 	|
|	Requisito Associado 	| RF-003 - A aplicação deve permitir ao usuário cadastrado fazer logout de sua conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar o logout. |
| Passos 	| - Acessar a aplicação mobile <br> - Clicar em “Login” na tela inicial <br> - Realizar o login <br> - Clicar em "Sair", no menu |
|Critério de Êxito | - O logout foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 - Gerenciamento de conta** 	|
|	Requisito Associado 	| RF-004 - A aplicação deve permitir ao usuário gerenciar a sua conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue gerenciar seus dados. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Acessar o "Perfil" no menu <br> - Clicar em Editar <br> - Alterar informações <br> - Clicar em Salvar. |
|Critério de Êxito | - O usuário conseguiu alterar seus dados com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 - Cadastro de usuários (clientes)** 	|
|	Requisito Associado 	| RF-005 - A aplicação deve permitir ao cliente fazer agendamentos. |
| Objetivo do Teste 	| Verificar se o cliente consegue se cadastrar na aplicação. |
| Passos 	| - Acessar a aplicação mobile <br> - Clicar em “Cadastro" na tela inicial <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar"<br> |
|Critério de Êxito | - O usuário conseguiu se cadastrar com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 - Visualização de agendamentos (clientes)** 	|
|	Requisito Associado 	| RF-006 -A aplicação deve permitir ao cliente gerenciar seus agendamentos.. |
| Objetivo do Teste 	| Verificar se o cliente consegue visualizar seus agendamentos corretamente. |
| Passos 	| - Acessar a aplicação mobile <br> - Clicar em “Login" na tela inicial <br> - Preencher os campos obrigatórios <br> -Clicar em "Entrar"<br> - Clicar em "Agenda" no menu |
|Critério de Êxito | - O usuário conseguiu visualizar seus agendamentos corretamente. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 - Aceitar ou recusar agendamentos** 	|
|	Requisito Associado 	| RF-007 - A aplicação deve permitir ao microempreendedor individual aceitar ou negar agendamentos. |
| Objetivo do Teste 	| Verificar se o usuário  consegue aceitar ou recusar agendamentos. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Agenda” no menu <br> - Selecionar um agendamento e clicar em “Excluir” |
|Critério de Êxito | - O usuário conseguiu excluir um agendamento com sucesso. |
| **Caso de Teste** 	| **CT-08 - Visualização da agenda** 	|
|	Requisito Associado 	| RF-008 - A aplicação deve permitir ao microempreendedor individual visualizar sua agenda. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar sua agenda. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Agenda” no menu |
|Critério de Êxito | - O usuário conseguiu visualizar sua agenda corretamente. |
| **Caso de Teste** 	| **CT-09 - Cadastro de serviços** 	|
|	Requisito Associado 	| RF-009 - A aplicação deve permitir ao microempreendedor individual cadastrar serviços. |
| Objetivo do Teste 	|Verificar se o usuário consegue cadastrar seus serviços. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Serviços” no menu <br> - Clicar em “Incluir novo serviço” <br> - Preencher os campos <br> - Clicar em "Incluir"|
|Critério de Êxito | - O usuário conseguiu adicionar um serviço corretamente. |
| **Caso de Teste** 	| **CT-10 - Cadastro de faturamento** 	|
|	Requisito Associado 	| RF-010 - A aplicação deve permitir ao microempreendedor individual administrar seu faturamento.|
| Objetivo do Teste 	|Verificar se o usuário consegue cadastrar seus faturamentos. |
| Passos 	| - Acessar a aplicação web <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Faturamentos” no menu <br> - Clicar em “Incluir novo faturamento” <br> - Preencher os campos <br> - Clicar em Incluir |
|Critério de Êxito | - O usuário conseguiu adicionar um faturamento corretamente. |


 
## Ferramentas de Testes (Opcional)

|Ferramenta   | Função | 
|------|-----------------------------------------|
|Insomnia| Teste de registros e rotas da API. | 
|xUnit e MSTest| Testes de unidade. | 
|Screen Recorder| Gravação da tela nos testes de software. | 
|Typeform| Formulário online de pesquisa aplicado aos usuários que fizeram o teste de usabilidade. | 
|xUnit | Testes de integração. | 
