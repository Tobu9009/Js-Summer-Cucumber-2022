Feature: Search

    @hotels-1
    Scenario: Verify search location is displayed on Search page - 1
        Given I am on hotels landing page
        When I enter "new" in going to
        And I select "MANHATTAN" from auto-suggestion
        And I click on search button
        Then I verify going to location contains ""MANHATTAN"

    @hotels-2 @sanity
    Scenario: Verify search location is displayed on Search page - 2
        Given I am on hotels landing page
        When I enter "NEW" in going to
        And I select "MANHATTAN" from auto-suggestion
        And I click on search button
        Then I verify going to location contains ""MANHATTAN"

    @hotels-3 @imp
    Scenario: Verify search location is displayed on Search page - 3
        Given I am on hotels landing page
        When I enter "NeW" in going to
        And I select "MANHATTAN" from auto-suggestion
        And I click on search button
        Then I verify going to location contains ""MANHATTAN"