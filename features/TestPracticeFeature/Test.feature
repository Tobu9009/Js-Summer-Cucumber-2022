Feature: Test
    @test1
    Scenario: Hotels
        Given I am on hotels landing page
        When I click on hotels rewards
        And I verify hotels rewards opens in a new window
        And I click on join now button
        And I verify form is blank
        Then I verify continue button is not enabled
#