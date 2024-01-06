Feature: Test login functions

  Scenario: Check login with valid credentials
    Given user is on the login page
    When user enters <username> and <password>
    And click on the login button
    Then this <message> is displayed

    Examples: 
      | username | password | message             |
      | Admin    | admin123 | OrangeHRM           |
      | Adminss  | admin123 | Invalid credentials |
      | Adminss  | admin123 | Invalid credentials |
