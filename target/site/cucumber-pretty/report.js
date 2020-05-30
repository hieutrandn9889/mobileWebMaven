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
  "duration": 607276111,
  "status": "passed"
});
formatter.before({
  "duration": 1561874323,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 81\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Trans-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:831:ed54:f009:fd6a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010f417789 chromedriver + 4671369\n1   chromedriver                        0x000000010f3b25d3 chromedriver + 4257235\n2   chromedriver                        0x000000010f05c00f chromedriver + 757775\n3   chromedriver                        0x000000010efbbfc9 chromedriver + 102345\n4   chromedriver                        0x000000010efb81fc chromedriver + 86524\n5   chromedriver                        0x000000010efe7403 chromedriver + 279555\n6   chromedriver                        0x000000010efe4213 chromedriver + 266771\n7   chromedriver                        0x000000010efbe21d chromedriver + 111133\n8   chromedriver                        0x000000010efbf1c5 chromedriver + 115141\n9   chromedriver                        0x000000010f3da03f chromedriver + 4419647\n10  chromedriver                        0x000000010f3e6cda chromedriver + 4472026\n11  chromedriver                        0x000000010f3e6a77 chromedriver + 4471415\n12  chromedriver                        0x000000010f3be189 chromedriver + 4305289\n13  chromedriver                        0x000000010f3e7587 chromedriver + 4474247\n14  chromedriver                        0x000000010f3cfdc7 chromedriver + 4378055\n15  chromedriver                        0x000000010f3fd7f4 chromedriver + 4564980\n16  chromedriver                        0x000000010f41d717 chromedriver + 4695831\n17  libsystem_pthread.dylib             0x00007fff6a5bc109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6a5b7b8b thread_start + 15\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utility.Hook.setUpChrome(Hook.java:39)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\n\tat org.testng.TestRunner.run(TestRunner.java:632)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\n\tat org.testng.TestNG.run(TestNG.java:1064)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "TC_RegisterPageSteps_ZP.i_click_the_SignIn_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 125454,
  "status": "passed"
});
formatter.before({
  "duration": 2933273,
  "status": "passed"
});
formatter.before({
  "duration": 51931915,
  "error_message": "java.lang.NullPointerException\n\tat utility.Hook.setUpBT(Hook.java:67)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\n\tat org.testng.TestRunner.run(TestRunner.java:632)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\n\tat org.testng.TestNG.run(TestNG.java:1064)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n",
  "status": "failed"
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
  "status": "skipped"
});
});