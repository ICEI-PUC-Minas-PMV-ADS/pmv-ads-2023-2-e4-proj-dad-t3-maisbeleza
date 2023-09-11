# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/972b7ce3-0d1b-4767-96c7-20c5cb93e6e2)

Figura 10 - Diagrama da arquitetura

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![Modelo relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/a2779bf0-b2dc-43c8-b048-29d8be24e7f6)
Figura 12 - Modelo entidade relacionamento

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![Projeto de BD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/4e4e3ba8-d6a5-4f0a-bfef-929debf75cb4)
Figura 13 - Esquema relacional

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

As tecnologias listadas abaixo serão utilizadas para a implementação da solução.

|Nome                | Função                             |
|--------------------|------------------------------------|
|Whatsapp, Microsoft Teams | Comunicação entre a equipe; comunicação entre a equipe e o Product Owner do projeto.  |
|Github | Repositório da documentação e código fonte do projeto; gerenciamento de funções e tarefas.  |
|Git | Gestão do código fonte (versionamento).  |
|Microsoft Visual Studio | Criação do código fonte. |
|MongoDB | Criação e administração do banco de dados.  |
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
