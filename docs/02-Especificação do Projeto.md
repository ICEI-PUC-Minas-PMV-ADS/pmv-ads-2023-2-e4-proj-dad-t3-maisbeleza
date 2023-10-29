# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/blob/main/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.


## Personas

|Nº                  | FOTO                               |DESCRIÇÃO                               |
|--------------------|------------------------------------|----------------------------------------|
|1|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/c54dadea-f489-4739-834c-cbedfeafb36a)|Patrícia tem 37 anos, é residente de Itabira e trabalha como cabeleireira. Gosta muito de viajar e tem vontade de expandir seu negócio. Está buscando uma aplicação que a permita ter um melhor controle de seu faturamento, para que possa investir na expansão.|
|2|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/eac4cbd0-4809-41ce-b719-777bbd274ce9)|Pedro tem 33 anos, é residente de Belo Horizonte e trabalha como designer. Gosta muito de estudar e se diz muito vaidoso. Está em busca de uma aplicação onde possa ter controle dos horários de seus procedimentos estéticos, para garantir que não se esqueça de algum de seus agendamentos.
|3|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/030bcac6-263c-4574-9bfa-d446a04e5cfd)|Beatriz tem 27 anos, é residente de João Monlevade e trabalha como advogada. Gosta muito de viajar e de se cuidar. Por trabalhar muito, tem dificuldade em conversar com os profissionais para agendar seus procedimentos estéticos e, por isso, está em busca de uma aplicação que lhe permita ver serviços oferecidos e os horários disponíveis para que possa fazer seu próprio agendamento.|
|4|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/50116df9-8a28-49e7-8f03-7d37dc3929f9)|Maria Eduarda tem 22 anos, é residente de Betim e está iniciando sua carreira como manicure. Gosta muito de estudar sobre assuntos relacionados a estética e de sair com seus amigos. Por estar no começo de sua carreira como microempreendedora, está com dificuldades em relação a administração do tempo de seus atendimentos. Por isso, está em busca de uma aplicação onde possa fazer o gerenciamento de sua agenda.|
|5|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/17b21b6c-be9a-4606-9d42-b76841e92039)|Laís tem 45 anos, é residente de Belo Horizonte e tem um estúdio onde realiza procedimentos como design de sobrancelhas, lash design e extensão de cílios. Gosta muito de sair para dançar e tem muito orgulho de seu negócio estar expandindo tão rapidamente. Está em busca de uma aplicação onde possa cadastrar seus serviços para que os clientes saibam quais procedimentos são oferecidos em seu estúdio.|
|6|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/3e44f820-0a7d-4965-b6a4-d6cb8eeed73c)|Gabriel tem 29 anos, é residente de Contagem, e tem uma barbearia. Gosta muito de ouvir música eletrônica e de fazer trilhas. Se considera muito desorganizado e por isso acaba se atrapalhando com os horários de seus clientes. Está em busca de uma aplicação onde possa visualizar sua agenda mais claramente. |
|7|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/fa196b63-5500-4f4b-a7d9-8e52c7ed5ca9)|Paula tem 30 anos, é residente de Mariana e trabalha como maquiadora.  Gosta de sair com suas amigas e viajar. Relata ter uma verdadeira paixão por seu trabalho, principalmente nos dias que faz maquiagem em noivas. No entanto, relata que para fazer este tipo de atendimento, ela tem que recusar outras clientes que tentam agendar no mesmo dia. Por isso, está em busca de uma aplicação onde possa aceitar ou recusar as solicitações de agendamento.|


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Patrícia | Registrar meu faturamento          | Controlar minhas finanças       |
|Pedro     | Gerenciar meus agendamentos             | Controlar melhor os horários dos meus procedimentos|
|Beatriz   | Visualizar os serviços oferecidos pelos profissionais e fazer meus próprios agendamentos         | Economizar tempo |
|Maria Eduarda  | Gerenciar o horário dos meus clientes        | Administrar melhor o tempo que gastarei com os atendimentos|
|Gabriel   | Cadastrar meus serviços           | Os clientes saberem quais os serviços que ofereço |
|Laís   | Visualizar minha agenda        | Não confundir os horários dos atendimentos|
|Paula   | Ter uma opção de aceitar ou recusar uma solicitação de agendamento        | Agendar os atendimentos de acordo com minha disponibilidade de horário |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, muitos profissionais do ramo da beleza tem buscado se formalizar através do Microempreendedor Individual, conhecido como Mei, devido aos benefícios do registro. Consequentemente, isso acaba gerando maiores responsabilidades com o seu negócio. Alguns microempreendedores acabam fechando a sua empresa devido à ineficácia de gestão. 

