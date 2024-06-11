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
    test('lv 1 rejects negative values', async ({ visit }) => {
      const page = await visit('/lvl1')
      await page.assertInputValue('input[name="materialBase"]', '-1')
    })

    test('lv 2 rejects negative values base', async({ visit }) => {
        const page = await visit('/lvl2')
        await page.assertInputValue('input[name="materialBase"]', '-1')
    })

    test('lv 2 rejects negative values hd', async({ visit }) => {
        const page = await visit('/lvl2')
        await page.assertInputValue('input[name="materialHd"]', '-1')
    })

    test('lv 2 rejects negative values bsb', async({ visit }) => {
        const page = await visit('/lvl2')
        await page.assertInputValue('input[name="bsb"]', '-1')
    })

    test('shadow gear rejects negative base', async({ visit }) => {
        const page = await visit('/shadow-gear')
        await page.assertInputValue('input[name="materialBase"]', '-1')
    })

    test('shadow gear rejects negative hammer', async({ visit }) => {
        const page = await visit('/shadow-gear')
        
        await page.assertInputValue('input[name="shadowHammer"]', '-1')
    })
  })

  test.group('Accepts float', () => {
    test('lv 1 float', async ({ visit }) => {
        const page = await visit('/lvl1')
        await page.assertInputValue('input[name="materialBase"]', '1')
    })

    test('lv 2 float bsb', async({ visit }) => {
        const page = await visit('/lvl2')
        await page.assertInputValue('input[name="bsb"]', '2')
    })

    test('lv 2 float hd', async({ visit }) => {
        const page = await visit('/lvl2')
        await page.assertInputValue('input[name="materialHd"]', '3')
    })

    test('lv 2 float base', async({ visit }) => {
        const page = await visit('/lvl2')
        await page.assertInputValue('input[name="materialBase"]', '8.1')
    })

    test('shadow gear float base', async({ visit }) => {
        const page = await visit('/shadow-gear')
        await page.assertInputValue('input[name="materialBase"]', '8.1')
    })

    test('shadow gear float hammer', async({ visit }) => {
        const page = await visit('/shadow-gear')
        await page.assertInputValue('input[name="shadowHammer"]', '8.1')
    })
  })
  

