// @ts-check

import { Locator, Page } from "@playwright/test";

export class LambdatestRegistrationPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly password: Locator;
    readonly passwordConfirm: Locator;
    readonly newsLetterSubscribeYes: Locator;
    readonly newsLetterSubscribeNo: Locator;
    readonly privacyPolicy: Locator;
    readonly continue: Locator;

    constructor(page:Page){
        this.page = page;
        this.firstName = page.getByTestId('input-firstname');
        this.lastName = page.getByTestId('input-lastname');
        this.email = page.getByTestId('input-email');
        this.phone = page.getByTestId('input-telephone');
        this.password = page.getByTestId('input-password');
        this.passwordConfirm = page.getByTestId('input-confirm');
        this.newsLetterSubscribeYes = page.getByText('Yes');
        this.newsLetterSubscribeNo = page.getByText('No');
        this.privacyPolicy = page.getByText('I have read and agree to the Privacy Policy');
        this.continue = page.getByRole('button', {name: 'Continue'});
    }

    async registerNewAccount(subscribeToNewsletter: boolean){
        await this.firstName.type('firstName');
        await this.lastName.type('lastName');
        await this.email.type('email@gmail.com');
        await this.phone.type('4109139344');
        await this.password.type('Test123!');
        await this.passwordConfirm.type('Test123!');
        
        if (subscribeToNewsletter === true){
            await this.newsLetterSubscribeYes.click();
        }else{
            await this.newsLetterSubscribeYes.click();
        }
        await this.privacyPolicy.check();
        await this.continue.click();

        

        }
}