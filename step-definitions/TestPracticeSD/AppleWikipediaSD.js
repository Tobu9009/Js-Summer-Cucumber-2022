const {When} = require("@wdio/cucumber-framework");
const {expect} = require("chai")
const appleWikipedia = require("../../Pages/TestPracticePages/AppleWikipediaPages")
const appleWikipediaObj = new appleWikipedia();

When(/^I am on google landing page$/, async function(){
    await browser.url("https://www.google.com")
})
When(/^I click on google search bar$/, async function(){
    await appleWikipediaObj.clickSearchBar();
})
When(/^I type "(.+)" in google search bar$/, async function(value){
    await appleWikipediaObj.typeInSearchBar(value);
} )
When(/^I scroll apple wikipedia into view$/, async function(){
    await appleWikipediaObj.scrollWikipediaIntoView();
    await browser.pause(2000)
})
When(/^I click apple wikipedia suggestion$/, async function(){
    await appleWikipediaObj.clickAppleWikipediaSuggestion();
    await browser.pause(2000);
})
When(/^I click create account$/, async function(){
    await appleWikipediaObj.clickCreateAccount();
    await browser.pause(2000);
})
When(/^I type "(.+)" in (username|password|confirmPassword|email)$/, async function(value, fieldName) {
    switch(fieldName) {
        case 'username':
            await appleWikipediaObj.typeInUsername(value);
            break;
        case 'password':
            await appleWikipediaObj.typeInPassword(value);
            break;   
        case 'confirmPassword':
            await appleWikipediaObj.typeInConfirmPassword(value);
            break;          
        case 'email':
            await appleWikipediaObj.typeInEmail(value);
            break;    
    }
});
When(/^I verify I am still on create account$/, async function(){
    expect(await appleWikipediaObj.verifyOnPage(), 'not on create account').to.contains('Create account')
})