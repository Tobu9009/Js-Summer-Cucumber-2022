const Commands = require('../CommandsHw');

class TestPage{
    commands = new Commands
    hotelsRewardsLink = '//a[contains(text(),"Hotels.com Rewards")]'
    joinNowButton = '//a[text()="Join Now"]'
    emailAddress = '//input[@type="email"]'
    firstName = '//input[@name="firstName"]'
    lastName = '//input[@name="lastName"]'
    password = '//input[@type="password"]'
    continueButton = '//button[@type="submit"]'
    //EnterAnEmailAddress = '//div[contains(text(),"an email address")]'
    //EnterAFirstName = '//div[contains(text(),"a first name")]'
    //EnterALastName = '//div[contains(text(), "a last name")]'
    //EnterAPassword = '//div[contains(text(), "a password")]'
    
    async clickHotelsRewardsLink(){
        await this.commands.clickWebElement(this.hotelsRewardsLink)
    }
    async verifyHotelsRewardsNewWindow(){
        const allHandles = await browser.getWindowHandles()
        for(const handle of allHandles){
            await browser.switchToWindow(handle);
        }
        if(allHandles.length === 2){
            return true;
        }
    }
    async clickJoinNowButton(){
        await this.commands.clickWebElement(this.joinNowButton)
    }
    async verifyFormIsBlank(){
        //await this.commands.clickWebElement(this.emailAddress)
        // await this.commands.clickWebElement(this.firstName)
        // await this.commands.clickWebElement(this.lastName)
        // await this.commands.clickWebElement(this.password)
        // await this.commands.clickWebElement(this.continue)
        // if(this.commands.isElementDisplayed(this.EnterAnEmailAddress) === true){
        //     console.log("IM HAPPY")
        // }
        await this.commands.typeInWebElement(this.emailAddress, "")
        await this.commands.typeInWebElement(this.firstName, "")
        await this.commands.typeInWebElement(this.lastName, "")
        await this.commands.typeInWebElement(this.password, "")
        return true;
    }
    async verifyContinueButtonIsNotEnabled(){
        return await this.commands.isElementEnabled(this.continueButton)
    }
}
module.exports = TestPage