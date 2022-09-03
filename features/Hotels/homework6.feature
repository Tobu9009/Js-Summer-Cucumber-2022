Feature: Homework 6
    @homework6
    Scenario: Verify past dates of the current month is not enabled
        Given I am on hotels landing page
        When I click on date form
        Then I verify that past dates of current month is not enabled
    @homework6-2
    Scenario: Verify destination and check-in and check-out dates are as user selected
        Given I am on hotels landing page
        When I click going to 
        And I enter "man" in going to
        And I select "Manila" from auto-suggestion
        When I click on date form
        And I click tomorrows date
        And I click date 5 days from tomorrow
        When I click done button
        And I click submit button
        When I verify going to location contains "Manila"
        When I verify check-in date is tomorrows date
        Then I verify check-out date is 5 days from tomorrow

