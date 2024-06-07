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
router.on('/shadow-gear').render('pages/shadow-gear/shadow-gear')
router.on('/lvl1').render('pages/lvl1/lvl1')
router.on('/enchant-upgrade').render('pages/enchant-upgrade/enchant-upgrade')
router.post('/lvl2-calculate', [WebpagesController, 'lvl2Calculate'])
router.get('/lvl2', [WebpagesController, 'lvl2Render'])

// backend routes
router.group(() => {
    router.post('calculate-lvl-1', [CalculatorsController, 'calculateLvl1'])
    router.post('calculate-lvl-2', [CalculatorsController, 'calculateLvl2'])
    router.post('calculate-shadow-gear', [CalculatorsController, 'calculateShadowGear'])
    router.post('calculate-upgrade-enchantment', [CalculatorsController, 'calculateUpgradeEnchantment'])
}).prefix('api')
