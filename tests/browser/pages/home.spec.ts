import { test } from '@japa/runner'

test.group('About', () => {
  test('see welcome message', async ({ visit }) => {
    const page = await visit('/')
    await page.assertTextContains('body', 'MuhCalc tool')
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

  test.group('Rejects negative', () => {
    test('lv 1 rejects negative', async ({ visit }) => {
      const page = await visit('/lvl1')
      await page.assertInputValue('input[name="materialBase"]', '-1')
    })
  })
  

