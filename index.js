const {Builder,By,Key,util} = require("selenium-webdriver");
async function example()
{
let driver = await new Builder().forBrowser("firefox").build();
await driver.get("https://www.calculator.net/percent-calculator.html");
driver.findElement(By.id("cpar1")).sendKeys("10");
driver.findElement(By.id("cpar2")).sendKeys("50");
driver.findElement(By.xpath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]')).click();
var result = driver.findElement(By.xpath('/html/body/div[3]/div[1]/p[2]/font')).getText();
}
example();