const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Facebook/Homepage");
const Loginpage = require("../../Pages/Facebook/Loginpage");
const homepage = new Homepage();
const loginpage = new Loginpage();

// Glue code
/**
 * Glue code is a regular expression which helps to map Scenario-steps with functions
 */
// Given(/^I am on (facebook|hotels|darksky) landing page$/, async function(urlName) {
//     switch (urlName.toLowerCase()) {
//         case 'facebook':
//             await browser.url('/');
//             break;
//         case 'hotels':
//             await browser.url('https://www.hotels.com/');
//             break;
//         case 'darksky':
//             await browser.url('https://www.darksky.net/');
//             break;    
//         default:
//             await browser.url('/');
//             break;
//     }
// });

Then(/^I verify login username field is enabled$/, async function() {
    expect(await homepage.isLoginEmailFieldEnabled(), 'Login email field is NOT enabled').to.be.true;
});

Then(/^I verify login password field is enabled$/, async function() {
    expect(await homepage.isLoginPwdFieldEnabled(), 'Login password field is NOT enabled').to.be.true;
});

Then(/^I verify login button field is enabled$/, async function() {
    expect(await homepage.isLoginBtnEnabled(), 'Login button is NOT enabled').to.be.true;
});

// When(/^I enter "(.+)" as username$/, async function(username) {
//     await homepage.enterLoginEmail(username);
// });

// When(/^I enter "(.+)" as password$/, async function(password) {
//     await homepage.enterLoginPassword(password);
// });

When(/^I enter "(.+)" as (username|password)$/, async function(value, fieldName) {
    switch(fieldName) {
        case 'username':
            await homepage.enterLoginEmail(value);
            break;
        case 'password':
            await homepage.enterLoginPassword(value);
            break;            
    }
});


When(/^I click login button$/, async function() {
    await homepage.clickLoginButton();
});

Then(/^I verify error is displayed$/, async function() {
    expect(await loginpage.isLoginErrDisplayed(), 'Login error is NOT displayed').to.be.true;
});