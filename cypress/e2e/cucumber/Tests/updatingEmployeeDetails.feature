Feature: Updating existing employee records on OrangeHRM

    Scenario: Employee Drivers license details can be updated
        Given user is logged into hrm portal
        When an employee is added to database
        And the employee record is searched by employee ID
        And details of the employee driver license is updated
        Then updated details should be saved

    Scenario: Employment status can be updated
        Given user is logged into hrm portal
        When an existing user is searched by firstname
        And details of employment is updated
        Then updated details should be displayed on employee record