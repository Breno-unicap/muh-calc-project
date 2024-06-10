import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { CalculatorService } from '#services/calculator';

export default class WebpagesController {
    @inject()
    async lvl2Calculate({ request, response }: HttpContext, calculatorService: CalculatorService) {
        const { materialBase, materialHd, bsb, hammerAttemptCost } = request.body();
        const data = await calculatorService.calculateLvl2({ materialBase, materialHd, bsb, hammerAttemptCost })
        return response.redirect()
            .withQs({
                output: data.result,
                guide: data.path
            })
            .toRoute('/lvl2')
    }

    lvl2Render({ request, view }: HttpContext) {
        return view.render('pages/lvl2/lvl2', {
            output: request.qs().output || null,
            guide: request.qs().guide || null
        })
    }

    @inject()
    async enchantUpgradeCalculate({ request, response }: HttpContext, calculatorService: CalculatorService) {
        const { targetStep } = request.body();
        const data = await calculatorService.calculateUpgradeEnchantment({ targetStep })
        return response.redirect()
            .withQs({
                output: data.result,
                guide: data.path
            })
            .toRoute('/enchant-upgrade')
    }

    enchantUpgradeRender({ request, view }: HttpContext) {
        return view.render('pages/enchant-upgrade/enchant-upgrade', {
            output: request.qs().output || null,
            guide: request.qs().guide || null
        })
    }

    @inject()
    async shadowGearCalculate({ request, response }: HttpContext, calculatorService: CalculatorService) {
        const { materialBase, shadowHammer } = request.body();
        const data = await calculatorService.calculateShadowGear({ materialBase, shadowHammer })
        return response.redirect()
            .withQs({
                output: data.result,
                guide: data.path
            })
            .toRoute('/shadow-gear')
    }

    shadowGearRender({ request, view }: HttpContext) {
        return view.render('pages/shadow-gear/shadow-gear', {
            output: request.qs().output || null,
            guide: request.qs().guide || null
        })
    }
}
