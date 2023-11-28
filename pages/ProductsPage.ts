import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductsPage extends BasePage {

    private itemDescElement: Locator;
    private shoppingCartElement: Locator;

    constructor(protected page: Page) {
        super(page);
        this.itemDescElement = this.page.locator('[class="inventory_item_description"]');
        this.shoppingCartElement = this.page.locator('a[class="shopping_cart_link"]');
    }
    
    // public async chooseProductByTitle(expectedProductTitle: string) {
    //     for (let product of await this.itemDescElement.all()) {
    //         const productTitle = await product.locator('[class="inventory_item_name"]');
    //         if (productTitle === expectedProductTitle) {
    //             await product.locator('button').click();
    //         }
    //     }
    // }

    public async chooseProductByTitle(expectedProductTitle: string) {
        await this.itemDescElement.filter({ hasText: expectedProductTitle }).locator('button').click();
    }

    public async validateNumberOfItems(expectedNumberOfItems: string) {
        await this.validateElementText(this.shoppingCartElement, expectedNumberOfItems);
    }

    public async goToCart() {
        await this.clickElement(this.shoppingCartElement);
    }

}