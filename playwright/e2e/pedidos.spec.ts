import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')

/// AAA - Arrange, Act, Assert

  // Checkpoints Arrange
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await expect(page.getByTestId('hero-section').getByRole('heading', { name: 'Velô Sprint' })).toBeVisible()

  // Consultar pedido
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()

  // Checkpoints Act
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')
  await expect(page.getByRole('heading', { name: 'Consultar Pedido' })).toBeVisible()

  // Pesquisar pedido
  await page.getByTestId('search-order-id').click()
  await page.getByTestId('search-order-id').fill('VLO-22GZHG')
  await page.getByTestId('search-order-button').click()

  // Resultado esperado Assert
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-22GZHG')
  await expect(page.getByTestId('order-result-id')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')
  await expect(page.getByTestId('order-result-status')).toBeVisible() 


})