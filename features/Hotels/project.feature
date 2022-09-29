@all
Feature: Project
    @project    
    Scenario: Verify user can update number of guests on Home page
        Given I am on hotels landing page
        When I click on traveler form
        And I click on adult plus button 4 times
        And I click on children plus button 3 times
        And I select child1's age
        And I select child2's age
        And I select child3's age
        And I click done button
        Then I verify total number of guests of adults and children is the same in travelers

    @project2
    Scenario: Verify verification message for invalid sign in credentials
        Given I am on hotels landing page 
        When I click on blue sign in link on the top right
        And I enter "bro@wow.com" in email form
        And I enter "silverLining" in password form
        And I click on sign in button 
        Then I verify verification message is displayed

    @project3
    Scenario: Verify error message for invalid data in sign up form
        Given I am on hotels landing page
        When I click on sign up button
        And I enter "#!@###" in sign up email form
        Then I verify invalid email error message is displayed
        And I enter "!@" in first name sign up form
        Then I verify invalid first name error message is displayed
        And I enter "%^&" in last name sign up form
        Then I verify invalid last name error message is displayed
        And I enter "sapporo" in password sign up form
        And I verify checkbox is displayed and enabled
        Then I verify continue button is displayed
        And I verify continue button is not enabled

    @project4
    Scenario: Verify terms and conditions link and privacy statements link open correct page on new tab
        Given I am on hotels landing page
        When I click on sign up button
        And I click on terms and conditions link
        Then I verify terms and conditions opens in a new tab
        And I click on privacy statement link
        Then I verify privacy statement opens in a new tab

    @project5
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels landing page
        When I click on sign in button on the top right
        And I click on feedback link
        And I submit feedback
        And I verify empty feedback error is displayed
        Then I verify star box is inside red dotted box

    @project6
    Scenario: Verify user can submit feedback after completing the feedback form
        Given I am on hotels landing page
        When I click on sign in button on the top right
        And I click on feedback link
        And I click on 5 stars
        And I enter "good service" in the page comments
        And I click on highly likely in how likely are you to return to hotels.com
        And I click how likely yes in did you accomplish what you wanted to do on this page
        And I submit feedback
        Then I verify "thank you for your feedback" message is displayed  
          
    @project7
    Scenario: Verify Child-age dropdowns are same as number of Children selected
        Given I am on hotels landing page
        When I click on traveler form
        #select children as 2
        And I click on children plus button 2 times
        Then I verify children age dropdown are "2"
        And I verify plus button is enabled
        And I verify minus button is enabled
        #select children as 6
        And I click on children plus button 4 times 
        Then I verify children age dropdown are "6"
        And I verify plus button is disabled
        And I verify minus button is enabled
        #select children as 5
        And I click on children minus button 1 times
        Then I verify children age dropdown are "5"
        And I verify plus button is enabled
        And I verify minus button is enabled
        #select children as 0
        And I click on children minus button 5 times
        Then I verify children age dropdown is not displayed
        And I verify plus button is enabled
        And I verify minus button is disabled





        




