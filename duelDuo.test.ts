import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button works', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()

    expect(displayed).toBe(true)
})

test('select bot button works', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath("//*[@id='choices']/div[3]/button")).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()

    expect(displayed).toBe(true)
})

test('select bot button works but scotts', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.xpath('//button[text()="Add to Duo"][1]')).click()

    const playerDuo = await driver.findElement(By.id('player-duo'))

    const displayed = await playerDuo.isDisplayed()

    expect(displayed).toBe(true)
})

test('when bot is removed, it goes back to choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    await driver.findElement(By.xpath('(//button[text()="Remove from Duo"])')).click()

    const returnedCard = await driver.findElement(By.xpath('//*[@id="choices"]/div[5]'))
    const displayed = await returnedCard.isDisplayed()
    expect(displayed).toBe(true)
});
