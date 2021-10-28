const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
async function script() {
  // Steps to test
  const driver = await new Builder().forBrowser("chrome").build();

  // 1. Open the webpage. Log its title
  await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
  const titleTag = await driver.getTitle();
  console.log("getting page title:", titleTag);

  // 2. Locate and choose item
  await driver.findElement(By.xpath('//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[69]/div/a/picture/img')).click();
  await driver.manage().setTimeouts({ implicit: 20000 });
  await driver.findElement(By.className("product-options-wrapper")).click();
  await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[2]/div[1]')).click();

  // 3. Add it to the wishlist
  await driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[1]/a')).click();
  await driver.manage().setTimeouts({ implicit: 10000 });

  // 4. Open item via the wishlist
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.findElement(By.id("wishlist-link-mobile")).click();
  await driver.findElement(By.className("action primary go-to-wishlist")).click();

  // 5. Add item into shopping cart
  await driver.executeScript("arguments[0].scrollIntoView()",driver.findElement(By.xpath('//*[@id="wishlist-view-form"]/div[2]/div[1]/button[3]')));
  await driver.findElement(By.xpath('//*[@id="wishlist-view-form"]/div[2]/div[1]/button[3]')).click();

  // 7. Change item quantity, increasing by 1
  //await driver.manage().setTimeouts({ implicit: 20000 });
  //await driver.findElement(By.className("action qty increase-qty increase-item-qty-btn")).click();

  // 8. Remove all items from the shopping cart
  //await driver.manage().setTimeouts({ implicit: 20000 });
  //await driver.findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[1]/div/a')).click();

  // 9. Search for item "Jope"
  //const itemSearch = "Jope";
 // await driver.findElement(By.xpath('//*[@id="search"]')).click();
 // await driver.findElement(By.id("search")).sendKeys(itemSearch, Key.RETURN);

  // 10. Filter search results by popularity
  //await driver.findElement(By.id(`//*[@id="sorter"]/option[1]`)).click();

}
script()
