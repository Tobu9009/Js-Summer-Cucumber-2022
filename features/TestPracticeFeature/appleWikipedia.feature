# >>use WaitUntil to wait until coolmathgames fully displays all options ( 26)  after typing 'ace' in the search, then click "flip palace"
# >> go on google, type in "apple",  scroll until apple Inc wiki page shows up, 
# click on it, then switch to the tab and verify that you are on wikipedia, 
# click on main page, close all tabs beside wiki main. 
# use scenerio outlines with 3 inputs for each  
# username, password, confirm password, and email address, 
# click on "Create account", fail because you failed the captcha
@testPractice2
Feature: Apple wikipedia 
    Scenario Outline:
        Given I am on google landing page
        When I click on google search bar
        When I type "Apple" in google search bar
        #When I scroll apple wikipedia into view
        When I click apple wikipedia suggestion
        When I click create account 
        When I type "<username>" in username
        When I type "<password>" in password 
        When I type "<confirmPassword>" in confirmPassword
        When I type "<email>" in email
        When I verify I am still on create account
        Examples:
            | username            | password        | confirmPassword        | email             |
            | gawrgura            | opiumfarmer23   | gibbyOnLean9000        | MORBIUSclout      |
            | verybad             | kumquat         | verify                 | superNice         |
            | verybad             | kumquat         | verify                 | superNice         |
            | supernice@gmail.com | kaisa@booba.com | youremom@muscleman.com | livebirth@wow.com |
        