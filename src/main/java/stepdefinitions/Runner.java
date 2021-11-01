package stepdefinitions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/main/java/features" }, glue = { "stepdefinitions" }, monochrome = true, tags = {
		"@airasia, @travel, @automation_practice"}, plugin = { "pretty", "html:target/cucumber",
				"json: target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter: target/report.html" })

public class Runner extends AbstractTestNGCucumberTests {

}
