package com.damienfremont.blog;

import org.apache.log4j.pattern.LogEvent;
import org.apache.log4j.xml.DOMConfigurator;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
public class StepDefinitions {
	
	LogEvent LOG;

		@Given("^I hello worldaa")
		public void i_am_on_ZingPoll_website() {
			System.out.println("hello1");	
	
		}

		@Then("^I hello worldbb")
		public void i_click_the_SignIn_button() throws InterruptedException{
			System.out.println("hello2");
			
		}
		
		@Then("^I hello worldcc")
		public void i_input_username_and_password() throws Throwable {
			System.out.println("hello3");
		}
		
		@Given("^I hello world1")
		public void i_am_on_ZingPoll_website1() {
			System.out.println("hello4");

		}

		@Then("^I hello world2")
		public void i_click_the_SignIn_button2() throws InterruptedException{
			System.out.println("hello5");
		}
		
		@Then("^I hello world3")
		public void i_input_username_and_password3() throws Throwable {
			System.out.println("hello6");
		}
		
	
}
