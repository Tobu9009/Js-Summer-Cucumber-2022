const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const testObj3 = require("../../Pages/TestPracticePages/TestPage3");
const test = new testObj3();

When(/^I scroll to today timeline$/, async function(){
    await test.scrollToTodayTimeline()
    await browser.pause(2000)
})
When(/^I click on plus button$/, async function(){
    await test.clickOnPlusButton()
    await browser.pause(2000)
})
When(/^I verify minTemp and todayMinTemp are the same$/, async function(){
    expect(await test.getTodayMinTemp(), "not same").to.be.equal(await test.getTodayLowTempSwap())
})
When(/^I verify maxTemp and todayMaxTemp are the same$/, async function(){
    expect(await test.getTodayMaxTemp(), "not same").to.be.equal(await test.getTodayHighTempSwap())
})
//
//