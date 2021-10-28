const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
async function script() {
  // Steps to test
  const driver = await new Builder().forBrowser("chrome").build();

  // 1. Open the webpage. Log it's title
  await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
  //console.log("opening the web page");
  const titleTag = await driver.getTitle();
  //console.log("page is called:", titleTag);

  // 2. Locate item
  const wishlistItem = await driver.findElement(By.xpath('//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[69]/div/a]'));

  // 3. Add it to the wishlist
  driver.executeScript('arguments[0].click();',wishlistItem);

  // 4. Open item via the wishlist
  const openWishlist = await driver.findElement(By.xpath(`//*[@id="wishlist-link-mobile"]`));

  // 5. Add item into shopping cart
  await driver.findElement(By.id(`//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[69]/div/a]`)).click();
  await driver.findElement(By.id(`//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[2]/div[1]`)).click();
  await driver.findElement(By.id(`//*[//*[@id="product-addtocart-button"]`)).click();

  // 6. Open shopping cart
  const shoppingCart = await driver.findElement(By.xpath('//tagname[@Attribute=’value’]'));

  // 7. Change item quantity, increasing by 1
  // 8. Remove all items from the shopping cart
  // 9. Search for item "Jope"
  const itemSearch = "Jope";
  const bodyElement = await driver.findElement(By.xpath('//tagname[@Attribute=’value’]'));
  // 10. Filter search results by popularity
}

script();
