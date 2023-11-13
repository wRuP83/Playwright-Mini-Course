import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductsPage extends BasePage {

    private pageTitleElement: Locator;

    constructor(protected page: Page) {
        super(page);
        this.pageTitleElement = this.page.locator('[class="product_label"]');
    }

    public async validateTitle(title: string) {
        await this.validateElementText(this.pageTitleElement, title);
    }

}