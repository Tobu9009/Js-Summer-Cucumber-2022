const CommandsHw = require('../CommandsHw');

class ProjectPage{
    //tc1
    travelerFormField = '//button[text()="2 travelers, 1 room"]'
    adultPlusButton = '//span//*[@aria-label="Increase the number of adults in room 1"]'
    childrenPlusButton = '//span//*[@aria-label="Increase the number of children in room 1"]'
    child1AgeBox = '//select[@id="age-traveler_selector_children_age_selector-0-0"]'
    child1Age = '4'
    child2AgeBox = '//select[@id="age-traveler_selector_children_age_selector-0-1"]'
    child2Age = 'Under 1'
    child3AgeBox = '//select[@id="age-traveler_selector_children_age_selector-0-2"]'
    child3Age = '7'
    doneButton = '#traveler_selector_done_button'
    travelers = '//button[contains(text(), "travelers")]'
    numberOfAdultTravelers = '//input[@id="traveler_selector_adult_step_input-0"]'
    numberOfChildrenTravelers = '//input[@id="traveler_selector_children_step_input-0"]'
    //tc2
    smallSignInButton = '//button[text()="Sign in"]'
    signInButtonAgain = '//div[@class="actions"]//a[text()="Sign in"]'
    emailAddressInput = '//input[@type="email"]'
    passwordInput = '//input[@type="password"]'
    signInButton = '//button[@id="loginFormSubmitButton"]'
    errorMessage = '//h3'
    //tc3
    signUpButton = '//div[@class="heading-container"]//a[contains(text(),"Sign up")]'
    invalidEmailErrorMessage = '//div[contains(text(),"valid email")]'
    invalidFirstNameErrorMessage = '//div[contains(text(),"First name cannot")]'
    invalidLastNameErrorMessage = '//div[contains(text(),"Last name cannot")]'
    clickBlank = '//main'
    firstNameInput = '//input[@id="signupFormFirstNameInput"]'
    lastNameInput = '//input[@id="signupFormLastNameInput"]'
    checkbox = '//input[@type="checkbox"]'
    keepMeSignedIn = '//label[contains(text(),"Keep me")]'
    continueButton = '//button[@id="signupFormSubmitButton"]'
    //tc4
    termsAndConditionsLink = '//a[text()="Terms and Conditions"]'
    privacyStatementLink = '//a[text()="Privacy Statement"]'
    //tc5
    feedbackLink = '//a[text()="Feedback"]'
    feedbackSubmitButton = '//button[@id]'
    emptyFeedbackErrorMessage = '//p[contains(text(),"Please fill")]'
    redBox = '//fieldset[@class="question-group"]'
    starBox1 = 'input[@id="page-rating-1"]'
    //tc6
    starBox5 = '//label[@for="page-rating-5"]'
    commentArea = '//textarea[@name="verbatim"]'
    howLikelyToReturnDropdown = '//select[@id="will-you-return"]'
    HighlyLikely = 'Highly likely'
    didYouAccomplishYes = '//label[@for="were-you-successful-yes"]'
    thankYouForFeedbackMessage = '//h5[contains(text(),"THANK YOU")]'
    //tc7
    childAgeBoxes = '//div[@class="uitk-menu uitk-menu-mounted"]//select'
    childrenMinusButton = '//span//*[@aria-label="Decrease the number of children in room 1"]'

