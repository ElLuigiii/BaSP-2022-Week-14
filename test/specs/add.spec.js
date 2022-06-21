import LoginPage from '../pageobjects/login.page'
import MainPage from '../pageobjects/main.page'

describe ('intentando continuar', ()=>{
    beforeAll( 'open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('haciendo login en coso pum', async ()=>{
        await LoginPage.login('standard_user', 'secret_sauce')
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
    it ('visualizar el primer producto', async ()=>{
        await MainPage.firstProduct.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    })
    it('agregar al carrito desde ahi', async ()=>{
        await MainPage.addToCart()
        await expect(LoginPage.Cart).toHaveText('1')
    })
    it('eliminar del carrito desde ahi', async ()=>{
        await MainPage.deleteFirstProduct()
        await expect(LoginPage.Cart).toHaveText('')
    })
    it ('go to MainPage',  async ()=>{
        await MainPage.goToBack()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})