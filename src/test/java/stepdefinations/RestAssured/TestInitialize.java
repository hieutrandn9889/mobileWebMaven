package stepdefinations.RestAssured;

import cucumber.api.java.Before;
import commons.RestAssuredExtension;

public class TestInitialize {

    @Before
    public void TestSetup(){
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension();
    }
}