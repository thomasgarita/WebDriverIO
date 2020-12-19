const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get btnPhisical () { return $('label=Física') }
    get btnLanguage () { return $('label=Lenguaje') }
    get btnOcupational () { return $('label=Ocupacional') }
    get inputSearch () { return $('#search-input') }
    get btnSearch () { return $("//input[@value='Buscar']") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    search () {
        this.btnSearch.click(); 
    }

    validateFocus () {
        this.btnPhisical.click(); 
        expect(this.inputSearch).toBeFocused()
    }

    validateSearch (searchData) { 
        this.inputSearch.setValue(searchData);
        this.btnSearch.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();