@automation_practice
Feature: User Registration for Automation Practices

Scenario Outline: Users are able to register successfully

Given User is on the homepage of Automation practices website
When User clicks Sign In button
And User enters a valid "<email>" in the account box
And User clicks on Create an Account button
Then User is navigated to the registration page
Then User selects "<title>" radiobox
And  User enters firstname "<firstname>"
And User enters lastname "<lastname>"
And User enter password "<password>"
And User selects date "<date>" , month "<month>" and year "<year>" of birth
And User enters address "<address>"
And User enters city "<city>"
And User selects country "<country>"
And User selects state "<state>"
And User enters postal code "<postal code>"
And User enters mobile phone "<mobile phone>"
And User clicks on Register button
Then User should be registered successfully

Examples:

| email        | title | firstname | lastname | password | date | month    | year | address  | city      | country       | state    | postal code | mobile phone |
|test7@aut.com | Mr.   | Tester    | Autom    | TestAut1 | 12   | December | 1993 | TestAdd1 | Bengaluru | United States | Alabama  | 90872       | 9087654321   |
|test8@aut.com | Mrs.  | Testerr   | Autom    | TestAut2 | 14   | February | 1994 | TestAdd2 | Kolkata   | United States | Colorado | 90873       | 9087654322   |
|test9@aut.com | Mr.   | Testrrr   | Autom    | TestAut3 | 15   | March    | 1995 | TestAdd3 | Mumbai    | United States | Florida  | 90874       | 9087654323   |