class LoginPage {
    //getters
    get inputUserName() { return $('#user-name')}
    get InputPassword () { return $('#password')}
    get BtnLogin() { return $('#login-button')}
    get ErrContainer() { return $('.error-message-container.error')}
    get btnAddToCart() { return $('#add-to-cart-sauce-labs-backpack')}
    /* aca tenemos el numero de cantidad del carrito #shopping_cart_container  */
    get Cart() { return $('#shopping_cart_container')}
    get secondProduct() { return $('#add-to-cart-sauce-labs-bike-light')}
    get thirdProduct() { return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get btMain() { return $('#react-burger-menu-btn')}
    get btnLogout () { return $('#logout_sidebar_link')} //btn logout
    get fourthProduct () { return $('#add-to-cart-sauce-labs-fleece-jacket')}
    get fifthProduct() { return $('#add-to-cart-sauce-labs-onesie')}
    get sixthProduct () { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')} 
    get firstRemove () { return $('#remove-sauce-labs-backpack')}
    get secondRemove() { return $('#remove-sauce-labs-bike-light')}
    get thirdRemove() { return $('#remove-sauce-labs-bolt-t-shirt')}
    get fourthRemove () { return $('#remove-sauce-labs-fleece-jacket')}
    get fifthRemove () {return $('#remove-sauce-labs-onesie')}
    //setters
    async setUserName(username) {
        await this.inputUserName.setValue(username)
    }
    async setPassword (password) {
        await this.InputPassword.setValue(password)
    }
    //metodos
    async login (username, password) {
        await this.setUserName(username)
        await this.setPassword (password)
        await this.BtnLogin.click()
    }
    async selectProduct (){
        await this.btnAddToCart.click()
    }
    async selectSecodProduct(){
        await this.secondProduct.click()
    }
    async selectThirdProduct(){
        await this.thirdProduct.click()
    }
    async selectFourthProduct(){
        await this.fourthProduct.click()
    }
    async selectFifthProduct(){
        await this.fifthProduct.click()
    }
    async selectSixthProduct(){
        await this.sixthProduct.click()
    }
    async goToCart (){
        await this.Cart.click()
    }
    async Logout(){
       await this.btMain.click()
       await this.btnLogout.click()
    }
}
export default new LoginPage()