Feature: Basic Book-Store

  Scenario: Start
    Given a book id 1 "The Hobbit" by "J.R.R. Tolkien" recommended at 5
    Given a book id 2 "The Lord Of The Rings" by "J.R.R. Tolkien" recommended at 14
    Given a book id 3 "It" by "Steven King" recommended at 16
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
