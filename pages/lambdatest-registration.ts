// @ts-check

import { Locator, Page } from "@playwright/test";
import {faker} from "@faker-js/faker";

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

    async registerNewAccount(user: any, subscribeToNewsletter: boolean){
        await this.firstName.type(user.firstName);
        await this.lastName.type(user.lastName);
        await this.email.type(user.email);
        await this.phone.type(user.phoneNumber);
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