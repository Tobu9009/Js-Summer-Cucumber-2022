//Gherkin reliesOn StepDef reliesOn Homepage Functions reliesOn Commands
class CommandsHw{
    
    async findWebElement(locator) {
        return await $(locator);
    }
    

    /**
     * Generic function to find a webElement
     * Input: locator
     */

    async findWebElements(locator) {
        await browser.waitUntil(async() => {
            const elements = await $$(locator);
            return elements.length > 0;
        });
        return await $$(locator);
    }

    async getElementText(locator){
        return await $(locator).getText();
    }
    async scroll(locator){
        return await $(locator).scrollIntoView();
    }
    async getElementAttribute(locator, attributeName){
        return await $(locator).getAttribute(attributeName)
    }
    async getPageTitle(){
        return await browser.getTitle()
    }
    /**
     * Generic function to click a webElement
     * Input: locator
     */
    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }
    async selectFromAutoSuggestions(locatorForAutoSuggestionElements, valueToSelect) {
        const autoSuggestionElements = await this.findWebElements(locatorForAutoSuggestionElements);
        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare(valueToSelect.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
    }
    async doesElementExist(locator){
        const element = await this.findWebElement(locator)
        return await element.isExisting()
    }
    async isElementDisplayed(locator){
        const element = await this.findWebElement(locator)
        return await element.isDisplayed();
        
    }
    async isWebElementDisplayedWithWait(locator) {
        await $(locator).waitForDisplayed();
        return await $(locator).isDisplayed();
    }
    async isElementSelected(locator){
        const element = await this.findWebElement(locator)
        return await element.isSelected();
    }
    async isElementEnabled(locator){
        const element = await this.findWebElement(locator)
        return await element.isEnabled();
    }
    
    /**
     * Generic function to type a webElement
     * Input: locator, data
     */
    
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }
}
module.exports = CommandsHw