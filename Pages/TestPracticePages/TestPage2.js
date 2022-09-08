const Commands = require('../CommandsHw');
const moment = require('moment');
const now = moment();
let timelineArray = [];

class TestPage2{
    timelineSelector = '//div[@class="hours"]//span[contains(text(), "am") or contains(text(), "pm") or contains(text(), "Now")]'
    commands = new Commands
    async verify12Points(){
        let count = 0;
        let timeline =  await $$(this.timelineSelector)
        for (const time of timeline){
            timelineArray[count] = await time.getText()
            count++;
        }
        let timelineLength = timelineArray.length
        let thisHour = now.format('h');
        const nextTwoHoursInHour = parseInt(timelineArray[1])
        //console.log(thisHour);
        //console.log(nextTwoHours);
        //console.log(nextTwoHoursInHour);            
        //console.log(`\nThis is timeline length:${timelineLength}\n`);
        
                                                        //THIS IS ACCOUNTING FOR 11pm-2am
        if(nextTwoHoursInHour-thisHour === 2 || Math.abs(nextTwoHoursInHour-thisHour) === 10 && timelineLength === 12){
            console.log('success')
            return true;
        }
    }
    
    
}
module.exports = TestPage2