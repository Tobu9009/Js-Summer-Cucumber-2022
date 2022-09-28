@sprint2
Feature: Project

    @tc19    
    Scenario: Verify user can update number of guests on Home page
        Given I am on hotels landing page
        When I enter "bora" in going to
        And I select "bora bora" from auto-suggestion
        And I click on date form
        And I go to "December 2022" page
        And I enter "December 1, 2022" as check-in date
        And I enter "December 10, 2022" as check-out date
        And I click calendar done button
        And I click submit button
        Then I verify tell us how can we improve our site is displayed
        And I verify share feedback button is displayed and enabled

    @tc17
    Scenario: Verify past date and back button on current month's calendar is disabled
        Given I am on hotels landing page
        When I click on date form
        And I go to previous page
        Then I verify past dates on current month are disabled
        And I verify back button on current month is disabled

    @tc29
    Scenario: Verify "list your property" flow
        Given I am on hotels landing page
        When I click on list your property 
        And I verify what would you like to do list is displayed
        And I verify lodging and private residence is displayed
        And I click on private residence
        Then I verify step 1 of 3 is displayed
        And I verify see how much you could earn is displayed
        And I click on increase bedrooms button 4 times
        And I click on increase bathrooms button 3 times
        And I click next button
        Then I verify step 2 of 3 is displayed
        And I enter "121" as address
        And I select "6th Avenue" from address auto-suggestion
        Then I verify map is displayed
        And I verify pin is displayed

    @tc23
    Scenario: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels landing page
        When I enter "man" in going to
        And I select "manhattan" from auto-suggestion
        And I click on date form
        And I go to "January 2023" page
        And I enter "January 10, 2023" as check-in date
        And I enter "January 23, 2023" as check-out date
        And I click calendar done button
        And I click submit button
        And I click on 5 star rating filter
        And I select sort by price
        Then I verify hotels are rated as selected
        And I verify prices are in increasing order

    @tc31
    Scenario: Verify language can be changed successfully
        Given I am on hotels landing page
        When I click language button
        And I select spanish
        And I click save button
        Then I verify espanol is displayed
        And I click spanish language button
        And I select english
        And I click guardar button
        And I verify english is displayed
        
    @tc30
    Scenario: Verify invalid phone number error
        Given I am on hotels landing page
        When I scroll to get the app
        And I input "0000000000" as phone number
        And I click get the app
        Then I verify error message is displayed