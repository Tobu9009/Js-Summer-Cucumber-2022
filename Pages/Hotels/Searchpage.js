const Commands = require('../Commands');

class Searchpage {
    destinationLocator = '//button[@data-stid="hotels-destination-menu-trigger"]';
    searchByPropertyNameCopyLocator = '//h3//legend[text()="Search by property name"]';
    commands = new Commands();

    async isDestinationContainsUserDestination(userDestination) {
        const destinationOnSearch = await this.commands.getTextFromWebElement(this.destinationLocator);
        return destinationOnSearch.toLowerCase().includes(userDestination.toLowerCase());
    }

    async waitForSearchByPropertyName() {
        await this.commands.isWebElementDisplayedWithWait(this.searchByPropertyNameCopyLocator);
    }



}
module.exports = Searchpage