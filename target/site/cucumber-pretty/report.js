$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/ZP/Register_ZP_Scenario.feature");
formatter.feature({
  "line": 1,
  "name": "Register to ZingPoll",
  "description": "I want to registered successfull",
  "id": "register-to-zingpoll",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register with empty new user",
  "description": "",
  "id": "register-to-zingpoll;register-with-empty-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on ZingPoll website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click the SignIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I input username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "register-to-zingpoll;register-with-empty-new-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "register-to-zingpoll;register-with-empty-new-user;;1"
    },
    {
      "cells": [
        "hieutrandn01@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "register-to-zingpoll;register-with-empty-new-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1931650699,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register with empty new user",
  "description": "",
  "id": "register-to-zingpoll;register-with-empty-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on ZingPoll website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click the SignIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I input username hieutrandn01@gmail.com and password 123456",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TC_RegisterPageSteps_ZP.i_am_on_ZingPoll_website()"
});
formatter.result({
  "duration": 5147955750,
  "status": "passed"
});
formatter.match({
  "location": "TC_RegisterPageSteps_ZP.i_click_the_SignIn_button()"
});
formatter.result({
  "duration": 6678644601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hieutrandn01@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 53
    }
  ],
  "location": "TC_RegisterPageSteps_ZP.i_input_username_and_password(String,String)"
});
formatter.result({
  "duration": 4467019007,
  "status": "passed"
});
formatter.after({
  "duration": 198718675,
  "status": "passed"
});
formatter.before({
  "duration": 26093440784,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register with empty new user",
  "description": "",
  "id": "register-to-zingpoll;register-with-empty-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@AndroidProxi"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I checked the proxi",
  "keyword": "Given "
});
formatter.match({
  "location": "TC_RegisterPageSteps_Proxi.i_am_on_ZingPoll_website()"
});
formatter.result({
  "duration": 7684058,
  "status": "passed"
});
});r: /var/folders/tk/n830l4tn21g...}, goog:chromeOptions: {debuggerAddress: localhost:50524}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7e7b088c846f0bd2d3664a8b0aaa391d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027loginEmail\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat commons.AutomationControl.findElement(AutomationControl.java:12)\n\tat commons.AbstractPage.type(AbstractPage.java:38)\n\tat ZP_pages.ZingPoll_HomePage.typeIntoEmail(ZingPoll_HomePage.java:33)\n\tat stepdefinations.ZP.TC_RegisterPageSteps_ZP.i_input_username_and_password(TC_RegisterPageSteps_ZP.java:41)\n\tat ✽.Then I input username hieutrandn01@gmail.com and password 123456(src/test/java/features/ZP/Register_ZP_Scenario.feature:8)\n",
  "status": "failed"
});
formatter.after({
  "duration": 132572070,
  "status": "passed"
});
formatter.before({
  "duration": 18745955890,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register with empty new user",
  "description": "",
  "id": "register-to-zingpoll;register-with-empty-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@AndroidProxi"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I checked the proxi",
  "keyword": "Given "
});
formatter.match({
  "location": "TC_RegisterPageSteps_Proxi.i_am_on_ZingPoll_website()"
});
formatter.result({
  "duration": 8907179,
  "status": "passed"
});
});