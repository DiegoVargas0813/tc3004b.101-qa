// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('subbignumbers', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('subbignumbers', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 780, height: 816 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("999999999999999999")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("99999999999999999")
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})
