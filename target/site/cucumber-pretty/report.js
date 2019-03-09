$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "hieutran",
  "description": "",
  "id": "hieutran",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "hieutest",
  "description": "",
  "id": "hieutran;hieutest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I hello worldaa",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I hello worldbb",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I hello worldcc",
  "keyword": "Then "
});
formatter.match({
  "location": "test.i_hello_worldaa()"
});
formatter.result({
  "duration": 94475696,
  "status": "passed"
});
formatter.match({
  "location": "test.i_hello_worldbb()"
});
formatter.result({
  "duration": 119282,
  "status": "passed"
});
formatter.match({
  "location": "test.i_hello_worldcc()"
});
formatter.result({
  "duration": 59088,
  "status": "passed"
});
});