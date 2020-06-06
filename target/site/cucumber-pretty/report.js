$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GETPosts.feature");
formatter.feature({
  "line": 1,
  "name": "Verify different GET operations using Rest-assured",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured",
  "keyword": "Feature"
});
formatter.before({
  "duration": 624551041,
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
  "duration": 659038526,
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
  "duration": 375602705,
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
  "duration": 35177579,
  "status": "passed"
});
formatter.before({
  "duration": 3132632,
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
  "duration": 18436878,
  "status": "passed"
});
formatter.match({
  "location": "TC_RestAssuredSteps.i_should_see_the_author_names()"
});
formatter.result({
  "duration": 50425636,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path author doesn\u0027t match.\nExpected: iterable over [\"hieutran\", \"hieutran\", null] in any order\n  Actual: [hieutran, hieutran, hieutran, hieutran1]\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:275)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:258)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:274)\n\tat stepdefinations.RestAssured.BDDStyledMethod.PerformContainsCollection(BDDStyledMethod.java:32)\n\tat stepdefinations.RestAssured.TC_RestAssuredSteps.i_should_see_the_author_names(TC_RestAssuredSteps.java:32)\n\tat ✽.Then I should see the author names(GETPosts.feature:10)\n",
  "status": "failed"
});
formatter.before({
  "duration": 2645567,
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
  "duration": 12132062,
  "status": "passed"
});
formatter.match({
  "location": "TC_RestAssuredSteps.i_should_see_verify_Parameter_of_get()"
});
formatter.result({
  "duration": 44474676,
  "status": "passed"
});
formatter.before({
  "duration": 3087825,
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
  "duration": 13348411,
  "status": "passed"
});
formatter.match({
  "location": "TC_RestAssuredSteps.i_should_see_verify_query_Parameter()"
});
formatter.result({
  "duration": 32866958,
  "status": "passed"
});
formatter.before({
  "duration": 2096344,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify post operation",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-post-operation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I perform POST operation for \"/posts\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "/posts",
      "offset": 30
    }
  ],
  "location": "TC_RestAssuredSteps.i_perform_POST_operation_for(String)"
});
formatter.result({
  "duration": 565342337,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nXML path author doesn\u0027t match.\nExpected: a string containing \"hieutran1\"\n  Actual: Error: Insert failed, duplicate id\n    at Function.insert (/usr/local/lib/node_modules/json-server/node_modules/lodash-id/src/index.js:49:18)\n    at /usr/local/lib/node_modules/json-server/node_modules/lodash/lodash.js:4368:28\n    at arrayReduce (/usr/local/lib/node_modules/json-server/node_modules/lodash/lodash.js:683:21)\n    at baseWrapperValue (/usr/local/lib/node_modules/json-server/node_modules/lodash/lodash.js:4367:14)\n    at LodashWrapper.wrapperValue (/usr/local/lib/node_modules/json-server/node_modules/lodash/lodash.js:9050:14)\n    at create (/usr/local/lib/node_modules/json-server/lib/server/router/plural.js:237:48)\n    at Layer.handle [as handle_request] (/usr/local/lib/node_modules/json-server/node_modules/express/lib/router/layer.js:95:5)\n    at next (/usr/local/lib/node_modules/json-server/node_modules/express/lib/router/route.js:137:13)\n    at next (/usr/local/lib/node_modules/json-server/node_modules/express/lib/router/route.js:131:14)\n    at Route.dispatch (/usr/local/lib/node_modules/json-server/node_modules/express/lib/router/route.js:112:3)\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:275)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:258)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:274)\n\tat stepdefinations.RestAssured.BDDStyledMethod.PerformPostWithBodyParameter(BDDStyledMethod.java:72)\n\tat stepdefinations.RestAssured.TC_RestAssuredSteps.i_perform_POST_operation_for(TC_RestAssuredSteps.java:48)\n\tat ✽.Given I perform POST operation for \"/posts\"(GETPosts.feature:21)\n",
  "status": "failed"
});
});