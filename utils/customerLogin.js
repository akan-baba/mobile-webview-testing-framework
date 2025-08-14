// utils/customCommands.js or similar
// utils/customCommands.js
module.exports = function () {
    browser.addCommand("userlogin", async function () {
    await $('//android.widget.TextView[@text="LOG IN"]').click();
    await $('//android.widget.EditText[@resource-id="Username"]').setValue('Jackeline82');
    await $('//android.widget.EditText[@resource-id="Password"]').setValue('red123');
    await $('//android.widget.Button[@text="LOG IN"]').click();
  });
    browser.addCommand("continueScroll", async function () {
    await browser.scrollUntilVisible('//android.widget.Button[@text="CONTINUE"]')
    await $('//android.widget.Button[@text="CONTINUE"]').click();

    await browser.scrollUntilVisible('//android.widget.Button[@text="CONTINUE"]')
    await $('//android.widget.Button[@text="CONTINUE"]').click()

    await browser.scrollUntilVisible('//android.widget.Button[@text="CONTINUE"]')
    await $('//android.widget.Button[@text="CONTINUE"]').click()
    
    await browser.scrollUntilVisible('//android.widget.Button[@text="CONTINUE"]')
    await $('//android.widget.Button[@text="CONTINUE"]').click()

    await browser.scrollUntilVisible('//android.widget.Button[@text="CONFIRM"]')
    await $('//android.widget.Button[@text="CONFIRM"]').click()

    await expect($('//android.view.View[@text="Your order has been successfully processed!"]')).toHaveText('Your order has been successfully processed!')
    await $('//android.widget.TextView[@text="LOG OUT"]').click()
  });

};

