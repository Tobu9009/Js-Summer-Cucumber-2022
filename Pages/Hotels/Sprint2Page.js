const CommandsHw = require('../CommandsHw');
const MyMomentFunctions = require('../../Utils/MyMomentsFunction')

class Sprint2Page{
    //tc19
    goingToLocator = "//button[@aria-label='Going to']";
    //goingToLocator = '//div[@class="uitk-typeahead"]//div[@class="uitk-field has-floatedLabel-label has-icon has-no-placeholder"]//*[@viewBox = "0 0 24 24"]'
    toTypeInGoingToLocator = '#destination_form_field';
    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong"
    dateFormField = '#date_form_field-btn'
    clickNextMonth = '//*[@aria-label="Next month"]/..'
    clickPreviousMonth = '//*[@aria-label="Previous month"]/..'
    monthIWant = '//h2[text()="December 2022"]'
    doneButton = '//button[@data-stid = "apply-date-picker"]'
    submitButton = '//button[@id="submit_button"]'
    tellUsHowWeCanImprove= '//span[contains(text(),"Tell us")]'
    shareFeedbackButton = '//a[contains(text(),"Share")]'
    //tc17
    monthHeadingLocatorStarts = 'h2='
    monthDatesLocatorStarts = '//h2[text()="'
    previousButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[1]";
    monthDatesLocatorEnds_DisableDated = '"]/following-sibling::table//button[@disabled]';
    //tc29
    listYourProperty = '//div[text()="List your property"]'
    whatWouldYouLikeToList = '//p[contains(text(),"would you")]'
    lodging = '//div[@id="classification_lodging"]'
    privateResidence = '//div[@id="classification_privateResidence"]'
    step1Of3 = '//div[text()="Step 1 of 3"]'
    seeHowMuchYouCouldEarn = '//h1[contains(text(),"See")]'
    increaseBedrooms = '//button[@aria-label="Increase bedrooms"]'
    increaseBathrooms = '//button[@aria-label="Increase bathrooms"]'
    nextButton = '//div[@class="bed-and-bath__bottom"]//button'
    step2Of3 = '//div[text()="Step 2 of 3"]'
    whereIsYourPropertyLocated = '//h1[contains(text(),"Where")]'
    enterAddressLocator = '//input[@aria-label="Enter address..."]'
    addressAutoSuggestionLocator = '//div[@class="typeahead"]//li'
    map = '//div[@data-wdio="google-map-component"]'
    mapPin = '//img[@src = "https://maps.gstatic.com/mapfiles/transparent.png"]/..'
    //tc23
    fiveStarButton = '//span[contains(text(),"5★")]'
    sortBy = '//select[@name="sort"]'
    //price = 'Price'
    //price = '//option[text()="Price"]'
    price = '//header/div[1]/div[2]/form[1]/fieldset[1]/div[1]/select[1]/option[2]'
    fiveStarRating = '//span[contains(text(),"5.0")]'
    prices = '//div[@class="uitk-spacing uitk-spacing-padding-block-half"]//div[contains(text(),"price")]'
    //tc31
    languageButton = '//div[text()="English"]/../..'
    languageDropdown = '//select[@id="language-selector"]'
    saveButton = '//button[text()="Save"]'
    spanishLanguageButton = '//div[text()="Español"]/../..'
    guardarButton = '//button[text()="Guardar"]'
    //tc30
    getTheAppButton = '//button[text()="Get the app"]'
    inputPhoneNumber = '//input[@id="phoneNumber"]'
    pleaseEnterValidPhoneNumber = '//div[contains(text(),"Please enter")]'

