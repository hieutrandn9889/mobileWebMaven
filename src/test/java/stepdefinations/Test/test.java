package stepdefinations.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class test {
	@Given("^I hello worldaa$")
	public void i_hello_worldaa() throws Throwable {
		System.out.println("hello2");
	}

	@When("^I hello worldbb$")
	public void i_hello_worldbb() throws Throwable {
		System.out.println("hello2");
	}

	@Then("^I hello worldcc$")
	public void i_hello_worldcc() throws Throwable {
		System.out.println("hello2");
	}
}
