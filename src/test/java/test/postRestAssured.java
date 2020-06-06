package test;

import java.util.HashMap;
import java.util.Map;
import org.json.simple.JSONObject;
import org.testng.annotations.Test;
import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class postRestAssured{
	
	@Test
	void test_() {
		given()
			.get("https://reqres.in/api/users?page=2")
			.then()
			.statusCode(200)
			.body("data.id[1]", equalTo(8));
	}
	
	@Test
	void test_01() {
		// show format MAP  {"name"=HieuTran, job=IT}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("\"name\"", "HieuTran");
		map.put("job", "IT");
		System.out.println(map);
	}
	
	@Test
	void test_02_post() {
		// show json {"name"=HieuTran, job=IT}
		JSONObject request = new JSONObject();
		request.put("name","HieuTran");
		request.put("job","IT");
		System.out.println(request);
		System.out.println(request.toJSONString());
		
		given().header("Content-Type", "application/json")
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.body(request.toJSONString())
		.when().post("https://reqres.in/api/users")
		.then().statusCode(201);
		
	}
	
	@Test
	void test_03_put() {
		// show json {"name"=HieuTran, job=IT}
		JSONObject request = new JSONObject();
		request.put("name","HieuTran");
		request.put("job","IT");
		System.out.println(request);
		System.out.println(request.toJSONString());
		
		given().header("Content-Type", "application/json")
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.body(request.toJSONString())
		.when().put("https://reqres.in/api/users/2")
		.then().statusCode(200).log().all();
		
	}
	@Test
	void test_04_patch() {
		// show json {"name"=HieuTran, job=IT}
		JSONObject request = new JSONObject();
		request.put("name","HieuTran");
		request.put("job","IT");
		System.out.println(request);
		System.out.println(request.toJSONString());
		
		given().header("Content-Type", "application/json")
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.body(request.toJSONString())
		.when().patch("https://reqres.in/api/users/2")
		.then().statusCode(200).log().all();
		
	}
	
	@Test
	void test_05_delete() {
		when().delete("https://reqres.in/api/users/2")
		.then().statusCode(204).log().all();
		
	}
	
	@Test
	void test_06_post_localhost() {
		// show json {"firstName"=huyen, "lastName"=phan}
		JSONObject request = new JSONObject();
		request.put("firstName","huyen");
		request.put("lastName","phan");
		request.put("subjectId", 2);
		baseURI = "http://localhost:3000";
		
		given()
		.header("Content-Type", "application/json")
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.body(request.toJSONString())
		.when().post("/users")
		.then().statusCode(201).log().all();
		
	}
	
	@Test
	void test_07_patch_localhost() {
		// show json {"firstName"=huyen, "lastName"=phan}
		JSONObject request = new JSONObject();
		request.put("lastName","tran");

		baseURI = "http://localhost:3000";
		
		given()
		.header("Content-Type", "application/json")
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.body(request.toJSONString())
		.when().patch("/users/2")
		.then().statusCode(200).log().all();
		
	}
	
	@Test
	void test_08_put_localhost() {
		// show json {"firstName"=huyen, "lastName"=phan}
		JSONObject request = new JSONObject();
		request.put("firstName","huyen1");
		request.put("lastName","phan1");
		request.put("subjectId", 2);
		baseURI = "http://localhost:3000";
		
		given()
		.header("Content-Type", "application/json")
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.body(request.toJSONString())
		.when().put("/users/2")
		.then().statusCode(200).log().all();
		
	}
		
	@Test
	void test_09_delete_localhost() {
		baseURI = "http://localhost:3000";
		when().delete("/users/2")
		.then().statusCode(200).log().all();
		
	}
	
	
	
}