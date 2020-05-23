package runner;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = false, 
//		features = "src/test/java/features/ZP",
		features = { "src/test/java/features/ZP/Register_ZP_Scenario.feature" }, 
		format = { "pretty","html:target/site/cucumber-pretty",
					"json:target/json/cucumber.json" },
		glue = { "stepdefinations","utility" }
//		tags = {"@Chrome"}
)
@Test
public class Runner extends AbstractTestNGCucumberTests {

}