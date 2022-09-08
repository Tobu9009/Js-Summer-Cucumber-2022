const { When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const testObj2 = require("../../Pages/TestPracticePages/TestPage2");
const test = new testObj2();

When(/^I verify timeline has 12-data points with 2 hour gap from current hour$/, async function(){
    expect(await test.verify12Points(), "error").to.be.true;
})
