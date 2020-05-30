package stepdefinations.RestAssured;

import static org.junit.Assert.assertThat;

import commons.RestAssuredExtension;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import static org.hamcrest.Matchers.hasItem;

public class TC_RestAssuredSteps{
	private static ResponseOptions<Response> response;

	@Given("^I perform GET operation for \"([^\"]*)\"$")
	public void i_perform_GET_operation_for(String url) throws Throwable {
		response = RestAssuredExtension.GetOps(url);
	}
	@And("^I perform GET for the post number \"([^\"]*)\"$")
	public void i_perform_GET_for_the_post_number(String postNumber) {
		BDDStyledMethod.SimpleGetPost(postNumber);
	}
	
	@Then("^I should see the author name as \"([^\"]*)\"$")
	public void i_should_see_the_author_name_as(String authorName) throws Throwable {
	  assertThat(response.getBody().jsonPath().get("author"), hasItem("hieutran"));
	}
	
	@Then("^I should see the author names$")
	public void i_should_see_the_author_names() throws Throwable {
		BDDStyledMethod.PerformContainsCollection();
	}
	
	@Then("^I should see verify Parameter of get$")
	public void i_should_see_verify_Parameter_of_get() throws Throwable {
		BDDStyledMethod.PerformPathParameter();
	}
	
	@Then("^I should see verify query Parameter$")
	public void i_should_see_verify_query_Parameter() throws Throwable {
		BDDStyledMethod.PerformQueryParameter();
	}
	
}