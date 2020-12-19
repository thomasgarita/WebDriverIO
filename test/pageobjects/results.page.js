const Page = require('./page');


class ResultsPage extends Page {
    
    get inputSearch () { return $('.form-control') }
    get btnSearch () { return $("//input[@value='Buscar']") }
    get btnPhisical () { return $('//*[@id="app"]/div[2]/main/div[2]/div/ul/li[1]/div/a[1]') }
    get btnLanguage () { return $('//*[@id="app"]/div[2]/main/div[2]/div/ul/li[1]/div/a[2]') }
    get btnOcupational () { return $('//*[@id="app"]/div[2]/main/div[2]/div/ul/li[1]/div/a[3]') }
    get btnlist () { return $('a.active') }
    get btnMap () { return $('.icon-map-1') }
    get map () { return $('div#map') }
    get linkProfile () { return $('a.btn_listings')[0] }
    

    validatePhisicalBTN () {
        this.btnPhisical.click(); 
    }
    validateLanguageBTN () {
        this.btnLanguage.click(); 
    }
    validateOcupationalBTN () {
        this.btnOcupational.click(); 
    }

    validateSearch (searchData) {
        this.inputSearch.setValue(searchData);
        this.btnSearch.click(); 
    }

    validateIfMapExists (data) {
        this.btnlist.click(); 
        expect(browser.$("div#map")).not.toBeDisplayed();
        this.btnMap.click();
        expect(browser.$("div#map")).toBeDisplayed();
    }

    
        open () {
        return super.open('/#/search');
    }
}

module.exports = new ResultsPage();