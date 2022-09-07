
# >>use WaitUntil to wait until coolmathgames fully displays all options ( 26)  after typing 'ace' in the search, then click "flip palace"
# >> go on google, type in "apple",  scroll until apple Inc wiki page shows up, 
# click on it, then switch to the tab and verify that you are on wikipedia, 
# click on main page, close all tabs beside wiki main. 
# use scenerio outlines with 3 inputs for each  
# username, password, confirm password, and email address, 
# click on "Create account", fail because you failed the captcha

@testPractice
Feature: Cool Math Games
    Scenario: Verify coolMathGamesDisplays all 26 options after typing ace in search
    Given I am on cool math games
    When I click on search button
    And I type "ace" in search bar
    And I verify 26 options are available
    Then I click flip palace







