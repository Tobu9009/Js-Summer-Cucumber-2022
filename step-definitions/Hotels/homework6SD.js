/**
 * Complete the automation using POM design
 * 
 * Due: Aug-24 (Wed)
 * 
 */

/**
 * Tc-1:
 * 
 * hotels.com
 * Verify past dates of the current month is not enabled
 */

/**
 * Tc-2:
 * 
 * Verify destination and check-in and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select tomorrow's date as check-in date (Aug-23)
 * 5. Select 5 days from check-in as check-out (Aug-28)
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date is tomorrows date
 * 8. Verify check-out date in 5-days from check-in date
 * 
 */
//Gherkin relies on StepDef relies on Homepage Functions relies on Commands
const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const homework6Functions = require("../../Pages/Hotels/homework6Functions");
const commands = require("../../Pages/CommandsHw")
const commandsHw = new commands();
const Hw6 = new homework6Functions();

// When(/^I am on hotels landing page$/, async function () {
//     await browser.url("https://www.hotels.com/");
// });

// When(/^I click on date form$/, async function () {
//     await Hw6.clickDateForm();
//     await browser.pause(2000);
// });
// When(/^I verify that past dates of current month is not enabled$/, async function () {
//     expect(await Hw6.checkYesterdayIsEnabled(), "it is enabled").to.be.false;
// });

// When(/^I click going to$/, async function(){
//     await Hw6.clickGoingTo();
//     await browser.pause(2000)
// })

// When(/^I enter "(.+)" in going to$/, async function(value){
//     await Hw6.typeInSearchBar(value)
//     await browser.pause(2000)
// })

// When(/^I select "(.+)" from auto-suggestion$/, async function (autoSuggestionDestination) {
//     await Hw6.selectDestinationFromAutoSuggestion(autoSuggestionDestination);
//     await browser.pause(2000)
// })

// When(/^I click tomorrows date$/, async function(){
//     await Hw6.clickTomorrowsDate();
//     await browser.pause(2000)
// })

// When(/^I click date 5 days from tomorrow$/, async function(){
//     await Hw6.clickDate5Days();
//     await browser.pause(2000)
// })

// When(/^I click done button$/, async function(){
//     await Hw6.clickDoneButton();
//     await browser.pause(2000)
// })

// When(/^I click submit button$/, async function(){
//     await Hw6.clickSubmitButton();
//     await browser.pause(2000)
// })

// When(/^I verify going to location contains "(.+)"$/, async function (expDestination) {
//     expect(await Hw6.isDestinationContainsUserDestination(expDestination), 'User destination is not displayed').to.be.true;
//     await browser.pause(2000)
// })

// When(/^I verify check-in date is tomorrows date$/, async function(){
//     expect(await Hw6.getCheckInDate(), 'verification error').to.equal(await Hw6.getTomorrowDate())
// })

// When(/^I verify check-out date is 5 days from tomorrow$/, async function(){
//     expect(await Hw6.getCheckOutDate(), 'verification error').to.equal(await Hw6.getFiveDaysFromTomorrowDate())
// })

