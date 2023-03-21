import { test, expect } from '@playwright/test';

//Ejercicio 1 - Agregar texto
test('playwright textField Ejercicio 1-Agregar texto', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  //await page.locator('#developer-name/*[type()="text"]').fill('Laura');
  await page.locator('//input[contains(@type,"text")]').fill('Laura');
});

//Ejercicio 2 - Botón click
test('playwright Ejercicio 2-Botón click', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('//input[contains(@id, "populate")]').click();
  await page.waitForTimeout(5000);
});

//Ejercicio 3 - Checkbox donde selecciona la primera y cuarta opción

/*test('palywright Ejercicio 3 - Checkbox', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('//font[text()= "Support for testing on remote devices"]').click();
  await page.waitForTimeout(5000);
});*/

test('playwright Ejercicio 3-Checkbox elegir dos opciones', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('//input[contains(@id, "remote-testing")]').check();
  await page.locator('//input[contains(@id, "continuous-integration-embedding")]').check(); 
});


//Ejercicio 4 - RadioButton donde se seleciona la opción MacOS
test('playwright Ejercicio 4-RadioButton', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('//input[contains(@id, "macos")]').check();
});

// Ejercicio 5 - Combobox
/*await page.getByTestId('preferred-interface-select').selectOption('Both');
  await page.getByTestId('preferred-interface-select').selectOption('Command Line');*/
test('playwright Ejercicio 5-Combobox', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('//option[text()="JavaScript API"]').selectOption('JavaScript API');
});