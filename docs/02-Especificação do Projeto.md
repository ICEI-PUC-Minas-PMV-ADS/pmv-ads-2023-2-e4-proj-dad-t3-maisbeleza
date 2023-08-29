# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/blob/main/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.


## Personas

|Nº                  | FOTO                               |DESCRIÇÃO                               |
|--------------------|------------------------------------|----------------------------------------|
|1|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/c54dadea-f489-4739-834c-cbedfeafb36a)|Patrícia tem 37 anos, é residente de Itabira e trabalha como cabeleireira. Gosta muito de viajar e tem vontade de expandir seu negócio. Está buscando uma aplicação que a permita ter um melhor controle de seu faturamento, para que possa investir na expansão.|
|2|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/eac4cbd0-4809-41ce-b719-777bbd274ce9)|Pedro tem 33 anos é residente de Belo Horizonte e trabalha como designer.Gosta muito de estudar e se diz muito vaidoso. Está em busca de uma aplicação onde possa ter controle dos horários de seus procedimentos estéticos, para garantir que não se esqueça de algum de seus agendamentos.
|3|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/030bcac6-263c-4574-9bfa-d446a04e5cfd)|Beatriz tem 27 anos ,é residente de João Monlevade e trabalha como advogada. Gosta muito de viajar e de se cuidar. Por trabalhar muito, tem dificuldade em conversar com os profissionais para agendar seus procedimentos estéticos e, por isso, está em busca de uma aplicação que lhe permita ver os horários disponíveis, e fazer seu próprio agendamento.|
|4|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/50116df9-8a28-49e7-8f03-7d37dc3929f9)|Maria Eduarda tem 22 anos, é residente de Betim e está iniciando sua carreira como manicure. Gosta muito de estudar sobre assuntos relacionados a estética e de sair com seus amigos. Por estar no começo de sua carreira como microempreendedora, está com dificuldades em relação a administração do tempo de seus atendimentos. Por isso, está em busca de uma aplicação onde possa fazer o gerenciamento de sua agenda.|
|5|![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/75e5aa6b-ed75-475b-aff5-d962a2f51567)|Gabriel tem 29 anos, é residente de Belo Horizonte e tem um estúdio ontem realiza procedimentos como design de sobrancelhas, lash design e extensão de cílios. Gosta muito de sair para dançar e tem muito orgulho de seu negócio estar expandindo tão rapidamente. Está em busca de uma aplicação onde possa cadastrar seus serviços para que os clientes saibam quais procedimentos são oferecidos em seu estúdio.|



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Patrícia | Registrar meu faturamento          | Controlar minhas finanças       |
|Pedro     | Gerenciar meus agendamentos             | Controlar melhor os horários dos meus procedimentos|
|Beatriz   | Fazer meu próprio agendamento           | Economizar tempo |
|Maria Eduarda  | Gerenciar minha agenda          | Administrar melhor o tempo dos atendimentos dos meus clientes|
|Gabriel   | Cadastrar meus serviços           | Os clientes saberem quais os serviços que ofereço |




## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

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

![Quadrante_4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/ed705340-4cd1-425a-a6d6-43496a898061)
Figura xx - Quadrante de priorização de requisitos

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada. | BAIXA | 
|RNF-002| A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade. |  BAIXA | 
|RNF-003| A aplicação web deve ser compatível com os navegadores mais utilizados do mercado. |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre letivo, não podendo extrapolar a data de 10/12/2023. |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho. |

## Diagrama de Casos de Uso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/d5aa7d45-5f55-4171-90a7-d3ddd14ed635)

Figura xx - Diagrama de Casos de Uso
# Matriz de Rastreabilidade

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100734910/02a9af58-2509-44a5-8972-ffa1757ff925)

Figura xx - Matriz de Rastreabilidade


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/98122346/531a2104-be74-4eca-ba0c-37d957707e17)


## Gerenciamento de Equipe

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100742971/c0b5e6a3-7508-4686-87ab-d8f72edf96a2)

Equipe Front-End:

* Daiane Campos Procópio
* Fernanda Augusta de Barcelos Coura

Equipe Back-End:

* Guilherme Faustini de Azevedo
* Juliana Calazans Rodrigues de Magalhães
* Rúbia Karina Prado Costa

## Gestão de Orçamento

Os valores dos custos do projeto foram calculados com a estimativa de tempo de quatro meses, utilizando cinco profissionais. Qualquer alteração de custos deverá ser avaliada pelo cliente e gerente do projeto.

|Recursos Necessários | Valor  | Descrição |
|-------|---|----|
|Recursos Humanos| R$96.000,00| 5 pessoas x R$40,00/hora x 480 horas (4 meses)| 
|Software| R$12.000,00|  Licenças, Servidor | 
|Serviços| R$16.000,00|  Internet, Energia, Água, Alimentação |
|Custos extras| R$2.800,00 |Transporte, Treinamento |
