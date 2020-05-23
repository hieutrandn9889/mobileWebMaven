package stepdefinations.Proxi;

import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;
import commons.Constants;
import commons.AbstractTest;
import commons.LogEvent;
import cucumber.api.java.en.Given;
import utility.Hook;

public class TC_RegisterPageSteps_Proxi extends AbstractTest {
	WebDriver driver = Hook.getAppiumDriver();
	LogEvent LOG;

	@Given("^I checked the proxi$")
	public void i_am_on_ZingPoll_website() {
		System.out.println("tested");
		DOMConfigurator.configure(Constants.LOG4J);
		LOG = new LogEvent();
		LOG.info("Open the Home page");
	}
	
	
	
}