    commands = new CommandsHw;
    async clickTravelersForm(){
        await this.commands.clickWebElement(this.travelerFormField)
    }
    async clickAdultPlusButton(){
        await this.commands.clickWebElement(this.adultPlusButton)
    }
    async clickChildrenPlusButton(){
        await this.commands.clickWebElement(this.childrenPlusButton)
    }
    async selectChild1Age(){
        await this.commands.clickWebElement(this.child1AgeBox)
        //await this.commands.findWebElement(this.child1AgeBox).selectByVisibleText(this.child1Age)
        await $(this.child1AgeBox).selectByVisibleText(this.child1Age)
    }
    async selectChild2Age(){
        await this.commands.clickWebElement(this.child2AgeBox)
        await $(this.child2AgeBox).selectByVisibleText(this.child2Age)
    }
    async selectChild3Age(){
        await this.commands.clickWebElement(this.child3AgeBox)
        await $(this.child3AgeBox).selectByVisibleText(this.child3Age)
    }
    async clickDone(){
        await this.commands.clickWebElement(this.doneButton)
    }
    async getTravelers(){
        let travelersAndRoom = await this.commands.getElementText(this.travelers)
        const travelersArray = travelersAndRoom.split(/[:' ']/)
        //console.log("NUMBER OF TRAVELERS: " + travelersArray[1])
        let getNumber = parseInt(travelersArray[1]);
        return getNumber;
    }
    async getTotalTravelers(){
        let adultTravelers = await this.commands.getElementAttribute(this.numberOfAdultTravelers, "value");
        let adultTravelersNumber = parseInt(adultTravelers)
        let childrenTravelers = await this.commands.getElementAttribute(this.numberOfChildrenTravelers, "value");
        let childrenTravelersNumber = parseInt(childrenTravelers)
        let sumOfTravelers = adultTravelersNumber + childrenTravelersNumber;
        return sumOfTravelers;
    }
    async clickSignIn(){
        await browser.setWindowSize(1500,1200)
        await this.commands.clickWebElement(this.smallSignInButton)
    }
    async clickSignInAgain(){
        await this.commands.clickWebElement(this.signInButtonAgain)
    }
    async typeInEmail(value){
        await this.commands.typeInWebElement(this.emailAddressInput, value)
    }
    async typeInPassword(value){
        await this.commands.typeInWebElement(this.passwordInput, value)
    }
    async clickOnSignInButton(){
        await this.commands.clickWebElement(this.signInButton)
    }
    async verifyErrorMessage(){
        return await this.commands.isElementDisplayed(this.errorMessage)
    }
    async clickOnSignUpButton(){
        await this.commands.clickWebElement(this.signUpButton);
    }
    async typeInSignUpFormEmail(value){
        await this.commands.typeInWebElement(this.emailAddressInput, value)
    }
    async verifyEmailErrorMessage(){
        await this.commands.clickWebElement(this.clickBlank)
        return await this.commands.isElementDisplayed(this.invalidEmailErrorMessage);
    }
    async typeInFirstNameSignUpForm(value){
        await this.commands.typeInWebElement(this.firstNameInput, value)
    }
    async verifyFirstNameErrorMessage(){
        await this.commands.clickWebElement(this.clickBlank)
        return await this.commands.isElementDisplayed(this.invalidFirstNameErrorMessage)
    }
    async typeInLastNameSignUpForm(value){
        await this.commands.typeInWebElement(this.lastNameInput, value)
    }
    async verifyLastNameErrorMessage(){
        await this.commands.clickWebElement(this.clickBlank)
        return await this.commands.isElementDisplayed(this.invalidLastNameErrorMessage)
    }
    async verifyKeepMeSignedInIsDisplayed(){
        return await this.commands.isElementDisplayed(this.keepMeSignedIn)
    }
    async verifyCheckboxIsEnabled(){
        return await this.commands.isElementEnabled(this.checkbox)
    }
    async verifyContinueButtonIsDisplayed(){
        return await this.commands.isElementDisplayed(this.continueButton)
    }
    async verifyContinueButtonIsDisabled(){
        return await this.commands.isElementEnabled(this.continueButton)
    }
    async clickOnTermsAndConditions(){
        await this.commands.clickWebElement(this.termsAndConditionsLink)
    }
    async verifyTermsAndConditionsOpens(){
        const allHandles = await browser.getWindowHandles()
        if(allHandles.length > 1){
            return true;
        }
        else{
            return false;
        }
    }
    async clickOnPrivacyStatement(){
        await this.commands.clickWebElement(this.privacyStatementLink)
    }
    async verifyPrivacyStatementOpens(){
        const allHandles = await browser.getWindowHandles()
        if(allHandles.length > 2){
            return true;
        }
        else{
            return false;
        }
    }
    async clickOnFeedBack(){
        await this.commands.clickWebElement(this.feedbackLink)
        const allHandles = await browser.getWindowHandles();
        for(const handle of allHandles){
            await browser.switchToWindow(handle);
        }
    }
    async clickOnFeedBackSubmitButton(){
        await this.commands.clickWebElement(this.feedbackSubmitButton)
    }
    async verifyEmptyFeedbackErrorIsDisplayed(){
        return await this.commands.isElementDisplayed(this.emptyFeedbackErrorMessage)
    }
    async verifyStarCheckBoxesAreInsideRedBox(){
        return await this.commands.doesElementExist(this.redBox+'//'+this.starBox1)
    }
    async clickOn5StarBox(){
        await this.commands.clickWebElement(this.starBox5)
    }
    async enterComment(value){
        await this.commands.typeInWebElement(this.commentArea, value);
    }
    async howLikelyToReturn(){
        //await $(this.child1AgeBox).selectByVisibleText(this.child1Age)
        await $(this.howLikelyToReturnDropdown).selectByVisibleText(this.HighlyLikely);
    }
    async didYouAccomplish(){
        await this.commands.clickWebElement(this.didYouAccomplishYes)
    }
    async verifyThankYouForFeedbackMessage(){
        await this.commands.isElementDisplayed(this.thankYouForFeedbackMessage)
    }
    async verifyChildrenAgeDropdown(value){
        let NumberOfDropdownBoxes = await this.commands.findWebElements(this.childAgeBoxes)
        // console.log("TYPE OF: " + typeof NumberOfDropdownBoxes)
        // console.log("LENGTH: " + NumberOfDropdownBoxes.length)
        if(NumberOfDropdownBoxes.length == value){
            return true;
        }
        else{
            return false;
        }

    }
    async verifyPlusButtonIsEnabled(){
        await browser.pause(2000)
        return await this.commands.isElementEnabled(this.childrenPlusButton);
    }
    async verifyMinusButtonIsEnabled(){
        await browser.pause(2000)
        return await this.commands.isElementEnabled(this.childrenMinusButton);
    }
    async clickChildrenMinusButton(){
        await this.commands.clickWebElement(this.childrenMinusButton)
    }
    async verifyChildrenAgeDropdownIsNotDisplayed(){
        return await this.commands.isElementDisplayed(this.child1AgeBox)
    }

}
module.exports = ProjectPage 