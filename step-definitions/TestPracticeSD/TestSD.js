const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const testObj = require("../../Pages/TestPracticePages/TestPage");
const test = new testObj();

When(/^I am on (amazon|hotels|darksky) landing page$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
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