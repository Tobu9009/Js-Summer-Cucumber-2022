const Commands = require('../CommandsHw');

class TestPage3{
    commands = new Commands
    todayTimeline = '//span[contains(text(),"Today")]'
    plusButton = '//a[@data-day="0"]'
    todayMinTemp = '//a[@data-day="0"]//span[@class="minTemp"]'
    todayMaxTemp = '//a[@data-day="0"]//span[@class="maxTemp"]'
    todayLowTempSwap = '//div[@class="dayDetails revealed"]//span[@class="highTemp swip"]//span[@class="temp"]'
    todayHighTempSwap = '//div[@class="dayDetails revealed"]//span[@class="lowTemp swap"]//span[@class="temp"]'
    async scrollToTodayTimeline(){
        await this.commands.scroll(this.todayTimeline)
    }
    async clickOnPlusButton(){
        await this.commands.clickWebElement(this.plusButton)
    }
    async getTodayMinTemp(){
        //66
        return await this.commands.getElementText(this.todayMinTemp);
    }
    async getTodayLowTempSwap(){
        //66
        return await this.commands.getElementText(this.todayLowTempSwap);
    }
    async getTodayMaxTemp(){
        //73
        return await this.commands.getElementText(this.todayMaxTemp)
    }
    async getTodayHighTempSwap(){
        //73
        return await this.commands.getElementText(this.todayHighTempSwap)
    }

}
module.exports = TestPage3
//