    //@ts-check

import { Locator, Page } from "@playwright/test";

    export class LambdatestMenu{
        readonly page: Page;
        readonly myAccount: Locator;
        readonly register: Locator;

        constructor(page:Page){
            this.page = page;
            this.myAccount = page.getByRole('button', {name: 'My Account'});
            this.register = page.getByRole('link', {name: 'Register'});
            // page.getByRole('button', {name: 'My Account'})
        }

        async hoverOverMyAccount(){
            await this.myAccount.isVisible();
            await this.myAccount.hover();
        }

        async selectMyAccount(){
            await this.myAccount.click();
        }

        async selectRegisterLink(){
            await this.register.isVisible();
            await this.register.click();
        }
    }