package test;

import org.junit.Assert;
import org.testng.annotations.Test;
import io.restassured.response.*;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;


public class getRestAssured{
	
	@Test
	void test_01() {
		Response response = get("http://localhost:3000/posts/?id=1");
		System.out.println("1");
		System.out.println(response.asString());
		System.out.println("2");
		System.out.println(response.getBody().asString());
		System.out.println("3");
		System.out.println(response.getStatusCode());
		System.out.println("4");
		System.out.println(response.getStatusLine());
		System.out.println("5");
		System.out.println(response.getHeader("content-type"));
		System.out.println("6");
		System.out.println(response.getTime());
		
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
	}
	
	@Test
	void test_02() {
		given()
			.get("http://localhost:3000/posts/?id=1")
			.then()
			.statusCode(200)
			.body("id[0]", equalTo(1));
	}
	
	@Test
	void test_03() {
		given()
			.get("http://localhost:3000/posts/?id=1")
			.then()
			.statusCode(200)
			.body("title", hasItems("Selenium by hieutran"));
	}
}