    commands = new CommandsHw;
    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
        await browser.pause(2000);
    }
    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }
    async clickDateFormField(){
        await this.commands.clickWebElement(this.dateFormField)
    }
    async goToMonth(month, year){
        while(await this.commands.isElementDisplayed('//h2[text()="'+month+' '+year+'"]') == false){
            await this.commands.clickWebElement(this.clickNextMonth)
        }
    }
    async goToPrevMonth(){
        await this.commands.clickWebElement(this.clickPreviousMonth)
    }
    async clickFirstDay(month, day, year){
        let firstDay = await $('//h2[text()="'+month+' '+year+'"]/following-sibling::table//button[@data-day ="'+day+'"]')
        await this.commands.clickWebElement(firstDay);
    }
    async clickLastDay(month, day, year){
        let lastDay = await $('//h2[text()="'+month+' '+year+'"]/following-sibling::table//button[@data-day ="'+day+'"]')
        await this.commands.clickWebElement(lastDay);
    } 
    async clickDoneButton(){
        await this.commands.clickWebElement(this.doneButton)
    }
    async clickSubmitButton(){
        await this.commands.clickWebElement(this.submitButton);
    }
    async verifyTellUsDisplayed(){
        return await this.commands.isElementDisplayed(this.tellUsHowWeCanImprove)
    }
    async verifyShareFeedbackDisplayedAndEnabled(){
        if(await this.commands.isElementEnabled(this.shareFeedbackButton) == true && await this.commands.isElementDisplayed(this.shareFeedbackButton) == true){
            return true;
        }
    }
    async getDisableDatesForCurrentMonth() {
        const currentMonthHeading = MyMomentFunctions.getCurrentMomentInFormat('MMMM YYYY');
        const monthName = currentMonthHeading.split(' ')[0];
        const year = currentMonthHeading.split(' ')[1];
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const isCurrentMonthSeen = await this.commands.isElementDisplayed(monthHeadingLocator);
        if (!isCurrentMonthSeen) {
            await this.commands.clickWebElement(this.previousButtonOnCalendarLocator);
        }
        const disabledDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds_DisableDated;
        return await this.commands.findWebElements(disabledDatesLocator);
    }
    async verifyBackButtonIsDisabled(){
        return await this.commands.isElementEnabled(this.clickPreviousMonth)
    }
    async clickListYourProperty(){
        await this.commands.clickWebElement(this.listYourProperty)
        const allHandles = await browser.getWindowHandles();
        for(const handle of allHandles){
            await browser.switchToWindow(handle);
        }
    }
    async verifyWhatWouldYouLikeToList(){
        return await this.commands.isElementDisplayed(this.whatWouldYouLikeToList)
    }
    async verifyLodgingIsDisplayed(){
        return await this.commands.isElementDisplayed(this.lodging)
    }
    async verifyPrivateResidenceIsDisplayed(){
        return await this.commands.isElementDisplayed(this.privateResidence)
    }
    async clickOnPrivateResidence(){
        await this.commands.clickWebElement(this.privateResidence)
    }
    async verifyStep1Of3IsDisplayed(){
        return await this.commands.isElementDisplayed(this.step1Of3)
    }
    async verifySeeHowMuch(){
        return await this.commands.isElementDisplayed(this.seeHowMuchYouCouldEarn)
    }
    async clickIncreaseBedrooms(number){
        for(let i = 0; i < number; i++){
            await this.commands.clickWebElement(this.increaseBedrooms)
        }
    }
    async clickIncreaseBathrooms(number){
        for(let i = 0; i < number; i++){
            await this.commands.clickWebElement(this.increaseBathrooms)
        }
    }
    async clickNextButton(){
        await this.commands.clickWebElement(this.nextButton)
    }
    async verifyStep2Of3IsDisplayed(){
        return await this.commands.isElementDisplayed(this.step2Of3)
    }
    async verifyWhereIsYourPropertyIsDisplayed(){
        return await this.commands.isElementDisplayed(this.whereIsYourPropertyLocated)
    }
    async enterAddress(destination) {
        await this.commands.clickWebElement(this.enterAddressLocator);
        await this.commands.typeInWebElement(this.enterAddressLocator, destination)
        await browser.pause(2000);
    }
    async fromAutoSuggestion(selectThis) {
        await this.commands.selectAddressFromAutoSuggestion(this.addressAutoSuggestionLocator, selectThis);
        await browser.pause(2000)
    }
    async verifyMapIsDisplayed(){
        return await this.commands.isElementDisplayed(this.map)
    }
    async verifyPinIsDisplayed(){
        return await this.commands.isElementDisplayed(this.mapPin)
    }
    async clickFiveStar(){
        await this.commands.scroll(this.fiveStarButton)
        await this.commands.clickWebElement(this.fiveStarButton)
    }
    async clickPriceFromSortByDropdown(){
        await this.commands.clickWebElement(this.sortBy)
        await browser.pause(2000)
        //await $(this.sortBy).selectByVisibleText(this.price)
        await this.commands.clickWebElement(this.price)
        await browser.pause(2000)
    }
    async getSelectedFiveStarRating(){
        let fiveStarText = await this.commands.getElementText(this.fiveStarButton)
        let fiveStarNumber = parseInt(fiveStarText);
        console.log(typeof fiveStarNumber);
        console.log('THIS IS THE NUMBER: ' + fiveStarNumber);
        return fiveStarNumber;
    }
    async verifyHotelsAreRatedAsSelected(){
        let fiveStarRating = await this.commands.getElementText(this.fiveStarRating)
        let fiveStarNumber = parseInt(fiveStarRating);
        console.log(typeof fiveStarNumber)
        console.log('THIS IS THE NUMBER: ' + fiveStarNumber);
        return fiveStarNumber;
    }
    async getStarRating(){
        let starsArray = [];
        let starsObjects = await $$(this.fiveStarRating)
        for(const star of starsObjects){
            console.log("THIS IS AN ELEMENT: ")
            let starText = await star.getText()
            let justStarNumber = starText.substring(0,1)
            starsArray.push(justStarNumber)
        }
        console.log("THIS IS THE ARRAY" + starsArray)
    }
    async verifyPricesAreInIncreasingOrder(){
        let pricesArray = [];
        let prices = await $$(this.prices)
        for (const price of prices){
            let priceSentence = await price.getText()
            let justPriceNumber = priceSentence.replace(/\D/g,'');
            pricesArray.push(justPriceNumber)
        }
        //console.log("THIS IS THE ARRAY: " + pricesArray);
        let j;
        for(let i = 0; i < pricesArray.length; i++){
            j = i+1
            if(typeof pricesArray[j] === 'undefined'){
                return true;
            }
            else if(pricesArray[j] - pricesArray[i] >= 0){
                //console.log("THIS IS J: " +pricesArray[j] + ' THIS IS I: ' + pricesArray[i])
                //console.log("price in increasing order")
            }
            else {
                //console.log("THIS IS J: " +pricesArray[j] + ' THIS IS I: ' + pricesArray[i])
                //console.log("price not in increasing order")
                return false;
            }

        }
        return true;
    }
    async clickLanguageButton(){
        await this.commands.clickWebElement(this.languageButton);
    }
    async selectSpanish(){
        await $(this.languageDropdown).selectByAttribute('value','es_US')
    }
    async clickSave(){
        await this.commands.clickWebElement(this.saveButton)
    }
    async verifySpanish(){
        return await this.commands.isElementDisplayed(this.spanishLanguageButton)
    }
    async clickSpanishLanguageButton(){
        await this.commands.clickWebElement(this.spanishLanguageButton);
    }
    async selectEnglish(){
        await $(this.languageDropdown).selectByAttribute('value','en_US')
    }
    async clickGuardar(){
        await this.commands.clickWebElement(this.guardarButton)
    }
    async verifyEnglish(){
        return await this.commands.isElementDisplayed(this.languageButton)
    }
    async scrollToGetTheApp(){
        await this.commands.scroll(this.getTheAppButton)
    }
    async enterPhoneNumber(phoneNumber){
        await this.commands.clickWebElement(this.inputPhoneNumber)
        await this.commands.typeInWebElement(this.inputPhoneNumber, phoneNumber)
    }
    async clickGetTheApp(){
        await this.commands.clickWebElement(this.getTheAppButton);
        await browser.pause(4000)
    }
    async verifyErrorMessage(){
        return await this.commands.isElementDisplayed(this.pleaseEnterValidPhoneNumber)
    }

}
module.exports = Sprint2Page