# Extrai links de um arquivo markdown (Node.js) v.1.0.0 (Projeto com objetivo pedagógico)

Esta biblioteca destina-se a extrair links de um arquivo markdown para um array de objetos contendo titulo e o link.
A implementação é uma função getLinksFromMd() que recebe uma string e devolve um vetor de objetos como mostra o exemplo:
 
 ```javascript
 const str = `Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore)...`;

//retorna
const links = [{ href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },{ href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' }]
```

## Como instalar:

```node
> npm install markdown-link-lib
```

## Como utilizar:

```shell
> const result = require("markdown-link-lib");
> result.cpfValidator("Texto teste sem link")
> // retorna um objeto vazio
```

## Roadmap Oficial do Projeto:

### Versão 1.0.1 (Maio/2019)
  
  * alteração do README e testes finais.

### Versão 1.0.0 (Released)
  
  * estrutura inicial do projeto
  * funcionalidade: converte um link em arquivo *.md* no formato `[texto](link)` para um array de objetos.

## Conceitos

Arquivos markdown possuem a extensão *.md* , esse tipo de arquivo foi desenvolvido em 2004, por John Gruber e Aaron Swartz, para simplificar a estruturação de um texto, o Markdown é um sistema de formatação aberto que torna a escrita e a leitura mais simples. Com uma codificação mínima, além de fácil, ele é visualmente mais "limpo" e pode ser convertido facilmente para HTML.
O markdown marca alterações nos textos (subtítulos, negrito, itálico etc) apenas com os símbolos do teclado, sem usar teclas de atalho, menus, selecionando o texto e sem aquele visual complexo - para os que não estão acostumados - de HTML.