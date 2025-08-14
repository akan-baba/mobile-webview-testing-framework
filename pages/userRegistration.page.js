
export class UserRegistration {
   appSelectors = {
      registerationButton:"//*[@class = 'android.widget.TextView' and (@text = 'REGISTER' or . = 'REGISTER')]",
      genderCheckbox:'//android.widget.RadioButton[@resource-id="gender-male"]',
      firstNameField: '//android.widget.EditText[@resource-id="FirstName"]',
      lastNameField:'//android.widget.EditText[@resource-id="LastName"]',
      userNameField:'//android.widget.EditText[@resource-id="Username"]',
      emailField:'//android.widget.EditText[@resource-id="Email"]',
      addressField:'//android.widget.EditText[@resource-id="StreetAddress"]',
      postCodeField:'//android.widget.EditText[@resource-id="ZipPostalCode"]',
      regionField:'//android.widget.EditText[@resource-id="County"]',
      cityField:'//android.widget.EditText[@resource-id="City"]',
      phoneField:'//android.widget.EditText[@resource-id="Phone"]',
      passwordField:'//android.widget.EditText[@resource-id="Password"]',
      confirmPwdField:'//android.widget.EditText[@resource-id="ConfirmPassword"]',
      PPcheckBox:'//android.widget.CheckBox[@resource-id="accept-consent"]',
      registerButton:'//android.widget.Button[@resource-id="register-button"]',
      registrationSuccessful:'//android.widget.TextView[@text="Your registration completed"]',
      logOut:"//*[@class = 'android.widget.TextView' and (@text = 'LOG OUT' or . = 'LOG OUT')]"

    }
    
    async registerButton() {await $(this.appSelectors.registerationButton)}
    async genderCheckbox() {await $(this.appSelectors.genderCheckbox)}
    async firstName() {await $(this.appSelectors.firstNameField)}
    async lastName() {await $(this.appSelectors.lastNameField)}
    async userNameField() {await $(this.appSelectors.userNameField)}
    async emailField() {await $(this.appSelectors.emailField)}
    async addressField() {await $(this.appSelectors.addressField)}
    async postCodeField() {await $(this.appSelectors.postCodeField)}
    async regionField() {await $(this.appSelectors.regionField)}
    async cityField() {await $(this.appSelectors.cityField)}
    async phoneField() {await $(this.appSelectors.phoneField)}
    async passwordField() {await $(this.appSelectors.passwordField)}
    async confirmPwdField() {await $(this.appSelectors.confirmPwdField)}
    async PPcheckBox() {await $(this.appSelectors.PPcheckBox)}
    async registerButton() {await $(this.appSelectors.registerButton)}
    async registrationSuccessful() {await $(this.appSelectors.registrationSuccessful)}
    async logout() {await $(this.appSelectors.logOut)}
    
  }
  