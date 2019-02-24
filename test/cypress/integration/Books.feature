Feature: Basic Book-Store

  Scenario: Start
    Given the following books:
      | id | author         | title                 | recommendedReadingAge |
      | 1  | J.R.R. Tolkien | The Hobbit            | 5                     |
      | 2  | J.R.R. Tolkien | The Lord Of The Rings | 14                    |
      | 3  | Steven King    | It                    | 16                    |
    When I go home
    Then I'm home

  Scenario: Increment Counter
    Given I'm home
    And the counter is 0
    When I click on counter-up
    Then the counter is 1

  Scenario: Add 'x' to author
    Given I'm home
    And it contains the book "J.R.R. Tolkien: The Lord Of The Rings"
    When I click on book-up 2
    Then it contains the book "J.R.R. Tolkienx: The Lord Of The Rings"

  Scenario: Go to book
    Given I'm home
    And it contains the book "J.R.R. Tolkienx: The Lord Of The Rings"
    When I click on "J.R.R. Tolkienx: The Lord Of The Rings"
    Then I'm on book id 2

  Scenario: Counter 2
    Given I'm on book id 2
    And the counter is 1
    When I click on counter-up
    Then the counter is 2

  Scenario: Go Back
    Given I'm on "/books/2"
    And the counter is 2
    When I click on "Back To List"
    Then I'm home
    And the counter is 2
    And it contains the book "J.R.R. Tolkienx: The Lord Of The Rings"
