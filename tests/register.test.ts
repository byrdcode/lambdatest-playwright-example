// @ts-check
import {test, expect} from '@playwright/test';
import { LambdatestMenu } from '../pages/lambdatest-menu';
import { LambdatestRegistrationPage } from '../pages/lambdatest-registration';
import { createRandomUser } from '../helpers/createUserData';


test('Register account', async({page}) =>{

    await page.goto('/');

    const lambdatestMenu = new LambdatestMenu(page);
    const lambdatestRegistrationPage = new LambdatestRegistrationPage(page);

    await lambdatestMenu.hoverOverMyAccount();
    await lambdatestMenu.selectRegisterLink();

    expect (page.url()).toContain('account/register');

    const userAccountInfo = createRandomUser();
    await lambdatestRegistrationPage.registerNewAccount(userAccountInfo, true);
    // await page.pause();
});

// TODO - add in assertions to validate account was created.
function validateAccountCreation(userAccountInfo: object) :void{
// fill in 
}