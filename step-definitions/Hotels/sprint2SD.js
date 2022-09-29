const { default: BrowserstackLauncherService } = require("@wdio/browserstack-service/build/launcher");
const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const CommandsHw = require("../../Pages/CommandsHw");
const projectObj = require("../../Pages/Hotels/Sprint2Page");
const MyMomentFunctions = require('../../Utils/MyMomentsFunction')
const command = new projectObj();

When(/^I enter "(.+)" in going to$/, async function(destination){
    await command.enterDestination(destination)
})

When(/^I select "(.+)" from auto-suggestion$/, async function (autoSuggestionDestination) {
    await command.selectDestinationFromAutoSuggestion(autoSuggestionDestination);
})

When(/^I click on date form$/, async function () {
    await command.clickDateFormField();
});

When(/^I go to "(.+) (.+)" page$/, async function(month, year){
    await command.goToMonth(month, year);
})

When(/^I go to previous page$/, async function(){
    await command.goToPrevMonth();
})

When(/^I enter "(.+) (.+), (.+)" as check-in date$/, async function(month, day, year){
    await command.clickFirstDay(month, day, year)
})

When(/^I enter "(.+) (.+), (.+)" as check-out date$/, async function(month, day, year){
    await command.clickLastDay(month, day, year)
})

When(/^I click calendar done button$/, async function(){
    await command.clickDoneButton();
})

When(/^I click submit button$/, async function(){
    await command.clickSubmitButton();
})

Then(/^I verify tell us how can we improve our site is displayed$/, async function(){
    expect(await command.verifyTellUsDisplayed(), 'message not displayed').to.be.true
})

Then(/^I verify share feedback button is displayed and enabled$/, async function(){
    expect(await command.verifyShareFeedbackDisplayedAndEnabled(),'button not displayed and/or enabled').to.be.true
})

Then(/^I verify past dates on current month are disabled$/, async function () {
    const disabledDates = await command.getDisableDatesForCurrentMonth();
    console.log(`\nDisabled Dates length -> ${disabledDates.length}\n`);
    const currentDate = MyMomentFunctions.getCurrentMomentInFormat('D');
    //expect(disabledDates.length, 'Number of disabled dates are not as expected').to.equal(currentDate-1).or.equal(currentDate-2);
    expect((currentDate-1), 'Number of disabled dates are not as expected').to.equal(disabledDates.length)
})

Then(/^I verify back button on current month is disabled$/, async function(){
    expect(await command.verifyBackButtonIsDisabled(), 'back button is enabled').to.be.false
})

When(/^I click on list your property$/, async function(){
    await command.clickListYourProperty();
})

Then(/^I verify what would you like to do list is displayed$/, async function(){
    expect(await command.verifyWhatWouldYouLikeToList(), 'message not displayed').to.be.true
})

Then(/^I verify lodging and private residence is displayed$/, async function(){
    expect(await command.verifyLodgingIsDisplayed(), 'button not displayed').to.be.true;
    expect(await command.verifyPrivateResidenceIsDisplayed(), 'button not displayed').to.be.true;
})

When(/^I click on private residence$/, async function(){
    await command.clickOnPrivateResidence();
})

Then(/^I verify step 1 of 3 is displayed$/, async function(){
    expect(await command.verifyStep1Of3IsDisplayed(), "step 1 of 3 is not displayed").to.be.true;
})

Then(/^I verify see how much you could earn is displayed$/, async function(){
    expect(await command.verifySeeHowMuch(), 'verify see how much is not displayed').to.be.true;
})

When(/^I click on increase bedrooms button (.+) times$/, async function(number){
    await command.clickIncreaseBedrooms(number);
})

When(/^I click on increase bathrooms button (.+) times$/, async function(number){
    await command.clickIncreaseBathrooms(number);
})

When(/^I click next button$/, async function(){
    await command.clickNextButton();
})

Then(/^I verify step 2 of 3 is displayed$/, async function(){
    expect(await command.verifyStep2Of3IsDisplayed(), 'step 2 of 3 is not displayed').to.be.true;
})

Then(/^I verify where is your property located is displayed$/, async function(){
    expect(await command.verifyWhereIsYourPropertyIsDisplayed(), 'where is your property not displayed').to.be.true;
})

When(/^I enter "(.+)" as address$/, async function(address){
    await command.enterAddress(address)
})

When(/^I select "(.+)" from address auto-suggestion$/, async function (autoSuggestionAddress) {
    await command.fromAutoSuggestion(autoSuggestionAddress);
})

Then(/^I verify map is displayed$/, async function(){
    expect(await command.verifyMapIsDisplayed(), 'map is not displayed').to.be.true
})

Then(/^I verify pin is displayed$/, async function(){
    expect(await command.verifyPinIsDisplayed(), 'pin is not displayed').to.be.true
})

When(/^I click on 5 star rating filter$/, async function(){
    await command.clickFiveStar();
})

When(/^I select sort by price$/, async function(){
    await command.clickPriceFromSortByDropdown();
})

Then(/^I verify hotels are rated as selected$/, async function(){
    //await command.getSelectedFiveStarRating();
    //await command.verifyHotelsAreRatedAsSelected();
    //await command.getStarRating();
    expect(await command.getSelectedFiveStarRating(), '5 star unmatched').to.be.equal(await command.verifyHotelsAreRatedAsSelected())
})

Then(/^I verify prices are in increasing order$/, async function(){
    expect(await command.verifyPricesAreInIncreasingOrder(), 'not in increasing order').to.be.true;
})

When(/^I click language button$/, async function(){
    await command.clickLanguageButton();
})

When(/^I select spanish$/, async function(){
    await command.selectSpanish();
})

When(/^I click save button$/, async function(){
    await command.clickSave();
})

Then(/^I verify espanol is displayed$/, async function(){
    expect(await command.verifySpanish(), 'it is not spanish language').to.be.true;
})

When(/^I click spanish language button$/, async function(){
    await command.clickSpanishLanguageButton();
})

When(/^I select english$/, async function(){
    await command.selectEnglish();
})

When(/^I click guardar button$/, async function(){
    await command.clickGuardar();
})

Then(/^I verify english is displayed$/, async function(){
    expect(await command.verifyEnglish(), 'it is not english language').to.be.true
})

When(/^I scroll to get the app$/, async function(){
    await command.scrollToGetTheApp();
})

When(/^I enter "(.+)" in going to$/, async function(destination){
    await command.enterDestination(destination)
    await browser.pause(2000)
})

When(/^I input "(.+)" as phone number$/, async function(phoneNumber){
    await command.enterPhoneNumber(phoneNumber);
})

When(/^I click get the app$/, async function(){
    await command.clickGetTheApp();
})

Then(/^I verify error message is displayed$/, async function(){
    expect(await command.verifyErrorMessage(), 'error message not displayed').to.be.true;
})










