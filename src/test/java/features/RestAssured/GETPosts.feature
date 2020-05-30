Feature: Verify different GET operations using Rest-assured

  Scenario: Verify one author on the post
    Given I perform GET operation for "/posts"
    And I perform GET for the post number "1"
    Then I should see the author name as "hieutran"
    
  Scenario: Verify ContainsCollection
    Given I perform GET operation for "/posts"
		Then I should see the author names
		
	Scenario: Verify Parameter of get
    Given I perform GET operation for "/posts"
		Then I should see verify Parameter of get
		
	Scenario: Verify QueryParameter
    Given I perform GET operation for "/posts"
		Then I should see verify query Parameter