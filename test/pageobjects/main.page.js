

class MainPage {
    //getters
get firstProduct() { return $('#item_4_title_link')}
get btnBackProducts () { return $('#back-to-products')}
get btnAddproduct () { return $('#add-to-cart-sauce-labs-backpack')}
get deleteProductOne (){ return $('#remove-sauce-labs-backpack')}    
//setters

    //metodos
    async goToBack () {
     await this.btnBackProducts.click()
    }
    async addToCart (){
        await this.btnAddproduct.click()
    }
    async deleteFirstProduct(){
        await this.deleteProductOne.click()
    }
}
export default new MainPage()