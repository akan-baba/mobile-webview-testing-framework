export class ComputerPages {

    appSelectors = {
        categoriesGear: '//android.widget.Button[@text="CATEGORIES"]',
        computers: '(//android.view.View[@content-desc="Computers"])[1]',
        desktops:'//android.widget.TextView[@text="Desktops"]',
        addToCart1:'//android.widget.Button[@text="ADD TO CART"]',
        ram:"//*[@class = 'android.view.View' and (@text = 'RAM ' or . = 'RAM ')]",
        hdd: "//*[@class = 'android.widget.RadioButton' and (@text = '320 GB' or . = '320 GB') and @resource-id = 'product_attribute_3_6']",
        addToCart2:"//*[@class = 'android.widget.Button' and (@text = 'ADD TO CART' or . = 'ADD TO CART') and @resource-id = 'add-to-cart-button-1']",
        shoppingCart:'//android.widget.TextView[@text="SHOPPING CART"]',
        agree:'//android.widget.CheckBox[@resource-id="termsofservice"]',
        checkOutButton:'//android.widget.Button[@resource-id="checkout"]'

    }

    async categoriesGear() {await $(this.appSelectors.categoriesGear)}
    async computers() {await $(this.appSelectors.computers)}
    async desktops() {await $(this.appSelectors.desktops)}
    async addToCart1() {await $(this.appSelectors.addToCart1)}
    async hdd() {await $(this.appSelectors.hdd)}
    async addToCart2() {await $(this.appSelectors.addToCart2)}
    async shoppingCart() {await $(this.appSelectors.shoppingCart)}
    async agree() {await $(this.appSelectors.agree)}
    async checkOutButton() {await $(this.appSelectors.checkOutButton)}
  
}