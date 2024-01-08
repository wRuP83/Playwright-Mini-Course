import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class CheckoutCompletePage extends BasePage {

    private thankyouMessageElement: Locator;
    private backhomeButton: Locator;

    constructor(protected page: Page) {
        super(page);
        this.thankyouMessageElement = page.locator('[class="complete-header"]');
        this.backhomeButton = page.locator('[data-test="back-to-products"]');
    }

    public async validateFinalMessage(expectedMessage: string) {
        await this.validateElementText(this.thankyouMessageElement, expectedMessage);
    }

    public async goBackToProducts() {
        await this.clickElement(this.backhomeButton);
    }

}