package test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import commons.Constants;

public class testDemo {
	WebDriver driver;
	String baseURL, nodeUrl;

	@BeforeTest
	public void setUp() throws MalformedURLException {
		System.setProperty("webdriver.chrome.driver", Constants.CHROME_PATH_MAC);
		baseURL = "http://demo.guru99.com/test/guru99home/";
//        nodeURL = "http://192.168.64.2:30001/wd/hub";
//        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
//        capabilities.setPlatform(Platform.WIN10);
//        ChromeOptions options = new ChromeOptions();
//        options.merge(capabilities);
//        driver = new RemoteWebDriver(new URL(nodeURL), options);

//        baseURL = "http://demo.guru99.com/test/guru99home/";
//        nodeURL = "http://192.168.64.2:30001/wd/hub";
//        DesiredCapabilities capability = DesiredCapabilities.chrome();
//        capability.setBrowserName("chrome");
//        capability.setPlatform(Platform.WIN10);
//        driver = new RemoteWebDriver(new URL(nodeURL), capability);

		nodeUrl = "http://192.168.64.2:30001/wd/hub";
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		capabilities.setPlatform(Platform.LINUX);
		driver = new RemoteWebDriver(new URL(nodeUrl), capabilities);
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(45, TimeUnit.SECONDS);

	}

	@Test
	public void sampleTest() {
		driver.get(baseURL);

		if (driver.getPageSource().contains("MOBILE TESTING")) {
			Assert.assertTrue(true, "Mobile Testing Link Found");
		} else {
			Assert.assertTrue(false, "Failed: Link not found");
		}

	}

	@AfterTest
	public void afterTest() {
		driver.quit();
	}

}