Como forma de melhoria, a aplicação distribuída Mais Beleza tem o intuito de tornar mais prático e como efeito facilitar a organização de pequenas empresas, com os registros de serviços prestados, controle de faturamento e organização da agenda com os horários dos clientes registrados.

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – Cadastro (Mei) 

O processo descrito abaixo realiza o cadastro, login e acesso a página de perfil e gerenciamento da conta no sistema Web.

Referente ao RF-001 / RF-002 / RF-003 / RF-004:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/5315064f-5122-40db-ac4a-d9d6388dd1c7)

### Processo 2 – Cadastro (Cliente) 

O processo descrito abaixo realiza o cadastro, login e acesso a página de perfil e gerenciamento da conta no sistema mobile.

Referente ao RF-001 / RF-002 / RF-003 / RF-004:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/6a17d859-a2fb-491b-9fcf-48fe2e9906a1)


### Processo 3 – Agendamento 

O processo descrito abaixo demonstra a funcionalidade de agenda do usuário Mei com a opção de negar e aceitar agendamento realizado por usuário Cliente.

Referente ao RF-005 / RF-006 / RF-007 / RF-008:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/9330f9f9-4944-42d9-8d88-59eb427731fd)


### Processo 4 – Serviço (Mei)

O processo descrito abaixo demonstra a funcionalidade de cadastrar serviços do usuário Mei com a opção de incluir, editar e excluir.

Referente ao RF-009:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/07a9db36-6a01-4d44-a775-01f4d51c6336)

### Processo 5 – Faturamento (Mei)

O processo descrito abaixo demonstra a funcionalidade de cadastrar faturamentos do usuário Mei com a opção de incluir, editar e excluir.

Referente ao RF-010:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/a0ad25a7-bb0d-4a48-8a62-17fa6d79a021)




## Indicadores de Desempenho

| Indicador | Objetivos |     Descrição | Cálculo   | Fonte de dados | Perspectiva | Meta |
|-----------------|-----------|---------------------|--------------|-----------------|--------------|--------|
| Número de cadastros de MEIs na aplicação web | Acompanhar o crescimento da utilização da aplicação web por microempreendedores| Avaliar a quantidade de cadastros de usuários | Número mensal de cadastros| Banco de dados | Evolução do produto | Ter um número cada vez maior de cadastros|
| Eficiência| Avaliar se a aplicação web está cumprindo suas funções corretamente | Monitorar a eficiência da aplicação web em relação ao registro de informações fornecidas pelo usuário | | Banco de dados | Qualidade do produto | Sem taxa de erro |
| Número de cadastros de clientes na aplicação mobile | Acompanhar o crescimento da utilização da aplicação mobile | Avaliar a quantidade de cadastros de usuários | Número mensal de cadastros| Banco de dados | Evolução do produto | Ter um número cada vez maior de cadastros|
| Eficiência| Avaliar se a aplicação mobile está cumprindo suas funções corretamente | Monitorar a eficiência da aplicação mobile em relação ao registro de informações fornecidas pelo usuário | | Banco de dados | Qualidade do produto | Aplicativo funcionando corretamente |
| Número de downloads do Aplicativo | Acompanhar o crescimento do aplicativo | Avaliar a quantidades de downloads do aplicativo | Número mensal de downloads| Playstore e Apple Store | Evolução do produto | Média de 100 downloads mensais |
|Avaliações do aplicativo           | Monitorar o nível de aceitação do aplicativo | Calcular a média de feedback dos usuários que utilizam o aplicativo | Nota média dada pelos usuários por período  | Playstore e Apple Store | Qualidade do produto | Avaliação média de 4 estrelas |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir ao usuário cadastrar uma conta. | ALTA | 
|RF-002| A aplicação deve permitir ao usuário cadastrado logar em sua conta. | ALTA |
|RF-003| A aplicação deve permitir ao usuário cadastrado sair da sua conta. | BAIXA |
|RF-004| A aplicação deve permitir ao usuário gerenciar a sua conta. | MÉDIA |
|RF-005| A aplicação deve permitir ao cliente fazer agendamentos. | MÉDIA |
|RF-006| A aplicação deve permitir ao cliente gerenciar seus agendamentos. | MÉDIA |
|RF-007| A aplicação deve permitir ao microempreendedor individual aceitar ou negar agendamentos. | MÉDIA |
|RF-008| A aplicação deve permitir ao microempreendedor individual visualizar sua agenda. | MÉDIA |
|RF-009| A aplicação deve permitir ao microempreendedor individual cadastrar serviços. | ALTA |
|RF-010| A aplicação deve permitir ao microempreendedor individual administrar seu faturamento. | ALTA |

