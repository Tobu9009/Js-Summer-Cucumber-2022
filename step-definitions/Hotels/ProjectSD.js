const { default: BrowserstackLauncherService } = require("@wdio/browserstack-service/build/launcher");
const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const projectObj = require("../../Pages/Hotels/ProjectPage");
const command = new projectObj();

When(/^I am on (amazon|hotels|darksky) landing page$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'amazon':
            await browser.url('https://www.amazon.com');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com/');
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net/');
            break;    
        default:
            await browser.url('/');
            break;
    }
    await browser.setWindowSize(1900,1080)
});
When(/^I click on traveler form$/, async function(){
    await command.clickTravelersForm();
});

When(/^I click on adult plus button (.+) times$/, async function(number){
    await command.clickAdultPlusButton(number);
})

When(/^I click on children plus button (.+) times$/, async function(number){
    await command.clickChildrenPlusButton(number);
})

When(/^I select child1's age$/, async function(){
    await command.selectChild1Age();
})

When(/^I select child2's age$/, async function(){
    await command.selectChild2Age();
})

When(/^I select child3's age$/, async function(){
    await command.selectChild3Age();
})

When(/^I click done button$/, async function(){
    await command.clickDone();
})

Then(/^I verify total number of guests of adults and children is the same in travelers$/, async function(){
    expect(await command.getTravelers(), "travelers does not match").to.be.equal(await command.getTotalTravelers())
})

When(/^I click on blue sign in link on the top right$/, async function(){
    await command.clickSignIn();
    await command.clickSignInAgain();
})

When(/^I enter "(.+)" in email form$/, async function(value){
    await command.typeInEmail(value);
})

When(/^I enter "(.+)" in password form$/, async function(value){
    await command.typeInPassword(value);
})

When(/^I click on sign in button$/, async function(){
    await command.clickOnSignInButton();
})

Then(/^I verify verification message is displayed$/, async function(){
    expect(await command.verifyErrorMessage(), 'error message not displayed').to.be.true;
})

When(/^I enter "(.+)" in sign up email form$/, async function(value){
    await command.typeInSignUpFormEmail(value);
})

When(/^I verify invalid email error message is displayed$/, async function(){
    expect(await command.verifyEmailErrorMessage(), 'error message not displayed').to.be.true;
})

When(/^I click on sign up button$/, async function(){
    await command.clickSignIn();
    await command.clickOnSignUpButton();
})

When(/^I enter "(.+)" in first name sign up form$/, async function(value){
    await command.typeInFirstNameSignUpForm(value);
})

Then(/^I verify invalid first name error message is displayed$/, async function(){
    expect(await command.verifyFirstNameErrorMessage(), 'error message not displayed').to.be.true;
})

When(/^I enter "(.+)" in last name sign up form$/, async function(value){
    await command.typeInLastNameSignUpForm(value);;
})

Then(/^I verify invalid last name error message is displayed$/, async function(){
    expect(await command.verifyLastNameErrorMessage(), 'error message not displayed').to.be.true;
})

When(/^I enter "(.+)" in password sign up form$/, async function(value){
    await command.typeInPassword(value);
})

Then(/^I verify checkbox is displayed and enabled$/, async function(){
    expect(await command.verifyKeepMeSignedInIsDisplayed(), 'not displayed').to.be.true;
    expect(await command.verifyCheckboxIsEnabled(), 'not enabled').to.be.true;
})

Then(/^I verify continue button is displayed$/, async function(){
    expect(await command.verifyContinueButtonIsDisplayed(), 'continue button not displayed').to.be.true;
})

When(/^I verify continue button is not enabled$/, async function(){
    expect(await command.verifyContinueButtonIsDisabled(), 'continue button is enabled').to.be.false;
})

When(/^I click on terms and conditions link$/, async function(){
    await command.clickOnTermsAndConditions();
})

When(/^I verify terms and conditions opens in a new tab$/, async function(){
    expect(await command.verifyTermsAndConditionsOpens(), 'terms and conditions does not open').to.be.true;
})

When(/^I click on privacy statement link$/, async function(){
    await command.clickOnPrivacyStatement();
})

When(/^I verify privacy statement opens in a new tab$/, async function(){
    expect(await command.verifyPrivacyStatementOpens(), 'privacy statement does not open').to.be.true;
})

When(/^I click on sign in button on the top right$/, async function(){
    await command.clickSignIn();
})

When(/^I click on feedback link$/, async function(){
    await command.clickOnFeedBack();
})

When(/^I submit feedback$/, async function(){
    await command.clickOnFeedBackSubmitButton();
})

Then(/^I verify empty feedback error is displayed$/, async function(){
    expect(await command.verifyEmptyFeedbackErrorIsDisplayed(), 'verify empty feedback error is displayed').to.be.true;
})

Then(/^I verify star box is inside red dotted box$/, async function(){
    expect(await command.verifyStarCheckBoxesAreInsideRedBox(), 'star box not inside red box').to.be.true;
})

When(/^I click on 5 stars$/, async function(){
    await command.clickOn5StarBox();
})

When(/^I enter "(.+)" in the page comments$/, async function(value){
    await command.enterComment(value)
})

When(/^I click on highly likely in how likely are you to return to hotels.com$/, async function(){
    await command.howLikelyToReturn();
})

When(/^I click how likely yes in did you accomplish what you wanted to do on this page$/, async function(){
    await command.didYouAccomplish();
})

Then(/^I verify "thank you for your feedback" message is displayed$/, async function(){
    await command.verifyThankYouForFeedbackMessage();
})

Then(/^I verify children age dropdown are "(.+)"$/, async function(value){
    expect(await command.verifyChildrenAgeDropdown(value), 'children age dropdown does not match').to.be.true;
})

Then(/^I verify plus button is (enabled|disabled)$/, async function(enabledOrDisabled){
    switch(enabledOrDisabled){
        case 'enabled':
            expect(await command.verifyPlusButtonIsEnabled(), 'plus button disabled').to.be.true
            break;
        case 'disabled':
            let result = await command.verifyPlusButtonIsEnabled()
            if(result == true){
                result = false;
            }
            expect(await result, 'plus button is disabled').to.be.false
            break;
    }
})

Then(/^I verify minus button is (enabled|disabled)$/, async function(enabledOrDisabled){
    switch(enabledOrDisabled){
        case 'enabled':
            expect(await command.verifyMinusButtonIsEnabled(), 'minus button disabled').to.be.true
            break;
        case 'disabled':
            let result = await command.verifyMinusButtonIsEnabled()
            if(result == true){
                result = false;
            }
            expect(await result, 'plus button is disabled').to.be.false
            break;
    }
})

When(/^I click on children minus button (.+) times$/, async function(number){ 
    await command.clickChildrenMinusButton(number);
})

Then(/^I verify children age dropdown is not displayed$/, async function(){
    expect(await command.verifyChildrenAgeDropdownIsNotDisplayed(), 'is displayed').to.be.false
})
