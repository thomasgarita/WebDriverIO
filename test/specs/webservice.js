const ResultsPage = require('../pageobjects/results.page');

describe('ResultsPage e2e tests', () => {
    it('TC 3-A: Validate webservice ', () => {
        
        browser.url('https://develop.terapeutica.digital/#/specialist/37378b04-4b69-452e-9fad-e83959388f41'); 
        browser.setupInterceptor();
        browser.pause(1000);
        //var request = browser.getRequest(1);
        //assert.equal(request.method, 'GET');
        //browser.expectRequest('GET', 'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41', 200);
        //browser.pause(1000);
        //browser.assertRequests();

    });

});