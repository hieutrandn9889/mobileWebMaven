Feature: Verify different GET operations using Rest-assured

  Scenario: Verify one author on the post
    Given I perform GET operation for "/post"
    And I perform GET for the post number "1"