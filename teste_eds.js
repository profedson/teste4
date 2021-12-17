const webdriver = require('selenium-webdriver'), // recebendo a lib do selenium 
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder() // essa parte vai executar o chrome 
    .forBrowser('chrome')
    .build();
//driver.get vai entrar na url do www.google.com
driver.get('http://www.google.com').then(function() {
    driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function() {
        driver.getTitle().then(function(title) {
            console.log(title)
            if (title === 'webdriver - Pesquisa Google') {
                console.log('Test passed');
            } else {
                console.log('Test failed');
            }
            driver.quit();
        });
    });
});