const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
async function script() {
  // Steps to test
  // 1. Open the webpage. Log it's title
  const driver = await new Builder().forBrowser("chrome").build();
  const titleTag = await driver.getTitle();
  // 2. Locate item
  // 3. Add one item to the wishlist
  const wishlistItem = await driver.findElement();
  // 4. Open item via the wishlist
  // 5. Add item into shopping cart
  // 6. Open shopping cart
  const shoppingCart = await driver.findElement();
  // 7. Change item quantity, increasing by 1
  // 8. Remove all items from the shopping cart
  // 9. Search for item "Jope"
  const itemSearch = "jope";
  const bodyElement = await driver.findElement();
  // 10. Filter search results by popularity
}

script();
