import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { CalculatorService } from '#services/calculator'

export default class CalculatorsController {
    @inject()
    async calculateLvl1({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { targetStep, materialBase } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateLvl1({targetStep, materialBase}))
        } catch (error) {
            return response.header('Content-type', 'application/json').status(400).send({error})
        }
    }

    @inject()
    async calculateLvl2({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { materialBase, materialHd, bsb } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateLvl2({materialBase, materialHd, bsb}))
        } catch (error) {
            return response.header('Content-type', 'application/json').status(400).send({error})
        }
    }

    @inject()
    async calculateShadowGear({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { materialBase, shadowHammer } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateShadowGear({materialBase, shadowHammer}))
        } catch (error) {
            return response.header('Content-type', 'application/json').status(400).send({error})
        }
    }

    @inject()
    async calculateUpgradeEnchantment({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { targetStep } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateUpgradeEnchantment({targetStep}))
        } catch (error) {
            return response.header('Content-type', 'application/json').status(400).send({error})
        }
    }
    
}