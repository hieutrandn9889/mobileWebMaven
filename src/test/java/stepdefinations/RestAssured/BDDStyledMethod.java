package stepdefinations.RestAssured;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasItem;

import io.restassured.http.ContentType;

public class BDDStyledMethod {
	
	public static void SimpleGetPost(String postNumber) {
		given()
			.contentType(ContentType.JSON)
		.when()
			.get(String.format("http://localhost:3000/posts/%s", postNumber)).
		then()
			.body("author", is("hieutran"));
	}
	public static void PerformContainsCollection() {
        given()
                .contentType(ContentType.JSON)
        .when()
                .get("http://localhost:3000/posts/")
        .then()
                .body("author", containsInAnyOrder("hieutran", "hieutran", null)).statusCode(200);
    }
	
	public static void PerformPathParameter() {
		given()
			.contentType(ContentType.JSON)
		.with()
			.pathParam("post", 1)
		.when()
			.get("http://localhost:3000/posts/{post}")
		.then()
		.body("author", containsString("hieutran"));
	}
	
	public static void PerformQueryParameter() {
		// http://localhost:3000/posts/?id=1
		given()
			.contentType(ContentType.JSON)
			.queryParam("id", 1)
		.when()
			.get("http://localhost:3000/posts/")
		.then()
		.body("author", hasItem("hieutran"));
	}
	
}