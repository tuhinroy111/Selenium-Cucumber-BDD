$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("airasia.feature");
formatter.feature({
  "line": 2,
  "name": "Air Asia Flight search and Login",
  "description": "",
  "id": "air-asia-flight-search-and-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@airasia"
    }
  ]
});
formatter.before({
  "duration": 6149886000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User is able to search flights between two locations",
  "description": "",
  "id": "air-asia-flight-search-and-login;user-is-able-to-search-flights-between-two-locations",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@flight"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is navigated successfully to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Flights Icon",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters origin as \"Bengaluru(BLR)\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters destination as \"Pune\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects depart date as \"15/12/2018\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects return date as \"One Way\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be navigated to the search flight page",
  "keyword": "Then "
});
formatter.match({
  "location": "AirasiaSteps.user_is_navigated_successfully_to_the_website()"
});
formatter.result({
  "duration": 3235294700,
  "status": "passed"
});
formatter.match({
  "location": "AirasiaSteps.user_clicks_on_the_Flights_Icon()"
});
formatter.result({
  "duration": 4487964300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru(BLR)",
      "offset": 23
    }
  ],
  "location": "AirasiaSteps.user_enters_origin_as(String)"
});
formatter.result({
  "duration": 2742591200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 28
    }
  ],
  "location": "AirasiaSteps.user_enters_destination_as(String)"
});
formatter.result({
  "duration": 1730160900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/12/2018",
      "offset": 29
    }
  ],
  "location": "AirasiaSteps.user_selects_depart_date_as(String)"
});
formatter.result({
  "duration": 232557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One Way",
      "offset": 29
    }
  ],
  "location": "AirasiaSteps.user_selects_return_date_as(String)"
});
formatter.result({
  "duration": 139166400,
  "status": "passed"
});
formatter.match({
  "location": "AirasiaSteps.user_clicks_on_Search_button()"
});
formatter.result({
  "duration": 515925100,
  "status": "passed"
});
formatter.match({
  "location": "AirasiaSteps.user_should_be_navigated_to_the_search_flight_page()"
});
formatter.result({
  "duration": 3010969100,
  "status": "passed"
});
formatter.after({
  "duration": 2131567100,
  "status": "passed"
});
formatter.before({
  "duration": 4566253300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User is able to the Website",
  "description": "",
  "id": "air-asia-flight-search-and-login;user-is-able-to-the-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is navigated successfully to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters username as \"a@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters password as \"India1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Error message is displayed on screen in red and contains the text \"Your log in attempts has been unsuccessful.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AirasiaSteps.user_is_navigated_successfully_to_the_website()"
});
formatter.result({
  "duration": 2828786600,
  "status": "passed"
});
formatter.match({
  "location": "AirasiaSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1531298000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a@gmail.com",
      "offset": 25
    }
  ],
  "location": "AirasiaSteps.user_enters_username_as(String)"
});
formatter.result({
  "duration": 212117400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India1234",
      "offset": 25
    }
  ],
  "location": "AirasiaSteps.user_enters_password_as(String)"
});
formatter.result({
  "duration": 261147900,
  "status": "passed"
});
formatter.match({
  "location": "AirasiaSteps.user_clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 265148600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your log in attempts has been unsuccessful.",
      "offset": 67
    }
  ],
  "location": "AirasiaSteps.error_message_is_displayed_on_screen_in_red_and_contains_the_text(String)"
});
formatter.result({
  "duration": 3044132400,
  "status": "passed"
});
formatter.after({
  "duration": 867071300,
  "status": "passed"
});
formatter.uri("automationpractice.feature");
formatter.feature({
  "line": 2,
  "name": "User Registration for Automation Practices",
  "description": "",
  "id": "user-registration-for-automation-practices",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@automation_practice"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Users are able to register successfully",
  "description": "",
  "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage of Automation practices website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid \"\u003cemail\u003e\" in the account box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User selects \"\u003ctitle\u003e\" radiobox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects date \"\u003cdate\u003e\" , month \"\u003cmonth\u003e\" and year \"\u003cyear\u003e\" of birth",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters postal code \"\u003cpostal code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters mobile phone \"\u003cmobile phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be registered successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "title",
        "firstname",
        "lastname",
        "password",
        "date",
        "month",
        "year",
        "address",
        "city",
        "country",
        "state",
        "postal code",
        "mobile phone"
      ],
      "line": 27,
      "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;1"
    },
    {
      "cells": [
        "test7@aut.com",
        "Mr.",
        "Tester",
        "Autom",
        "TestAut1",
        "12",
        "December",
        "1993",
        "TestAdd1",
        "Bengaluru",
        "United States",
        "Alabama",
        "90872",
        "9087654321"
      ],
      "line": 28,
      "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;2"
    },
    {
      "cells": [
        "test8@aut.com",
        "Mrs.",
        "Testerr",
        "Autom",
        "TestAut2",
        "14",
        "February",
        "1994",
        "TestAdd2",
        "Kolkata",
        "United States",
        "Colorado",
        "90873",
        "9087654322"
      ],
      "line": 29,
      "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;3"
    },
    {
      "cells": [
        "test9@aut.com",
        "Mr.",
        "Testrrr",
        "Autom",
        "TestAut3",
        "15",
        "March",
        "1995",
        "TestAdd3",
        "Mumbai",
        "United States",
        "Florida",
        "90874",
        "9087654323"
      ],
      "line": 30,
      "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11099800100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Users are able to register successfully",
  "description": "",
  "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@automation_practice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage of Automation practices website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid \"test7@aut.com\" in the account box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User selects \"Mr.\" radiobox",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters firstname \"Tester\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters lastname \"Autom\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"TestAut1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects date \"12\" , month \"December\" and year \"1993\" of birth",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters address \"TestAdd1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters city \"Bengaluru\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects country \"United States\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects state \"Alabama\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters postal code \"90872\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters mobile phone \"9087654321\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationpracticeSteps.user_is_on_the_homepage_of_Automation_practices_website()"
});
formatter.result({
  "duration": 21024600,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_Sign_In_button()"
});
formatter.result({
  "duration": 3410493800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test7@aut.com",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_a_valid_in_the_account_box(String)"
});
formatter.result({
  "duration": 138130200,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "duration": 105298700,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_is_navigated_to_the_registration_page()"
});
formatter.result({
  "duration": 4513400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 14
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_radiobox(String)"
});
formatter.result({
  "duration": 2087953200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 23
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_firstname(String)"
});
formatter.result({
  "duration": 323569900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom",
      "offset": 22
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_lastname(String)"
});
formatter.result({
  "duration": 485352500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut1",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enter_password(String)"
});
formatter.result({
  "duration": 140259000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "December",
      "offset": 32
    },
    {
      "val": "1993",
      "offset": 52
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_date_month_and_year_of_birth(String,String,String)"
});
formatter.result({
  "duration": 302284300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAdd1",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_address(String)"
});
formatter.result({
  "duration": 130390300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 18
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_city(String)"
});
formatter.result({
  "duration": 301182100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 22
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_country(String)"
});
formatter.result({
  "duration": 140323500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alabama",
      "offset": 20
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_state(String)"
});
formatter.result({
  "duration": 307729600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90872",
      "offset": 25
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_postal_code(String)"
});
formatter.result({
  "duration": 127368800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654321",
      "offset": 26
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_mobile_phone(String)"
});
formatter.result({
  "duration": 156496600,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2802893800,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_should_be_registered_successfully()"
});
formatter.result({
  "duration": 3011168900,
  "status": "passed"
});
formatter.after({
  "duration": 804110700,
  "status": "passed"
});
formatter.before({
  "duration": 10415846000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Users are able to register successfully",
  "description": "",
  "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@automation_practice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage of Automation practices website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid \"test8@aut.com\" in the account box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User selects \"Mrs.\" radiobox",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters firstname \"Testerr\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters lastname \"Autom\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"TestAut2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects date \"14\" , month \"February\" and year \"1994\" of birth",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters address \"TestAdd2\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters city \"Kolkata\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects country \"United States\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects state \"Colorado\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters postal code \"90873\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters mobile phone \"9087654322\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationpracticeSteps.user_is_on_the_homepage_of_Automation_practices_website()"
});
formatter.result({
  "duration": 6760500,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_Sign_In_button()"
});
formatter.result({
  "duration": 4039623900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test8@aut.com",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_a_valid_in_the_account_box(String)"
});
formatter.result({
  "duration": 166145800,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "duration": 122492300,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_is_navigated_to_the_registration_page()"
});
formatter.result({
  "duration": 6389900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 14
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_radiobox(String)"
});
formatter.result({
  "duration": 3033194300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testerr",
      "offset": 23
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_firstname(String)"
});
formatter.result({
  "duration": 330430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom",
      "offset": 22
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_lastname(String)"
});
formatter.result({
  "duration": 405861700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut2",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enter_password(String)"
});
formatter.result({
  "duration": 286446000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 19
    },
    {
      "val": "February",
      "offset": 32
    },
    {
      "val": "1994",
      "offset": 52
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_date_month_and_year_of_birth(String,String,String)"
});
formatter.result({
  "duration": 451531800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAdd2",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_address(String)"
});
formatter.result({
  "duration": 163019200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kolkata",
      "offset": 18
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_city(String)"
});
formatter.result({
  "duration": 178159300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 22
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_country(String)"
});
formatter.result({
  "duration": 55440200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colorado",
      "offset": 20
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_state(String)"
});
formatter.result({
  "duration": 80380500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90873",
      "offset": 25
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_postal_code(String)"
});
formatter.result({
  "duration": 278078600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654322",
      "offset": 26
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_mobile_phone(String)"
});
formatter.result({
  "duration": 378300700,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4190168100,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_should_be_registered_successfully()"
});
formatter.result({
  "duration": 3005544700,
  "status": "passed"
});
formatter.after({
  "duration": 943849300,
  "status": "passed"
});
formatter.before({
  "duration": 9851368700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Users are able to register successfully",
  "description": "",
  "id": "user-registration-for-automation-practices;users-are-able-to-register-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@automation_practice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage of Automation practices website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid \"test9@aut.com\" in the account box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User selects \"Mr.\" radiobox",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters firstname \"Testrrr\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters lastname \"Autom\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"TestAut3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects date \"15\" , month \"March\" and year \"1995\" of birth",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters address \"TestAdd3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters city \"Mumbai\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects country \"United States\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects state \"Florida\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters postal code \"90874\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters mobile phone \"9087654323\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationpracticeSteps.user_is_on_the_homepage_of_Automation_practices_website()"
});
formatter.result({
  "duration": 16215100,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_Sign_In_button()"
});
formatter.result({
  "duration": 4086386400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test9@aut.com",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_a_valid_in_the_account_box(String)"
});
formatter.result({
  "duration": 517841900,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "duration": 189997100,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_is_navigated_to_the_registration_page()"
});
formatter.result({
  "duration": 4522900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 14
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_radiobox(String)"
});
formatter.result({
  "duration": 1879817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testrrr",
      "offset": 23
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_firstname(String)"
});
formatter.result({
  "duration": 403325000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom",
      "offset": 22
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_lastname(String)"
});
formatter.result({
  "duration": 495756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut3",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enter_password(String)"
});
formatter.result({
  "duration": 164029800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 19
    },
    {
      "val": "March",
      "offset": 32
    },
    {
      "val": "1995",
      "offset": 49
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_date_month_and_year_of_birth(String,String,String)"
});
formatter.result({
  "duration": 334318700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAdd3",
      "offset": 21
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_address(String)"
});
formatter.result({
  "duration": 165695400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 18
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_city(String)"
});
formatter.result({
  "duration": 144207800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 22
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_country(String)"
});
formatter.result({
  "duration": 63885300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Florida",
      "offset": 20
    }
  ],
  "location": "AutomationpracticeSteps.user_selects_state(String)"
});
formatter.result({
  "duration": 85786900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90874",
      "offset": 25
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_postal_code(String)"
});
formatter.result({
  "duration": 380712300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654323",
      "offset": 26
    }
  ],
  "location": "AutomationpracticeSteps.user_enters_mobile_phone(String)"
});
formatter.result({
  "duration": 184419900,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2914641000,
  "status": "passed"
});
formatter.match({
  "location": "AutomationpracticeSteps.user_should_be_registered_successfully()"
});
formatter.result({
  "duration": 3086123300,
  "status": "passed"
});
formatter.after({
  "duration": 731512200,
  "status": "passed"
});
formatter.uri("newtourtravel.feature");
formatter.feature({
  "line": 2,
  "name": "User Registration for Newtours",
  "description": "",
  "id": "user-registration-for-newtours",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"\u003cpostal code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"\u003cpassword\u003e\" in confirm password field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "phone",
        "email",
        "address",
        "city",
        "state",
        "postal code",
        "username",
        "password"
      ],
      "line": 25,
      "id": "user-registration-for-newtours;users-are-able-to-register;;1"
    },
    {
      "cells": [
        "Test111",
        "Autom111",
        "9087654321",
        "test1@aut.com",
        "test add1",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut1",
        "TestAut1"
      ],
      "line": 26,
      "id": "user-registration-for-newtours;users-are-able-to-register;;2"
    },
    {
      "cells": [
        "Test112",
        "Autom112",
        "9087654322",
        "test2@aut.com",
        "test add2",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut2",
        "TestAut2"
      ],
      "line": 27,
      "id": "user-registration-for-newtours;users-are-able-to-register;;3"
    },
    {
      "cells": [
        "Test113",
        "Autom113",
        "9087654323",
        "test3@aut.com",
        "test add3",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut3",
        "TestAut3"
      ],
      "line": 28,
      "id": "user-registration-for-newtours;users-are-able-to-register;;4"
    },
    {
      "cells": [
        "Test114",
        "Autom114",
        "9087654324",
        "test4@aut.com",
        "test add4",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut4",
        "TestAut4"
      ],
      "line": 29,
      "id": "user-registration-for-newtours;users-are-able-to-register;;5"
    },
    {
      "cells": [
        "Test115",
        "Autom115",
        "9087654325",
        "test5@aut.com",
        "test add5",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut5",
        "TestAut5"
      ],
      "line": 30,
      "id": "user-registration-for-newtours;users-are-able-to-register;;6"
    },
    {
      "cells": [
        "Test116",
        "Autom116",
        "9087654326",
        "test6@aut.com",
        "test add6",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut6",
        "TestAut6"
      ],
      "line": 31,
      "id": "user-registration-for-newtours;users-are-able-to-register;;7"
    },
    {
      "cells": [
        "Test117",
        "Autom117",
        "9087654327",
        "test7@aut.com",
        "test add7",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut7",
        "TestAut7"
      ],
      "line": 32,
      "id": "user-registration-for-newtours;users-are-able-to-register;;8"
    },
    {
      "cells": [
        "Test118",
        "Autom118",
        "9087654328",
        "test8@aut.com",
        "test add8",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut8",
        "TestAut8"
      ],
      "line": 33,
      "id": "user-registration-for-newtours;users-are-able-to-register;;9"
    },
    {
      "cells": [
        "Test119",
        "Autom119",
        "9087654329",
        "test9@aut.com",
        "test add9",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut9",
        "TestAut9"
      ],
      "line": 34,
      "id": "user-registration-for-newtours;users-are-able-to-register;;10"
    },
    {
      "cells": [
        "Test110",
        "Autom110",
        "9087654320",
        "test0@aut.com",
        "test add0",
        "Bengaluru",
        "Karnataka",
        "560059",
        "TestAut10",
        "TestAut10"
      ],
      "line": 35,
      "id": "user-registration-for-newtours;users-are-able-to-register;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5735205300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom111\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654321\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test1@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut1\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 6877200,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1037400300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test111",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 127575900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom111",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 119576800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654321",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 129322100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 141119600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add1",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 212915900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 122305200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 118439300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 103738100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 73287700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut1",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 114091500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut1",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 113782200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut1",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 189873700,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1940932200,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 4039700,
  "status": "passed"
});
formatter.after({
  "duration": 755522300,
  "status": "passed"
});
formatter.before({
  "duration": 5762444000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test112\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom112\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654322\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test2@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut2\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut2\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut2\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 6486600,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1021714400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test112",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 141749400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom112",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 124273300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654322",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 248442600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test2@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 380059500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add2",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 335617900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 140616500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 132745200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 115312800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 82714700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut2",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 525570100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut2",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 412988300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut2",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 110068100,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 416557000,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 79075500,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Register: Mercury Tours]\u003e but was:\u003c[newtours.demoaut.com]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepdefinitions.NewtourTravelSteps.user_is_registered_successfully(NewtourTravelSteps.java:135)\r\n\tat ✽.Then user is registered successfully(newtourtravel.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 715163100,
  "status": "passed"
});
formatter.before({
  "duration": 5799059100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test113\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom113\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654323\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test3@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut3\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut3\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 13804700,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1044131500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test113",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 137444100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom113",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 174351200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654323",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 126157300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test3@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 166646600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add3",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 125227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 146476700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 116299900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 97750600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 97789800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut3",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 105478000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut3",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 105179400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut3",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 108787900,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1951688000,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 4210800,
  "status": "passed"
});
formatter.after({
  "duration": 875092700,
  "status": "passed"
});
formatter.before({
  "duration": 5905128900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test114\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom114\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654324\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test4@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add4\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut4\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut4\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut4\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 7790000,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1032902100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test114",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 149883500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom114",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 120264200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654324",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 242239200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test4@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 230444700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add4",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 103268400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 108036000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 124706700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 109591600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 81228900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut4",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 130346800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut4",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 110410500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut4",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 102849800,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1926816000,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 19451800,
  "status": "passed"
});
formatter.after({
  "duration": 705773300,
  "status": "passed"
});
formatter.before({
  "duration": 5927115300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test115\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom115\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654325\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test5@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add5\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut5\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut5\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut5\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 5801300,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1025615300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test115",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 120456300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom115",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 129129600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654325",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 135184800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test5@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 137404900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add5",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 125221700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 131716800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 111811600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 103318500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 76192200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut5",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 127335100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut5",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 101446000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut5",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 120699500,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1572111000,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 5314900,
  "status": "passed"
});
formatter.after({
  "duration": 802129600,
  "status": "passed"
});
formatter.before({
  "duration": 6042018100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test116\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom116\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654326\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test6@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add6\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut6\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut6\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut6\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 10310800,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1041538800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test116",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 151224400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom116",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 98781000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654326",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 128012700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test6@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 183421200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add6",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 134038800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 239760600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 242664200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 115813300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 85535100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut6",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 150903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut6",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 193400300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut6",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 106724900,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1747012700,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 10820800,
  "status": "passed"
});
formatter.after({
  "duration": 1000451500,
  "status": "passed"
});
formatter.before({
  "duration": 5752594400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test117\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom117\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654327\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test7@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add7\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut7\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut7\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut7\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 8885700,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1067599000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test117",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 237270600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom117",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 221091000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654327",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 225813200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test7@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 148483700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add7",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 207031300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 138719600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 186005200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 128041400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 105490300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut7",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 185372200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut7",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 209334900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut7",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 103655800,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1782539200,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 8667600,
  "status": "passed"
});
formatter.after({
  "duration": 851364600,
  "status": "passed"
});
formatter.before({
  "duration": 5864617900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test118\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom118\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654328\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test8@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add8\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut8\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut8\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut8\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 5504800,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1029534100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test118",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 144614700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom118",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 254131200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654328",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 244027200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test8@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 167013600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add8",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 129279400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 154546000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 167929100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 216750300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 157496400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut8",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 136438900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut8",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 109243800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut8",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 113585500,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1713797400,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 7975800,
  "status": "passed"
});
formatter.after({
  "duration": 705231000,
  "status": "passed"
});
formatter.before({
  "duration": 5780904600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test119\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom119\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654329\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test9@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add9\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut9\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut9\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut9\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 8990100,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1064333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test119",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 233401800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom119",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 273763700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654329",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 276862000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test9@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 355166500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add9",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 205214400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 180610500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 126127600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 107366400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 100692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut9",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 119651900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut9",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 107682200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut9",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 104098500,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1709573300,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 3879500,
  "status": "passed"
});
formatter.after({
  "duration": 875688200,
  "status": "passed"
});
formatter.before({
  "duration": 5993220500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Users are able to register",
  "description": "",
  "id": "user-registration-for-newtours;users-are-able-to-register;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@travel"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is navigated to the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters firstname as \"Test110\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters lastname as \"Autom110\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters phone as \"9087654320\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters email as \"test0@aut.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters address as \"test add0\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters city as \"Bengaluru\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters state as \"Karnataka\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters postal code as \"560059\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects country as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters username \"TestAut10\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"TestAut10\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters same \"TestAut10\" in confirm password field",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_navigated_to_the_homepage_of_the_website()"
});
formatter.result({
  "duration": 11590900,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_the_register_link()"
});
formatter.result({
  "duration": 1043163800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test110",
      "offset": 26
    }
  ],
  "location": "NewtourTravelSteps.user_enters_firstname_as(String)"
});
formatter.result({
  "duration": 145714100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Autom110",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_enters_lastname_as(String)"
});
formatter.result({
  "duration": 117578200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087654320",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 132638000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0@aut.com",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_email_as(String)"
});
formatter.result({
  "duration": 123498700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test add0",
      "offset": 24
    }
  ],
  "location": "NewtourTravelSteps.user_enters_address_as(String)"
});
formatter.result({
  "duration": 128504500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    }
  ],
  "location": "NewtourTravelSteps.user_enters_city_as(String)"
});
formatter.result({
  "duration": 231739200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karnataka",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_state_as(String)"
});
formatter.result({
  "duration": 153122100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560059",
      "offset": 28
    }
  ],
  "location": "NewtourTravelSteps.user_enters_postal_code_as(String)"
});
formatter.result({
  "duration": 222256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "NewtourTravelSteps.user_selects_country_as(String)"
});
formatter.result({
  "duration": 79013400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut10",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 136624800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut10",
      "offset": 22
    }
  ],
  "location": "NewtourTravelSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 130860200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAut10",
      "offset": 18
    }
  ],
  "location": "NewtourTravelSteps.user_enters_same_in_confirm_password_field(String)"
});
formatter.result({
  "duration": 108083800,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_clicks_on_Submit()"
});
formatter.result({
  "duration": 1833744800,
  "status": "passed"
});
formatter.match({
  "location": "NewtourTravelSteps.user_is_registered_successfully()"
});
formatter.result({
  "duration": 3270200,
  "status": "passed"
});
formatter.after({
  "duration": 792877400,
  "status": "passed"
});
});