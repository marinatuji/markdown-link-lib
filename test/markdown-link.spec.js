const expect = require('chai').expect;
const getLinksFromMd = require('../lib/markdown-link');

describe('getLinksFromMd:', () => {
  describe('Arquivo com Link: [titulo](link)', () => {
    it('Retorna um array de objeto p/ link: {href:link, title:título}', () => {
      expect(getLinksFromMd(`texto 1 [título](https://www.google.com) 
      texto 2 [outro titulo](www.gmail.com)`))
        .to.deep.equal([{ href: 'https://www.google.com', title: 'título' },
        { href: 'www.gmail.com', title: 'outro titulo' }]);
    });
    it('Retorna um array de objeto p/ diretoorio: {href:link, title:título}', () => {
      expect(getLinksFromMd(`texto 1 [título](../diretorio/do/link.txt) 
      texto 2 [outro titulo](./outro-diretorio)`))
        .to.deep.equal([{ href: '../diretorio/do/link.txt', title: 'título' },
        { href: './outro-diretorio', title: 'outro titulo' }]);
    });
  });

  describe('Arquivo sem link:', () => {
    it('Retorna array vazio: Caso somente texto', () => {
      expect(getLinksFromMd(``)).to.eql([]);
    });
    it('Retorna array vazio: Caso formatação do link inválida [texto](link ', () => {
      expect(getLinksFromMd(`texto 1 [título](../diretorio/do/link.txt  texto 2 [outro titulo](./outro-diretorio`))
        .to.deep.equal([]);
    });
  });
});