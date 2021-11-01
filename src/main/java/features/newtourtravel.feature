@travel
Feature: User Registration for Newtours

Scenario Outline: Users are able to register

Given User is navigated to the homepage of the website
When User clicks on the register link
And User enters firstname as "<firstname>"
And User enters lastname as "<lastname>"
And User enters phone as "<phone>"
And User enters email as "<email>"
And User enters address as "<address>"
And User enters city as "<city>"
And User enters state as "<state>" 
And User enters postal code as "<postal code>"
And User selects country as "India"
And User enters username "<username>"
And User enters password "<password>"
And User enters same "<password>" in confirm password field
And User clicks on Submit
Then user is registered successfully

Examples:

| firstname | lastname | phone      | email         | address   | city      | state     | postal code | username  | password |
| Test111   | Autom111 | 9087654321 | test1@aut.com | test add1 | Bengaluru | Karnataka | 560059      | TestAut1  | TestAut1 |
| Test112   | Autom112 | 9087654322 | test2@aut.com | test add2 | Bengaluru | Karnataka | 560059      | TestAut2  | TestAut2 |
| Test113   | Autom113 | 9087654323 | test3@aut.com | test add3 | Bengaluru | Karnataka | 560059      | TestAut3  | TestAut3 |
| Test114   | Autom114 | 9087654324 | test4@aut.com | test add4 | Bengaluru | Karnataka | 560059      | TestAut4  | TestAut4 |
| Test115   | Autom115 | 9087654325 | test5@aut.com | test add5 | Bengaluru | Karnataka | 560059      | TestAut5  | TestAut5 |
| Test116   | Autom116 | 9087654326 | test6@aut.com | test add6 | Bengaluru | Karnataka | 560059      | TestAut6  | TestAut6 |
| Test117   | Autom117 | 9087654327 | test7@aut.com | test add7 | Bengaluru | Karnataka | 560059      | TestAut7  | TestAut7 |
| Test118   | Autom118 | 9087654328 | test8@aut.com | test add8 | Bengaluru | Karnataka | 560059      | TestAut8  | TestAut8 |
| Test119   | Autom119 | 9087654329 | test9@aut.com | test add9 | Bengaluru | Karnataka | 560059      | TestAut9  | TestAut9 |
| Test110   | Autom110 | 9087654320 | test0@aut.com | test add0 | Bengaluru | Karnataka | 560059      | TestAut10 | TestAut10 |
