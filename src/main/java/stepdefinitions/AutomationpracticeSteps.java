package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class AutomationpracticeSteps {

	@Given("^User is on the homepage of Automation practices website$")
	public void user_is_on_the_homepage_of_Automation_practices_website() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String pagetitle = Hooks.driver.getTitle();
		String expectedtitle = "My Store";
		Assert.assertEquals(expectedtitle, pagetitle);

	}

	@Then("^User clicks Sign In button$")
	public void user_clicks_Sign_In_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//a[@title='Log in to your customer account']")).click();

	}

	@Then("^User enters a valid \"([^\"]*)\" in the account box$")
	public void user_enters_a_valid_in_the_account_box(String email) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.id("email_create")).clear();
		Hooks.driver.findElement(By.id("email_create")).sendKeys(email.trim());

	}

	@Then("^User clicks on Create an Account button$")
	public void user_clicks_on_Create_an_Account_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.id("SubmitCreate")).click();

	}

	@Then("^User is navigated to the registration page$")
	public void user_is_navigated_to_the_registration_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String pagetitle = Hooks.driver.getTitle();
		String expectedtitle = "Login - My Store";
		Assert.assertEquals(expectedtitle, pagetitle);

	}

	@Then("^User selects \"([^\"]*)\" radiobox$")
	public void user_selects_radiobox(String title) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if (title.trim().contains("Mr.")) {
			Hooks.driver.findElement(By.id("id_gender1")).click();
		} else {
			Hooks.driver.findElement(By.id("id_gender2")).click();
		}
	}

	@Then("^User enters firstname \"([^\"]*)\"$")
	public void user_enters_firstname(String firstname) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='customer_firstname']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='customer_firstname']")).sendKeys(firstname.trim());
		Hooks.driver.findElement(By.xpath("//input[@id='firstname']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='firstname']")).sendKeys(firstname.trim());
	}

	@Then("^User enters lastname \"([^\"]*)\"$")
	public void user_enters_lastname(String lastname) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='customer_lastname']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='customer_lastname']")).sendKeys(lastname.trim());
		Hooks.driver.findElement(By.xpath("//input[@id='lastname']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='lastname']")).sendKeys(lastname.trim());
	}

	@Then("^User enter password \"([^\"]*)\"$")
	public void user_enter_password(String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='passwd']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password.trim());

	}

	@Then("^User selects date \"([^\"]*)\" , month \"([^\"]*)\" and year \"([^\"]*)\" of birth$")
	public void user_selects_date_month_and_year_of_birth(String day, String month, String year) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		WebElement dayloc = Hooks.driver.findElement(By.xpath("//select[@id='days']"));
		Select daydrop = new Select(dayloc);
		daydrop.selectByValue(day.trim());
		WebElement monthloc = Hooks.driver.findElement(By.xpath("//select[@id='months']"));
		Select monthdrop = new Select(monthloc);
		String month2= month.trim();
		String months[]= {"January","February","March","April","May","June","July","August","September","October","November","December"};
		int value=0;
		for(int i=0;i<=months.length;i++)
		{
			if(month2.equals(months[i]))
			{
				value=i+1;
				break;
			}
		}
		monthdrop.selectByValue(Integer.toString(value));
		WebElement yearloc = Hooks.driver.findElement(By.xpath("//select[@id='years']"));
		Select yeardrop = new Select(yearloc);
		yeardrop.selectByValue(year.trim());

	}

	@Then("^User enters address \"([^\"]*)\"$")
	public void user_enters_address(String address) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='address1']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='address1']")).sendKeys(address.trim());
	}

	@Then("^User enters city \"([^\"]*)\"$")
	public void user_enters_city(String city) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='city']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='city']")).sendKeys(city.trim());
	}

	@Then("^User selects country \"([^\"]*)\"$")
	public void user_selects_country(String country) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement countryloc = Hooks.driver.findElement(By.xpath("//select[@id='id_country']"));
		Select item = new Select(countryloc);
		item.selectByVisibleText(country.trim());

	}

	@Then("^User selects state \"([^\"]*)\"$")
	public void user_selects_state(String state) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement stateloc = Hooks.driver.findElement(By.xpath("//select[@id='id_state']"));
		Select item = new Select(stateloc);
		item.selectByVisibleText(state.trim());
	}

	@Then("^User enters postal code \"([^\"]*)\"$")
	public void user_enters_postal_code(String postalcode) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='postcode']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='postcode']")).sendKeys(postalcode.trim());

	}

	@Then("^User enters mobile phone \"([^\"]*)\"$")
	public void user_enters_mobile_phone(String phone) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.xpath("//input[@id='phone_mobile']")).clear();
		Hooks.driver.findElement(By.xpath("//input[@id='phone_mobile']")).sendKeys(phone.trim());

	}

	@Then("^User clicks on Register button$")
	public void user_clicks_on_Register_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Hooks.driver.findElement(By.id("submitAccount")).click();

	}

	@Then("^User should be registered successfully$")
	public void user_should_be_registered_successfully() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		String pagetitle = Hooks.driver.getTitle();
		System.out.println(pagetitle);
		String expectedtitle = "My account - My Store";
		Assert.assertEquals(expectedtitle, pagetitle);

	}

}
