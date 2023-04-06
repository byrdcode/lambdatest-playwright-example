// @ts-check
import {test, expect} from '@playwright/test';
import { LambdatestMenu } from '../pages/lambdatest-menu';
import { LambdatestRegistrationPage } from '../pages/lambdatest-registration';


test('Register account', async({page}) =>{

    await page.goto('/');
    // await page.pause();
    // await expect(page.getByRole)
    const lambdatestMenu = new LambdatestMenu(page);
    const lambdatestRegistrationPage = new LambdatestRegistrationPage(page);
    await lambdatestMenu.hoverOverMyAccount();
    // await page.pause();
    await lambdatestMenu.selectRegisterLink();
    // await page.waitForTimeout(5000);
    expect (page.url()).toContain('account/register');
     await page.pause();

     lambdatestRegistrationPage.registerNewAccount(true);
     await page.pause();
});