package stepdefinations.RestAssured;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.is;

import commons.AbstractPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import io.restassured.http.ContentType;

public class TC_RestAssuredSteps extends AbstractPage {

	@Given("^I perform GET operation for \"([^\"]*)\"$")
	public void i_perform_GET_operation_for(String url) throws Throwable {
		given().contentType(ContentType.JSON);
	}
	@And("^I perform GET for the post number \"([^\"]*)\"$")
	public void i_perform_GET_for_the_post_number(String postNumber) {
		when().get(String.format("http://localhost:3000/posts/%s", postNumber)).
		then().body("author", is("hieutran"));
	}
	
	
	
}