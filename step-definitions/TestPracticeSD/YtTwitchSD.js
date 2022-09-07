//Given I am on youtube
//And I type dougdoug
//And I click on dougdoug peggle in the auto suggestion
//And I click on the first video
//And I click on his twitch link
//And I close out the YouTube
//Then I verify that the 30% discount ends in 24 days
const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const ytTwitchObj = require("../../Pages/TestPracticePages/YtTwitch");
const ytTwitch = new ytTwitchObj();

// When(/^I am on youtube$/, async function(){
//     await browser.url("https://www.youtube.com")
// });
// When(/^I type "(.+)" in youtube search bar$/, async function(value){
//     await ytTwitch.typeInSearchBar(value)
// })
// When(/^I click on youtube search bar$/, async function(){
//     await ytTwitch.clickOnSearchBar();
// })
// When(/^I click on doug doug peggle$/, async function(){
//     await ytTwitch.clickOnPeggle();
// })
// When(/^I click on youtube search button$/, async function(){
//     await ytTwitch.clickOnSearchButton();
//     await browser.pause(2000)
// })
// When(/^I click on first suggested video$/, async function(){
//     await ytTwitch.clickOnFirstSuggestedVideo();
//     await browser.pause(2000)
// })
// When(/^I expand the description$/, async function(){
//     await ytTwitch.expandDescription();
//     await browser.pause(2000)
// })
// When(/^I click the twitch link$/, async function(){
//     await ytTwitch.clickTwitchLink();
//     await browser.pause(2000)
// })
// When(/^I close all windows but twitch$/, async function(){
//     await ytTwitch.closeAllWindowsButTwitch();
//     await browser.pause(2000)
// })