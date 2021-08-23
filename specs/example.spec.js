const assert = require("chai");

describe("Registration:", function () {
  it("should be able to register", async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url("/sign-in");
    let responseBody;

    const puppeteer = await browser.getPuppeteer();
    const page = (await puppeteer.pages())[0];

    await $('input[name="email"]').setValue("admin@admin.com");
    await $('input[name="password"]').setValue("Pa55word");
    await $("button").click();

    page.on("response", async function (response) {
      if (response.url().includes("/auth/login")) {
        responseBody = await response.json();
      }
    });

    await expect(browser).toHaveUrl("http://46.101.234.121/doctors");

    assert.expect(responseBody.user.email).to.be.eql("admin1@admin.com");
  });
});
