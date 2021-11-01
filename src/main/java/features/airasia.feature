@airasia
Feature: Air Asia Flight search and Login

@flight
Scenario: User is able to search flights between two locations

Given User is navigated successfully to the website
And User clicks on the Flights Icon
When User enters origin as "Bengaluru(BLR)"
And User enters destination as "Pune"
And User selects depart date as "15/12/2018"
And User selects return date as "One Way"
And User clicks on Search button
Then User should be navigated to the search flight page

@login
Scenario: User is able to the Website

Given User is navigated successfully to the website
And User clicks on the login button
When User enters username as "a@gmail.com"
And User enters password as "India1234"
And User clicks on Sign In button
Then Error message is displayed on screen in red and contains the text "Your log in attempts has been unsuccessful."


