const { Given, When, Then } = require("@wdio/cucumber-framework");
const { Before } = require("@cucumber/cucumber");

Given(/^user is on the login page$/, async () => {
  await browser.url(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

When(/^user enters (.*) and (.*)$/, async (username, password) => {
  const loginBox = await $("//input[@name='username']");
  const passwordBox = await $("//input[@name='password']");
  await loginBox.setValue(username);
  await passwordBox.setValue(password);
});

When(/^click on the login button$/, async () => {
  await $("//button[@type='submit']").click();
});
Then(/^this (.*) is displayed$/, async (message) => {
  if (message.trim() === "OrangeHRM") {
    const title = await browser.getTitle().toString();
    await expect(browser).toHaveTitle("OrangeHRM");
    const logOut = await $("//span[@class='oxd-userdropdown-tab']");
    await logOut.click();
    const logoutBtn = await $("//li/a[text()='Logout']");
    await logoutBtn.click();
  } else {
    await expect(
      await $("//p[text()='Invalid credentials']")
    ).toHaveTextContaining(message.trim());
  }
});
