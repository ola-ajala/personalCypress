Feature: Adding new employee on OrangeHRM via PIM section

    Scenario: Employee can be added to database
        Given user is logged into hrm portal
        When user naviages to pim section
        And user selects add button
        And user fills employee details into the fields provided
        And user clicks on save button
        Then employee details entered should be saved successfully into the database