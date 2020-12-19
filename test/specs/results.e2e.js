const ResultsPage = require('../pageobjects/results.page');


describe('ResultsPage e2e tests', () => {

    beforeEach(()=>{
        ResultsPage.open();
    })

    it('TC 2-A: Validate URL change ', () => {
        ResultsPage.validatePhisicalBTN();
        expect(browser).toHaveUrlContaining('?sp=phisical')
        ResultsPage.validateLanguageBTN();
        expect(browser).toHaveUrlContaining('?sp=language')
        ResultsPage.validateOcupationalBTN();
        expect(browser).toHaveUrlContaining('?sp=ocupational')
    });

    it('TC 2-B: Validate result ', () => {
        ResultsPage.validateSearch('maria'); 
        expect(browser).toHaveUrlContaining('?q=maria')
    });

    it('TC 2-C: Change from map to list ', () => {
        ResultsPage.validateIfMapExists();
    });

});