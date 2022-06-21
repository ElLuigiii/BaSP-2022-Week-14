
import LoginPage from '../pageobjects/login.page'

describe ('prueba de login page', ()=> {
    beforeAll( 'open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it( 'response status', async ()=> {
        await browser.url('https://www.saucedemo.com/')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    } )
    it('Login error', async ()=>{
        await LoginPage.login('standard_use','secret_sauce')
        expect(LoginPage.ErrContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
        })
    it ('login succesfull' , async ()=> {
        await LoginPage.login('standard_user', 'secret_sauce')
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Select product ', async ()=>{
        await LoginPage.selectProduct()
        await expect(LoginPage.Cart).toHaveText('1')
    })
    it('select product 2', async ()=> {
        await LoginPage.selectSecodProduct()
        await expect(LoginPage.Cart).toHaveText('2')
    })
    it('select third product', async ()=> {
        await LoginPage.selectThirdProduct()
        await expect(LoginPage.Cart).toHaveText('3')
    })
    it('select Fourth product', async ()=> {
        await LoginPage.selectFourthProduct()
        await expect(LoginPage.Cart).toHaveText('4')
    })
    it ('select fifth product', async ()=>{
        await LoginPage.selectFifthProduct()
        await expect(LoginPage.Cart).toHaveText('5')
    })
    // it('select sixth product', async ()=>{
    //     await LoginPage.selectSixthProduct()
    //     await expect(LoginPage.Cart).toHaveText('6')
    // })
    /***********************
     CONFIGURAR SELECTOR DEL 6TO PRODUCTO
     **********************/
    it('remove product to cart in homepage', async() =>{
        await LoginPage.firstRemove.click()
        await expect(LoginPage.Cart).toHaveText('4')
    })
    it ('GO TO CART', async ()=>{
        await LoginPage.Cart.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    })
})
