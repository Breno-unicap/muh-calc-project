/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CalculatorsController = () => import('#controllers/calculators_controller')
const WebpagesController = () => import ('#controllers/webpages_controller')



// frontend routes
router.on('/').render('pages/about/about')
router.on('/tutorial').render('pages/tutorial/tutorial')

router.post('/lvl1-calculate', [WebpagesController, 'lvl1Calculate'])
router.get('/lvl1', [WebpagesController, 'lvl1Render'])

router.post('/shadow-gear-calculate', [WebpagesController, 'shadowGearCalculate'])
router.get('/shadow-gear', [WebpagesController, 'shadowGearRender'])

router.post('/enchant-upgrade-calculate', [WebpagesController, 'enchantUpgradeCalculate'])
router.get('/enchant-upgrade', [WebpagesController, 'enchantUpgradeRender'])
router.post('/lvl2-calculate', [WebpagesController, 'lvl2Calculate'])
router.get('/lvl2', [WebpagesController, 'lvl2Render'])

// backend routes
router.group(() => {
    router.post('calculate-lvl-1', [CalculatorsController, 'calculateLvl1'])
    router.post('calculate-lvl-2', [CalculatorsController, 'calculateLvl2'])
    router.post('calculate-shadow-gear', [CalculatorsController, 'calculateShadowGear'])
    router.post('calculate-upgrade-enchantment', [CalculatorsController, 'calculateUpgradeEnchantment'])
}).prefix('api')
