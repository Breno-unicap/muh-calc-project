import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { CalculatorService } from '#services/calculator'

export default class CalculatorsController {
    @inject()
    async calculateLvl1({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { num1, num2 } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateLvl1({num1, num2}))
        } catch (error) {
            return response.header('Content-type', 'application/json').status(400).send({error})
        }
    }

    @inject()
    async calculateLvl2({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { materialBase, materialHd, bsb, hammerAttemptCost } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateLvl2({materialBase, materialHd, bsb, hammerAttemptCost}))
        } catch (error) {
            return response.header('Content-type', 'application/json').status(400).send({error})
        }
    }

    @inject()
    async calculateShadowGear({ request, response }: HttpContext, calculatorService: CalculatorService) {
        try {
            const { num1, num2 } = request.body();
            return response.header('Content-type', 'application/json').status(200).send(await calculatorService.calculateShadowGear({num1, num2}))
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