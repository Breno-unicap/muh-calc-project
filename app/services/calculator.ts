export interface calculatorInputType {
    num1: number;
    num2: number;
}

interface lvl2InputType {
    materialBase: number;
    materialHd: number;
    bsb: number;
    hammerAttemptCost: number;
}

export interface calculatorResult {
    result: number;
}

export class CalculatorService {

    async calculateLvl1({ num1, num2 }: calculatorInputType): Promise<calculatorResult>{
        return { result: num1 + num2 };
    }
    
    async calculateLvl2({ materialBase, materialHd, bsb, hammerAttemptCost }: lvl2InputType): Promise<calculatorResult> {
        return { result: materialBase + materialHd + bsb + hammerAttemptCost };
    }
    
    async calculateShadowGear({ num1, num2 }: calculatorInputType): Promise<calculatorResult>{
        return { result: num1 + num2 };
    }
    
    async calculateUpgradeEnchantment({ num1, num2 }: calculatorInputType): Promise<calculatorResult>{
        return { result: num1 + num2 };
    }
}

