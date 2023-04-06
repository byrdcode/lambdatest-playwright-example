// @ts-check
import {test, expect} from '@playwright/test';
import { LambdatestMenu } from '../pages/lambdatest-menu';
import { LambdatestRegistrationPage } from '../pages/lambdatest-registration';


test('Register account', async({page}) =>{

    await page.goto('/');

    const lambdatestMenu = new LambdatestMenu(page);
    const lambdatestRegistrationPage = new LambdatestRegistrationPage(page);

    await lambdatestMenu.hoverOverMyAccount();
    await lambdatestMenu.selectRegisterLink();

    expect (page.url()).toContain('account/register');

    await lambdatestRegistrationPage.registerNewAccount(true);
});