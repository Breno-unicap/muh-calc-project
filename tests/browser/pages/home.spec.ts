
import { test } from '@japa/runner'


test.group('GET status', () => {
  test('Home GET status OK', async ({ client }) => {
    const response = await client.get('/')


    response.assertStatus(200)

  })

  test('Tutorial GET status OK', async ({ client }) => {
    const response = await client.get('/tutorial')

    response.assertStatus(200)

  })

  test('Lvl1 GET status OK', async ({ client }) => {
    const response = await client.get('/lvl1')

    response.assertStatus(200)

  })

  test('Lvl2 GET status OK', async ({ client }) => {
    const response = await client.get('/lvl2')

    response.assertStatus(200)

  })

  test('shadow-gear GET status OK', async ({ client }) => {
    const response = await client.get('/shadow-gear')

    response.assertStatus(200)

  })

  test('enchant-upgrade GET status OK', async ({ client }) => {
    const response = await client.get('/enchant-upgrade')

    response.assertStatus(200)

  })


  
})


test.group('API CALL status', () => {
  test('home GET status OK', async ({ client }) => {
    const response = await client.get('/')


    response.assertStatus(200)

  })

  test('API calculate-lvl-1 POST status OK', async ({ client }) => {
    const response = await client.post('/api/calculate-lvl-1')

    response.assertStatus(200)

  })

  test('API calculate-lvl-2 POST status OK', async ({ client }) => {
    const response = await client.post('/api/calculate-lvl-2')

    response.assertStatus(200)

  })

  test('API calculate-shadow-gear POST status OK', async ({ client }) => {
    const response = await client.post('/api/calculate-shadow-gear')

    response.assertStatus(200)

  })

  test('API calculate-upgrade-enchantment POST status OK', async ({ client }) => {
    const response = await client.post('/api/calculate-upgrade-enchantment')

    response.assertStatus(200)

  })

  
})



test.group('Selects', () => {
    test('enchant selection assert', async ({ visit }) => {
      const page = await visit('/enchant-upgrade')
      await page.assertSelectedOptions('select[name="targetStep"]', [
        '2',
        '3',
        '4',
        '5'
      ])
    })
    test('lv 1 selection assert', async ({ visit }) => {
        const page = await visit ('/lvl1')
        await page.assertSelectedOptions('select[name="targetStep"]', [
            '1',
            '2',
            '3',
            '4',
            '5'
        ])
    })
  })

  