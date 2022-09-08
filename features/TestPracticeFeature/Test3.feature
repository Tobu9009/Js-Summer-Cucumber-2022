Feature: Test3
    @test3
    Scenario: Darksky2
        Given I am on darksky landing page
        When I scroll to today timeline
        And I click on plus button
        Then I verify minTemp and todayMinTemp are the same
        Then I verify maxTemp and todayMaxTemp are the same
#