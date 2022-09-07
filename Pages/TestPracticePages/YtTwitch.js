const moment = require('moment')
const Commands = require('../CommandsHw')

class YtTwitch{
    searchBar = '//input[@id="search"]'
    peggle = '//b[contains(text(),"peggle")]'
    searchButton = '//button[@id="search-icon-legacy"]'
    //firstSuggestedVideo = '//ytd-thumbnail//a[@href="/watch?v=VlwK6ioJ8w8&t=12s"]'
    firstSuggestedVideo = '//yt-formatted-string[contains(text(),"I speedrun")]'
    moreButton = '//tp-yt-paper-button[@id="expand"]'
    //twitchLink= '//div[@id="above-the-fold"]//a[text()="https://bit.ly/DougTwitch"]'
    twitchLink = '//a[text()="https://bit.ly/DougTwitch"]'
    //twitchLink = '//ytd-expander[@id]//div[@class="style-scope ytd-expander"]//a[text()="https://bit.ly/DougTwitch"]'
    
    commands = new Commands
    async typeInSearchBar(value){
        await this.commands.typeInWebElement(this.searchBar, value)
    }
    async clickOnSearchBar(){
        await this.commands.clickWebElement(this.searchBar)
    }
    async clickOnPeggle(){
        await this.commands.clickWebElement(this.peggle)
    }
    async clickOnSearchButton(){
        await this.commands.clickWebElement(this.searchButton)
        await browser.setWindowSize(1800,1200)
    }
    async clickOnFirstSuggestedVideo(){
        await this.commands.clickWebElement(this.firstSuggestedVideo)
    }
    async expandDescription(){
        await this.commands.clickWebElement(this.moreButton)
    }
    async clickTwitchLink(){
        await this.commands.clickWebElement(this.twitchLink)
    }

    async closeAllWindowsButTwitch(){
        const allHandles = await browser.getWindowHandles()
        let titleContains = 'DougDougW'
        for(const handle of allHandles){
            await browser.switchToWindow(handle);
            const pageTitle = await browser.getTitle();
            if(!pageTitle.includes(titleContains)){
                await browser.closeWindow();
            }
        }
    }
    async returnSep30(){

    }
}
module.exports = YtTwitch