#### Técnica de priorização de requisitos

A técnica de priorização de requisitos utilizada foi a Escala de Três Níveis, com os valores "Alta", "Média" e "Baixa", associada ao quadrante de priorização, que estabeleu a importância e urgência dos requisitos.

![Quadrante_4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/2f150beb-d294-4274-a42e-013f822aedb0)
Figura 02 - Quadrante de priorização de requisitos

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada. | BAIXA | 
|RNF-002| A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade. |  BAIXA | 
|RNF-003| A aplicação web deve ser compatível com os navegadores mais utilizados do mercado. |  MÉDIA |
|RNF-004| A aplicação móvel deve ser compatível com o sistema Android.  |  ALTA |
|RNF-005| A aplicação móvel deve ser intuitiva para que o usuário consiga encontrar as informações que deseja facilmente.  |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre letivo, não podendo extrapolar a data de 26/11/2023. |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho. |

## Diagrama de Casos de Uso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/d3c83268-beeb-46bf-8d7d-2b6c91cb59ed)
Figura 03 - Diagrama de Casos de Uso

# Matriz de Rastreabilidade

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/3d4a303d-6a6b-43ae-8b55-739557365349)

Figura 04 - Matriz de Rastreabilidade


# Gerenciamento de Projeto

De acordo com o PMBoK v6, as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas.

## Gerenciamento de Tempo

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/98122346/12e1051b-816b-4547-89c9-d46222b70fb7)

 Figura 05 - Diagrama de Gantt

## Gerenciamento de Equipe
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100742971/8d63657d-3d1a-421a-bb26-8f750e8e1711)

Figura 06 - Gerenciamento da equipe

Equipe Front-End:

* Daiane Campos Procópio
* Fernanda Augusta de Barcelos Coura

Equipe Back-End:

* Guilherme Faustini de Azevedo
* Juliana Calazans Rodrigues de Magalhães
* Rúbia Karina Prado Costa

## Gestão de Orçamento

Os valores dos custos do projeto foram calculados com a estimativa de tempo de quatro meses, utilizando cinco profissionais, totalizando R$103.600,00. Qualquer alteração de custos deverá ser avaliada pelo cliente e gerente do projeto.

|Recursos Necessários | Valor  | Descrição |
|-------|---|----|
|Recursos Humanos| R$72.800,00| R$120,00/hr x 160 horas| 
|Software| R$12.000,00|  Licenças, Servidor | 
|Serviços| R$16.000,00|  Internet, Energia, Água, Alimentação |
|Custos extras| R$2.800,00 |Transporte, Treinamento |
