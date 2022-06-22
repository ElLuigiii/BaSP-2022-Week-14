import LoginPage from '../pageobjects/login.page'
import MainPage from '../pageobjects/main.page'

describe ('Purchasing process', ()=>{
    beforeAll( 'open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('Logging', async ()=>{
        await LoginPage.login('standard_user', 'secret_sauce')
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
    it ('View the first product', async ()=>{
        await MainPage.firstProduct.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    })
    it('Add to cart from there', async ()=>{
        await MainPage.addToCart()
        await expect(LoginPage.Cart).toHaveText('1')
    })
    it('Remove from cart from there', async ()=>{
        await MainPage.deleteFirstProduct()
        await expect(LoginPage.Cart).toHaveText('')
    })
     it ('Go to Main Page',  async ()=>{
        await MainPage.goToBack()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Add back to cart from there', async ()=>{
        await MainPage.addToCart()
        await expect(LoginPage.Cart).toHaveText('1')
    })
    it ('Buy from there', async ()=>{
        await LoginPage.Cart.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    })
    it ('Press btn checkout', async ()=>{
        await MainPage.checkout.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    })
    it ('Confirm purchase', async ()=>{
        await MainPage.checkInfo('Luis', 'Alvarez', '12900')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    })
    it ('Press button to confirm purchase', async ()=>{
        await MainPage.btnConfirm.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    })
})