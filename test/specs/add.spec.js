import LoginPage from '../pageobjects/login.page'

describe ('intentando continuar', ()=>{
    beforeAll( 'open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('haciendo login', async ()=>{
        await LoginPage.login('standard_user', 'secret_sauce')
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
    
})