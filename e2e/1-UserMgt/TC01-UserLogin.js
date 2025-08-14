import { UserLogin } from "../../pages/userLogin";
const loginPage = new UserLogin();

describe("User login", () => {
  beforeEach(async () => {
    // keep the app running across tests to avoid the fast open/close
    await driver.terminateApp("com.baba.nopcommerce");
    await driver.activateApp("com.baba.nopcommerce");
    await driver.pause(1000); // global implicit wait
  });
  it("User login page with valid credentials", async () => {
    await $(loginPage.appSelectors.loginLink).click()
    await $(loginPage.appSelectors.usernameField).setValue('Meagan27')
    await $(loginPage.appSelectors.passwordField).setValue('red123')
    await $(loginPage.appSelectors.loginButton).click()
    await $(loginPage.appSelectors.logoutButton).click()
  });

  it("User login page with invalid credentials", async () => {
    await $(loginPage.appSelectors.loginLink).click()
    await $(loginPage.appSelectors.usernameField).setValue('Me27')
    await $(loginPage.appSelectors.passwordField).setValue('red123')
    await $(loginPage.appSelectors.loginButton).click()
    await expect($(loginPage.appSelectors.errorMessage)).toHaveText("No customer account found")
    
  });


});
