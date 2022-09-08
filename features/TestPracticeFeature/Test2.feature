Feature: Test2
    @test2
    Scenario: Darksky
        Given I am on darksky landing page
        Then I verify timeline has 12-data points with 2 hour gap from current hour