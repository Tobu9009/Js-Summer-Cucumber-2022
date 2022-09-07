const Commands = require('../CommandsHw');
class AppleWikipediaPages{
    commands = new Commands
    searchBar = '//input[@title="Search"]'
    suggestionOpening = '//span[text()="'
    suggestionClosing = '"]'
    appleEastSideMapsSuggestion = '//span[contains(text(), "Upper")]'
    wikipediaSuggestion = '//h3[contains(text(), "Wikipedia")]'
    createAccount = '//span[text()="Create account"]'
    username = '//input[@id="wpName2"]'
    password = '//input[@id="wpPassword2"]'
    passwordRetype = '//input[@id="wpRetype"]'
    email = '//input[@id="wpEmail"]'
    async clickSearchBar(){
        await this.commands.clickWebElement(this.searchBar);
    }
    async typeInSearchBar(value){
        await this.commands.typeInWebElement(this.searchBar, value)
        await this.commands.clickWebElement(this.suggestionOpening + value + this.suggestionClosing)
        await browser.setWindowSize(1500,1200)
        browser.pause(2000)
    }
    async scrollWikipediaIntoView(){
        await this.commands.scroll(this.appleEastSideMapsSuggestion)
    }
    async clickAppleWikipediaSuggestion(){
        await this.commands.clickWebElement(this.wikipediaSuggestion)
    }
    async clickCreateAccount(){
        await this.commands.clickWebElement(this.createAccount)
    }
    async typeInUsername(value){
        await this.commands.typeInWebElement(this.username, value)
    }
    async typeInPassword(value){
        await this.commands.typeInWebElement(this.password, value)
    }
    async typeInConfirmPassword(value){
        await this.commands.typeInWebElement(this.passwordRetype, value)
    }
    async typeInEmail(value){
        await this.commands.typeInWebElement(this.email, value)
    }
    async verifyOnPage(){
        return await this.commands.getPageTitle();
    }

}
module.exports = AppleWikipediaPages