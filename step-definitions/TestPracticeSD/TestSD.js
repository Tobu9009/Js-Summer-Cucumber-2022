const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const testObj = require("../../Pages/TestPracticePages/TestPage");
const test = new testObj();

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
});
When(/^I click on hotels rewards$/, async function(){
    await test.clickHotelsRewardsLink();
    await browser.pause(2000)
})
When(/^I verify hotels rewards opens in a new window$/, async function(){
    expect(await test.verifyHotelsRewardsNewWindow(), 'New window did not open').to.be.true;
    await browser.pause(2000);
})
When(/^I click on join now button$/, async function(){
    await test.clickJoinNowButton();
    browser.pause(2000)
})
When(/^I verify form is blank$/, async function(){
    expect(await test.verifyFormIsBlank(), "form is not blank").to.be.true;
    browser.pause(2000)
})
When(/^I verify continue button is not enabled$/, async function(){
    expect(await test.verifyContinueButtonIsNotEnabled(), "verify button is enabled").to.be.false
})
//