const HomePage = require('../pageobjects/home.page');


describe('Homepage e2e tests', () => {
    
    beforeEach(()=>{
        HomePage.open();
    })
    
    it('TC 1-A: Search without parameters', () => {
        HomePage.search();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/')
    });
    
    it('TC 1-B: Validate focus', () => {
        HomePage.validateFocus();    
    });
    
    it('TC 1-C: Validate search', () => {
        HomePage.validateSearch('maria');    
        expect(browser).toHaveUrlContaining('&q=maria')
    });

});


