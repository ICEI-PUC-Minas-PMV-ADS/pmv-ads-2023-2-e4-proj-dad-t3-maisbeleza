# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

| **Caso de Teste** 	| **CT-01 – Cadastro de usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Cadastro” no menu <br> - Preencher os campos obrigatórios <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 -Efetuar login** 	|
|	Requisito Associado 	| RF-002 - A aplicação deve permitir ao usuário cadastrado efetuar login em sua conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar o login . |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Preencher os campos obrigatórios <br> - Clicar em "Entrar" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 -Efetuar logout** 	|
|	Requisito Associado 	| RF-003 - A aplicação deve permitir ao usuário cadastrado fazer logout de sua conta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar o logout . |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em "Sair" |
|Critério de Êxito | - O logout foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 -Gerenciamento de conta** 	|
|	Requisito Associado 	| RF-004 - A aplicação deve permitir ao usuário gerenciar a sua conta.. |
| Objetivo do Teste 	| Verificar se o usuário consegue gerenciar seus dados  . |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Acessar o "Perfil" no menu <br> - Clicar em Editar <br> - Alterar informações <br> - Clicar em Salvar. |
|Critério de Êxito | - O usuário conseguiu alterar seus dados com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 -Aceitar ou recusar agendamentos** 	|
|	Requisito Associado 	| RF-007 - A aplicação deve permitir ao microempreendedor individual aceitar ou negar agendamentos. |
| Objetivo do Teste 	| Verificar se o usuário  consegue aceitar ou recusar agendamentos. |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Agenda” no menu <br> - Selecionar um agendamento e clicar em “Excluir” |
|Critério de Êxito | - O usuário conseguiu excluir um agendamento com sucesso. |
| **Caso de Teste** 	| **CT-08 -Visualização da agenda** 	|
|	Requisito Associado 	| RF-008 -A aplicação deve permitir ao microempreendedor individual visualizar sua agenda.. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar sua agenda.. |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Agenda” no menu |
|Critério de Êxito | - O usuário conseguiu visualizar sua agenda corretamente. |
| **Caso de Teste** 	| **CT-09 -Cadastro de serviços** 	|
|	Requisito Associado 	| RF-009 -A aplicação deve permitir ao microempreendedor individual cadastrar serviços. |
| Objetivo do Teste 	|Verificar se o usuário consegue cadastrar seus serviços. |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Serviços” no menu <br> - Clicar em “Incluir novo serviço” <br> - Preencher os campos <br> -Clicar em "Incluir"|
|Critério de Êxito | - O usuário conseguiu adicionar um serviço corretamente. |
| **Caso de Teste** 	| **CT-10 -Cadastro de faturamento** 	|
|	Requisito Associado 	| RF-010 - A aplicação deve permitir ao microempreendedor individual administrar seu faturamento.|
| Objetivo do Teste 	|Verificar se o usuário consegue cadastrar seus faturamentos. |
| Passos 	| -Acessar a aplicação <br> - Clicar em “Login” no menu <br> - Realizar o login <br> - Clicar em “Faturamentos” no menu <br> - Clicar em “Incluir novo faturamento” <br> - Preencher os campos <br> - Clicar em Incluir |
|Critério de Êxito | - O usuário conseguiu adicionar um faturamento corretamente. |


 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
