package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class AirasiaSteps {
	
	JavascriptExecutor js = (JavascriptExecutor) Hooks.driver;  
	
	@Given("^User is navigated successfully to the website$")
	public void user_is_navigated_successfully_to_the_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		String pagetitle= Hooks.driver.getTitle();
		String expectedtitle= "Book Cheap Flights Online To Over 130 Destinations! | AirAsia";
		Assert.assertEquals(expectedtitle, pagetitle);
	    
	}

	@Given("^User clicks on the Flights Icon$")
	public void user_clicks_on_the_Flights_Icon() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//img[@class='aa-logo-image']")).click();
		Thread.sleep(2000);
	    
	}

	@Given("^User enters origin as \"([^\"]*)\"$")
	public void user_enters_origin_as(String origin) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement origindrop= Hooks.driver.findElement(By.xpath("//label[contains(text(),'Origin')]"));
    	js.executeScript("arguments[0].click();",origindrop);
    	WebElement originval= Hooks.driver.findElement(By.xpath("//span[contains(@class,'station-code') and text()='BLR']"));
    	originval.click();
    	Thread.sleep(1000);
	}

	@Given("^User enters destination as \"([^\"]*)\"$")
	public void user_enters_destination_as(String destination) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement destidrop= Hooks.driver.findElement(By.xpath("//label[contains(text(),'Destination')]"));
    	js.executeScript("arguments[0].click();",destidrop);
    	WebElement destival= Hooks.driver.findElement(By.xpath("//span[contains(@class,'station-code') and text()='PNQ']"));
    	destival.click();
    	Thread.sleep(1000);
	    
	}

	@Given("^User selects depart date as \"([^\"]*)\"$")
	public void user_selects_depart_date_as(String departdate) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='home-depart-date-heatmap']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='home-depart-date-heatmap']")).sendKeys(departdate);
	    
	}

	@Given("^User selects return date as \"([^\"]*)\"$")
	public void user_selects_return_date_as(String returndate) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(returndate.equalsIgnoreCase("One Way"))
		{
			Hooks.driver.findElement(By.xpath("//label[@for='trip-oneway']")).click();
		}
	    
	}

	@Given("^User clicks on Search button$")
	public void user_clicks_on_Search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//button[@id='home-flight-search-airasia-button-inner-button-select-flight-heatmap']")).click();
	    
	}

	@Then("^User should be navigated to the search flight page$")
	public void user_should_be_navigated_to_the_search_flight_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		String pagetitle= Hooks.driver.getTitle();
		String expectedtitle= "Bengaluru to Pune Flights | 1 Guest | Return Flight | NaN {6} | AirAsia";
		Assert.assertEquals(expectedtitle, pagetitle);
	    
	}

	@Given("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Hooks.driver.findElement(By.xpath("//span[contains(@class,'text-item') and text()=' Log in/Sign up ']")).click();
	}

	@Given("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Hooks.driver.findElement(By.xpath("//input[@id='username-input--login']")).sendKeys(username);
	}

	@Given("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='password-input--login']")).sendKeys(password);
	    
	}

	@Given("^User clicks on Sign In button$")
	public void user_clicks_on_Sign_In_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.id("loginbutton")).click();
	    
	}

	@Then("^Error message is displayed on screen in red and contains the text \"([^\"]*)\"$")
	public void error_message_is_displayed_on_screen_in_red_and_contains_the_text(String expected) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
    	WebElement errormessage=Hooks.driver.findElement(By.xpath("//div[@role='alert']"));
    	String color=errormessage.getCssValue("color");
    	System.out.println("RGBA color code: "+color);
    	String error=errormessage.getText();
    	Assert.assertTrue(error.contains(expected));
	}



}
