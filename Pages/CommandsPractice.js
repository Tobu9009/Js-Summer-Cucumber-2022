class CommandsPractice{

    async findWebElement(locator){
        return await $(locator);
    }

    async getElementText(locator){
        return await $(locator).getText();
    }

}