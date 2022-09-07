//Gherkin reliesOn StepDef reliesOn Homepage Functions reliesOn Commands
const Commands = require('../CommandsHw');
class coolMathGames{
    commands = new Commands

    searchButton = '//div[@class="container"]//label[@for="edit-search-bar"]'
    //searchButton = '//header/nav/div/div/div/div/div/label'
    searchBar = '//div[@class="container"]//input[@name="search_bar"]'
    results26 = '//header[@class="page__header d-none d-lg-block"]//div[@class="search-result-item"]'
    flipPalace = '//header[@class="page__header d-none d-lg-block"]//a[@title="Flip Palace"]'
    
    async clickSearchBar(){
        await this.commands.clickWebElement(this.searchButton);
    }

    async typeInSearchBar(data){
        await this.commands.typeInWebElement(this.searchBar, data);
    }

    async verify26(){
        let aceResults = await $$(this.results26);
        await aceResults[0].waitForEnabled({timeoutMsg: 'Login button is not enabled'})
        if(aceResults.length === 26){
            return true;
        }
    }
    
    async clickFlipPalace(){
        await this.commands.clickWebElement(this.flipPalace)
    }
}
module.exports = coolMathGames