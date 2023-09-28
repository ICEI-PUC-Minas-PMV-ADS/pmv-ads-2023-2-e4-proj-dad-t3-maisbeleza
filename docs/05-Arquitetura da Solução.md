# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/972b7ce3-0d1b-4767-96c7-20c5cb93e6e2)

Figura 10 - Diagrama da arquitetura

A escolha do SQL Server como banco de dados da API se deu por sua integração com o ASP.NET, simplificando o processo de desenvolvimento da API e tornando mais eficiente a administração de recursos da equipe.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Classe UML (12)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/91e6e69d-d058-4b25-aaa5-53868d3458dc)




Figura 11 - Diagrama de classes

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Modelo relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/3c03d382-64c0-419c-8918-17a96e1c9b05)

Figura 12 - Modelo entidade relacionamento

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![Projeto de BD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/5415b428-0ca4-481d-be11-fc756ee5359e)

Figura 13 - Esquema relacional

## Modelo Físico
Segue abaixo a representação do banco de dados:

![print_db](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/177cd1c7-afb4-41a5-adcd-b0b3e12dffec)

Figura 14 - Tabelas de Agenda, Agendamento e Clientes

![print-db-2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/0b71eee8-8950-4412-9071-71bcad8718de)

Figura 15 - Tabelas de Faturamentos e Meis

![print-db-3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/81182674/47dd2044-fc15-47c3-b865-57ea3af7e5e6)

Figura 16 - Tabela de Serviços


## Tecnologias Utilizadas

As tecnologias listadas abaixo serão utilizadas para a implementação da solução.

|Nome                | Função                             |
|--------------------|------------------------------------|
|Whatsapp, Microsoft Teams | Comunicação entre a equipe; comunicação entre a equipe e o Product Owner do projeto.  |
|Github | Repositório da documentação e código fonte do projeto; gerenciamento de funções e tarefas.  |
|Git | Gestão do código fonte (versionamento).  |
|Microsoft Visual Studio | Criação do código fonte. |
|Microsoft SQL Server | Criação e administração do banco de dados.  |
|Expo Dev | Criação do código da aplicação mobile. |
|Lucidchart  | Criação dos diagramas e modelos. |
|Marvel App  | Projeto de interface e wireframes. |
|React, React Native, React Native Paper, ASP.NET Core MVC | Bibliotecas e framework utilizados.  |
|C#, HTML, CSS, JavaScript, JSON (JavaScript Object Notation)	| Linguagens de programação utilizadas na criação do código fonte da aplicação. |
|Insomnia | Testes. |

A ilustração de como as tecnologias estão relacionadas e como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário, pode ser visualizada na figura 10, Diagrama da arquitetura.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
