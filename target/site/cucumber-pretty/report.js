$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("restAssureScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Verify different GET operations using Rest-assured",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured",
  "keyword": "Feature"
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
  "name": "I perform GET operation for \"/post\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform GET for the post number \"1\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/post",
      "offset": 29
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_GET_operation_for(String)"
});
formatter.result({
  "duration": 562869207,
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
  "duration": 1059691983,
  "status": "passed"
});
});