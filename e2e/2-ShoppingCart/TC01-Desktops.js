import { ComputerPages } from "../../pages/computerPages";
const computer = new ComputerPages();

describe("Computer Shopping Cart", () => {
  before(async () => {
    // keep the app running across tests to avoid the fast open/close
    await driver.terminateApp("com.baba.nopcommerce");
    await driver.activateApp("com.baba.nopcommerce");
    await driver.pause(2000);
    await browser.userlogin() // global implicit wait
  });

  it("should add a desktop computer to the cart", async () => {
    // Navigate through categories
    await $(computer.appSelectors.categoriesGear).click();
    await $(computer.appSelectors.computers).click();
  
    // Scroll until "Desktops" is visible and click
    await browser.scrollUntilVisible(computer.appSelectors.desktops);
    const desktopsEl = await $(computer.appSelectors.desktops);
    await desktopsEl.waitForDisplayed({ timeout: 5000 });
    await desktopsEl.click();
  
    // Scroll until "Add to Cart" is visible and click
    await browser.scrollUntilVisible(computer.appSelectors.addToCart1);
    const addToCartEl = await $(computer.appSelectors.addToCart1);
    await addToCartEl.waitForDisplayed({ timeout: 5000 });
    await addToCartEl.click();

    await browser.scrollUntilVisible('//android.widget.EditText[@resource-id="product_enteredQuantity_1"]')
    const quantity = await $('//android.widget.EditText[@resource-id="product_enteredQuantity_1"]')
    await quantity.waitForDisplayed({timeout:5000})
    await quantity.setValue('10000')
    
    await browser.scrollUntilVisible(computer.appSelectors.addToCart2);
    const addToCart = await $(computer.appSelectors.addToCart2);
    await addToCart.waitForDisplayed({ timeout: 5000 });
    await addToCart.click();

    await browser.scrollUpUntilVisible(computer.appSelectors.shoppingCart);
    const shoppingCart = await $(computer.appSelectors.shoppingCart);
    await shoppingCart.waitForDisplayed({ timeout: 5000 });
    await shoppingCart.click();

    await browser.scrollUntilVisible(computer.appSelectors.agree);
    await $(computer.appSelectors.agree).click();

    await browser.scrollUntilVisible(computer.appSelectors.checkOutButton);
    await $(computer.appSelectors.checkOutButton).click();

    await browser.continueScroll()
    
  });
  
  
  
  
});
