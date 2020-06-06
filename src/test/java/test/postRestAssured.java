package test;

import org.junit.Assert;
import org.testng.annotations.Test;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;
import java.util.Map;


public class postRestAssured{
	
	@Test
	void test_01() {
		// show format MAP  {"name"=HieuTran, job=IT}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("\"name\"", "HieuTran");
		map.put("job", "IT");
		System.out.println(map);
	}
	
	void test_02() {
		// show json {"name"=HieuTran, job=IT}
		
	}
	
	
}