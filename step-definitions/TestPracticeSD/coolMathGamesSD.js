const {When} = require("@wdio/cucumber-framework");
const {expect} = require("chai")
const coolMathGames = require("../../Pages/TestPracticePages/CoolMathGames")
const coolMathObj = new coolMathGames();

When(/^I am on cool math games$/, async function(){
    await browser.url("https://www.coolmathgames.com/")
    await browser.setWindowSize(1000,1200)
    await browser.pause(2000);
})

When(/^I click on search button$/, async function(){
    await coolMathObj.clickSearchBar();
})

When(/^I type "(.+)" in coolmathgames search bar$/, async function(value){
    await coolMathObj.typeInSearchBar(value)
    await browser.pause(2000);
})

When(/^I verify 26 options are available$/, async function(){
    expect(await coolMathObj.verify26(), '26 options are not verified').to.be.true;
    //await coolMathObj.verify26()
    await browser.pause(2000);
})

When(/^I click flip palace$/, async function(){
    expect(await coolMathObj.clickFlipPalace())
    await browser.pause(2000);
})


