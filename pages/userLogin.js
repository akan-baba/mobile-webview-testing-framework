export class UserLogin {
    appSelectors = {
       loginLink:'//android.widget.TextView[@text="LOG IN"]',
       usernameField:"//*[@class = 'android.widget.EditText' and @resource-id = 'Username' and (@text = '' or . = '')]",
       passwordField:'//android.widget.EditText[@resource-id="Password"]',
       loginButton:'//android.widget.Button[@text="LOG IN"]',
       forgotPwdlink:'//android.widget.TextView[@text="Forgot password?"]',
       logoutButton:"//*[@class = 'android.widget.TextView' and (@text = 'LOG OUT' or . = 'LOG OUT')]",
       errorMessage:'//android.view.View[@text="No customer account found"]'
            
 
     }
     
    
     async loginLink() {await $(this.appSelectors.loginLink)}
     async usernameField() {await $(this.appSelectors.usernameField)}
     async passwordField() {await $(this.appSelectors.passwordField)}
     async loginButton() {await $(this.appSelectors.loginButton)}
     async forgotPwdlink() {await $(this.appSelectors.forgotPwdlink)}
     async logoutButton() {await $(this.appSelectors.logoutButton)}
     async errorMessage() {await $(this.appSelectors.errorMessage)}
}