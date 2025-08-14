import { UserRegistration } from "../../pages/userRegistration.page";
import { faker } from "@faker-js/faker";
const registerPage = new UserRegistration();
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const username = faker.internet.username();

describe("NopCommerce User Registration Flow", () => {
  before(async () => {
    // keep the app running across tests to avoid the fast open/close
    await driver.terminateApp("com.baba.nopcommerce");
    await driver.activateApp("com.baba.nopcommerce");
    await driver.pause(2000); // global implicit wait
  });

  it("Registration Form", async () => {
    await $(registerPage.appSelectors.registerationButton).click();
    await $(registerPage.appSelectors.genderCheckbox).click();
    await $(registerPage.appSelectors.firstNameField).setValue(firstname);
    await browser.scrollDown();
    await $(registerPage.appSelectors.lastNameField).setValue(lastname);
    await $(registerPage.appSelectors.emailField).setValue(email);
    await $(registerPage.appSelectors.userNameField).setValue(username);
    await $(registerPage.appSelectors.addressField).setValue('Moss Grange avenue');
    await browser.scrollDown();
    await $(registerPage.appSelectors.postCodeField).setValue('245688')
    await $(registerPage.appSelectors.regionField).setValue('Manchy')
    await $(registerPage.appSelectors.cityField).setValue('Manchester')
    await $(registerPage.appSelectors.phoneField).setValue('01612261085')
    await browser.scrollDown();
    await $(registerPage.appSelectors.passwordField).setValue('red123')
    await $(registerPage.appSelectors.confirmPwdField).setValue('red123')
    await $(registerPage.appSelectors.PPcheckBox).click()
    await $(registerPage.appSelectors.registerButton).click()
    await expect($(registerPage.appSelectors.registrationSuccessful)).toHaveText("Your registration completed");
    await $(registerPage.appSelectors.logOut).click()



  });
});
