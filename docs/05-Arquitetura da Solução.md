# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Mais Beleza](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/49ce7ee6-c617-4ccd-bd3a-7684dc04e6b8)

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

## Rotas e recursos

![1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/4541c69f-0d68-4581-a671-7136824ffe99)

![2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/51788340-aae0-4a7a-8a4c-9d721c3d90f8)

![3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/4cfd5cb3-b4e8-4064-bf88-740b31d11b94)

![4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/f6390dbb-f7fb-4a9a-87ef-3f1e466562a2)

Figura 17 - Rotas Swagger

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
|Bootstrap, React, React Native, React Native Paper, ASP.NET Core MVC | Bibliotecas e framework utilizados.  |
|C#, CSS, JavaScript, JSON (JavaScript Object Notation)	| Linguagens de programação utilizadas na criação do código fonte da aplicação. |
|Axios | Cliente HTTP baseado em Promises para fazer requisições. |
|Insomnia, MSTest, xUnit | Testes. |

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

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.

![Qualidade](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-maisbeleza/assets/100447878/628a1a0d-d5b3-45d2-b8ab-ee6d78e41de1)

Fonte: ISO/IEC 25010, 2011, tradução nossa.

Figura xx - Características de qualidade de software observadas pela equipe no desenvolvimento da aplicação.

### Descrição das subcaracterísticas escolhidas:

As subcaracterísticas de qualidade escolhidas garantem uma análise abrangente, orientando melhorias contínuas na qualidade da aplicação.

- Funcionalidade apropriada: Indica qual o grau em que as funções do sistema facilitam a realização de tarefas e objetivos para os quais o sistema foi especificado.
- Comportamento em relação ao tempo: Mede o tempo que o software leva para processar suas funções.
- Coexistência: Avalia o grau no qual o produto pode desempenhar as funções requeridas eficientemente enquanto compartilha ambiente e recursos comuns com outros produtos sem impacto negativo nos outros produtos.
- Reconhecimento de adequação: Mede o grau em que os usuários reconhecem que o produto é apropriado para suas necessidades.
- Maturidade: Medida da freqüência com que um software apresenta defeitos.
- Confidencialidade: Avalia o grau em que as informações e funções do sistema estejam acessíveis por quem tenha a devida autorização para isso.
- Modificabilidade: grau em que um produto ou sistema pode ser modificado de forma eficaz e eficiente sem introduzir defeitos ou degradando a qualidade do produto existente.
- Adaptabilidade: grau em que um produto ou sistema pode ser adaptado de forma eficaz e eficiente para diferentes hardwares, softwares ou outros ambientes operacionais em evolução ou em uso.

Fonte: ISO/IEC 25010, 2011, tradução nossa.

### Métricas:

|Subcaracterística  | Métrica           |Descrição              | Resultado            |
|-------------------|-------------------|-------------------|-------------------|
|Funcionalidade Apropriada |Taxa de conclusão de tarefas.  |Porcentagem de usuários que conseguem completar tarefas específicas dentro do sistema sem encontrar obstáculos significativos.| |
|Comportamento em Relação ao Tempo  |Tempo de resposta médio. |O tempo médio que o sistema leva para processar uma solicitação do usuário. | |
|Coexistência |Taxa de desempenho em ambiente compartilhado.  |Porcentagem de tempo em que o produto mantém um desempenho aceitável enquanto compartilha recursos com outros produtos no mesmo ambiente.| | |
|Reconhecimento de Adequação |Pesquisas de satisfação do usuário.  | Percentual de usuários que indicam, por meio de pesquisas, que a aplicação atende às suas necessidades.| | |
|Maturidade |Taxa de defeitos reportados.  |Número de defeitos relatados em relação ao tempo, demonstrando a estabilidade ao longo do tempo.| | |
|Confidencialidade |Todas as senhas cadastradas pelos usuários são armazenadas com criptografia. |Indicação da eficácia da medida de segurança.| | |
|Modificabilidade |Tempo médio de implementação de modificações.  |Tempo médio necessário para implementar modificações no sistema sem introduzir novos defeitos.| | |
|Adaptabilidade |Número de plataformas/dispositivos suportados. |Número total de diferentes plataformas, dispositivos ou ambientes operacionais para os quais o sistema pode ser adaptado sem perda significativa de funcionalidade.| | |
