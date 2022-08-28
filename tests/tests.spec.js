// @ts-check
const { test, expect } = require('@playwright/test');
const { DelekHomePage } = require('../Helpers/helper.page');
let delekHomePage

test.beforeEach(async ({ page }) => {
  delekHomePage = new DelekHomePage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('test suite name', () => {

  test('test name', async ({ page }) => {
     await expect(page).toHaveURL('https://delekhomes.com/');
    
    
    
  });
});

//! EXAMPLES
// await delekHomePage.clickDiscoverBtn.click();
// await expect(page).toHaveURL("https://dev.gigturbo.com/discover");
// await expect(delekHomePage.mostPopularJobsDisplayed).toHaveText('The most popular platforms and jobs');
// await delekHomePage.clickFaqMenu.click();
// await expect(page).toHaveURL("https://dev.gigturbo.com/faq");
// await expect(delekHomePage.whatIsGigturboTxtVisible).toHaveCount(1);
// await expect(delekHomePage.whyNowTxtVisible).toHaveCount(1);
// await expect(delekHomePage.whatIsForTxtVisible).toHaveCount(1);
// await expect(delekHomePage.usingYourPATxtVisible).toHaveCount(1);
// await delekHomePage.letsGetStartedBtn.click();
// await expect(page).toHaveURL("https://dev.gigturbo.com/signup");
// await expect(delekHomePage.getYouStartedTxtVisible).toHaveText("Let's get you started!");
// await delekHomePage.logInBtn.click();
// await expect(page).toHaveURL("https://dev.gigturbo.com/login");
// await expect(delekHomePage.welcomeBackTxtVisible).toHaveText('Welcome Back!');
// await expect(delekHomePage.logInPhoneNumber).toHaveText('Log in with your phone number');
// await expect(delekHomePage.phoneNumTxtBookVisible).toHaveCount(1);
// await delekHomePage.typeInTheSearchBox.fill("Pet Care");
// await expect(delekHomePage.onlyPetCareIsDisplayed).toHaveCount(1);
// await delekHomePage.selectPetCareIcon.click();
// await delekHomePage.nextBtn.click();
// await delekHomePage.madPawsIcon.click();

