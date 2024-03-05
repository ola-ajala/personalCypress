Feature: Searching added employee on OrangeHRM

    Scenario: Added employee can be searched by employee ID
        Given user is logged into hrm portal
        When an employee is added to database
        And the employee is searched by employee ID
        Then details of the employee should be displayed

    Scenario: Exising employee can be searched by firstname
        Given user is logged into hrm portal
        When an existing employee is searched by firstname
        Then details of the employee should be displayed