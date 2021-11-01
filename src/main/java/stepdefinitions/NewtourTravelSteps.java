package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class NewtourTravelSteps {

	@Given("^User is navigated to the homepage of the website$")
	public void user_is_navigated_to_the_homepage_of_the_website() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String pagetitle = Hooks.driver.getTitle();
		String expectedpgtitle = "Welcome: Mercury Tours";
		Assert.assertEquals(expectedpgtitle, pagetitle);
	}

	@Then("^User clicks on the register link$")
	public void user_clicks_on_the_register_link() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//tr/td[2]/a[contains(text(),'REGISTER')]")).click();

	}

	@Then("^User enters firstname as \"([^\"]*)\"$")
	public void user_enters_firstname_as(String firstname) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='firstName']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='firstName']")).sendKeys(firstname.trim());

	}

	@Then("^User enters lastname as \"([^\"]*)\"$")
	public void user_enters_lastname_as(String lastname) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='lastName']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='lastName']")).sendKeys(lastname.trim());

	}

	@Then("^User enters phone as \"([^\"]*)\"$")
	public void user_enters_phone_as(String phone) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='phone']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='phone']")).sendKeys(phone.trim());
	}

	@Then("^User enters email as \"([^\"]*)\"$")
	public void user_enters_email_as(String email) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='userName']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='userName']")).sendKeys(email.trim());

	}

	@Then("^User enters address as \"([^\"]*)\"$")
	public void user_enters_address_as(String address) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='address1']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='address1']")).sendKeys(address.trim());

	}

	@Then("^User enters city as \"([^\"]*)\"$")
	public void user_enters_city_as(String city) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='city']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='city']")).sendKeys(city.trim());

	}

	@Then("^User enters state as \"([^\"]*)\"$")
	public void user_enters_state_as(String state) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='state']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='state']")).sendKeys(state.trim());

	}

	@Then("^User enters postal code as \"([^\"]*)\"$")
	public void user_enters_postal_code_as(String postalcode) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='postalCode']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='postalCode']")).sendKeys(postalcode.trim());

	}

	@Then("^User selects country as \"([^\"]*)\"$")
	public void user_selects_country_as(String country) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement countryloc = Hooks.driver.findElement(By.xpath("//form//select[@name='country']"));
		Select item = new Select(countryloc);
		item.selectByVisibleText(country.toUpperCase());

	}

	@Then("^User enters username \"([^\"]*)\"$")
	public void user_enters_username(String username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='email']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='email']")).sendKeys(username.trim());

	}

	@Then("^User enters password \"([^\"]*)\"$")
	public void user_enters_password(String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='password']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='password']")).sendKeys(password.trim());

	}

	@Then("^User enters same \"([^\"]*)\" in confirm password field$")
	public void user_enters_same_in_confirm_password_field(String confpassword) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='confirmPassword']")).clear();
		Hooks.driver.findElement(By.xpath("//form//input[@name='confirmPassword']")).sendKeys(confpassword.trim());

	}

	@Then("^User clicks on Submit$")
	public void user_clicks_on_Submit() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//form//input[@name='register']")).click();
	}

	@Then("^user is registered successfully$")
	public void user_is_registered_successfully() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String pagetitle = Hooks.driver.getTitle();
		String expectedtitle = "Register: Mercury Tours";
		Assert.assertEquals(expectedtitle, pagetitle);

	}

}
