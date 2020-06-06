$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GETPosts.feature");
formatter.feature({
  "line": 1,
  "name": "Verify different GET operations using Rest-assured",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured",
  "keyword": "Feature"
});
formatter.before({
  "duration": 613661381,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify one author on the post",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-one-author-on-the-post",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I perform GET operation for \"/posts\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform GET for the post number \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I should see the author name as \"hieutran\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/posts",
      "offset": 29
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_GET_operation_for(String)"
});
formatter.result({
  "duration": 744689392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_GET_for_the_post_number(String)"
});
formatter.result({
  "duration": 389725602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hieutran",
      "offset": 33
    }
  ],
  "location": "TC_RestAssuredSteps.i_should_see_the_author_name_as(String)"
});
formatter.result({
  "duration": 30467698,
  "status": "passed"
});
formatter.before({
  "duration": 2556843,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify ContainsCollection",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-containscollection",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I perform GET operation for \"/posts\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see the author names",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/posts",
      "offset": 29
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_GET_operation_for(String)"
});
formatter.result({
  "duration": 18914243,
  "status": "passed"
});
formatter.match({
  "location": "TC_RestAssuredSteps.i_should_see_the_author_names()"
});
formatter.result({
  "duration": 45837551,
  "status": "passed"
});
formatter.before({
  "duration": 2067050,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Parameter of get",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-parameter-of-get",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I perform GET operation for \"/posts\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should see verify Parameter of get",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/posts",
      "offset": 29
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_GET_operation_for(String)"
});
formatter.result({
  "duration": 15970625,
  "status": "passed"
});
formatter.match({
  "location": "TC_RestAssuredSteps.i_should_see_verify_Parameter_of_get()"
});
formatter.result({
  "duration": 41238662,
  "status": "passed"
});
formatter.before({
  "duration": 2161605,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify QueryParameter",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-queryparameter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I perform GET operation for \"/posts\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should see verify query Parameter",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/posts",
      "offset": 29
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_GET_operation_for(String)"
});
formatter.result({
  "duration": 10856610,
  "status": "passed"
});
formatter.match({
  "location": "TC_RestAssuredSteps.i_should_see_verify_query_Parameter()"
});
formatter.result({
  "duration": 32948587,
  "status": "passed"
});
});