# To-do
Desafio técnico proposto pela Trybe


## Boas vindas ao repositório do ToDo!
Esse projeto consiste em uma aplicação CRUD para criar, listar, atualizar e deletar tasks a partir da ORM sequelize além de uma interface simples criada com o REACT
Aqui você encontrará informações de como baixar em sua máquina e rodar aplicação.

## Pré requisitos
  Esse projeto utiliza o mysql2, node, React, portanto é preciso que tenha baixado em sua máquina
  
## Habilidades treinadas
  - Criação de um CRUD com a ORM Sequelize e o mysql2
  - Arquitetura de software com camadas Model, Service e Controller
  - Criação de interface com o REACT e conceito de hooks
  - Criar uma API com o express
  - Consumir a API com as ferramentas axios e cors
  
  
## Clonando o reposítorio
1. Clone o repositório
    * `git clone git@github.com:camilaranniele/To-do.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd toDo`

  2. Instale as dependências
    * `npm install`

  3. Crie uma branch a partir da branch `master`
    * Verifique que você está na branch `master`
      * Exemplo: `git branch`
    * Se não estiver, mude para a branch `master`
      * Exemplo: `git checkout master`
    * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
      * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
      * Exemplo: `git checkout -b joaozinho-toDo`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
    * Verifique que as mudanças ainda não estão no _stage_
      * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
    * Adicione o novo arquivo ao _stage_ do Git
        * Exemplo:
          * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
          * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
    * Faça o `commit` inicial
        * Exemplo:
          * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
          * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto
    * Usando o exemplo anterior: `git push -u origin joaozinho-Todo`

  6. Crie um novo `Pull Request` _(PR)_
    * Vá até a página de _Pull Requests_ do repositório no GitHub
    * Clique no botão verde _"New pull request"_
    * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Clique no botão verde _"Create pull request"_
    * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
    
    
 ## Para rodar a aplicação
   1 - Servidor back-end
    Entre na pasta back-end `cd back-end`
    Rode o comando `npm start` Esse comando ativará o nodemon para rodar o servidor na porta 3001 possibilitando também que a qualquer modificação o servidor, automaticamente, rode o servidor novamente
    
  2- Aplicação front-end
      Entre na pasta front-end `cd front-end`
      Rode o comando `npm start` Esse comando abrirá uma guia no seu navegador na porta 3000, onde terá um formulário para criar/editar uma task, além de uma tabela com todas as tarefas cadastradas.
  


