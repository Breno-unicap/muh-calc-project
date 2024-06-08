import { middleware } from "../../start/kernel.js";

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
        let attempts: number;
        switch(num1) { 
            case 1: { 
                attempts = 4;
            } 
            case 2: { 
                attempts = 20; 
            }
            case 3: { 
                attempts = 85;
             } 
             case 4: { 
                attempts = 337;
             }
             case 5: { 
                attempts = 1354
             }    
            default: {
                attempts = 0; 
                break;
            }
        }
        return { result: num2*attempts };
    }
    
    async calculateLvl2({ materialBase, materialHd, bsb, hammerAttemptCost }: lvl2InputType): Promise<calculatorResult> {
        let attemptsTo9: number;
        let attemptsTo10: number;
        let bsbTo11: number;
        let bsbTo12: number;
        let gradingCosts: number = 16.7 + 21 + 20.53 + 77;

        attemptsTo9 = materialBase*79;
        attemptsTo10 = materialBase*284;
        bsbTo11 = (bsb * 4 + materialHd) * 5;
        bsbTo12 = (bsb * 7 + materialHd) * 5;


        return { result: attemptsTo9 + attemptsTo10*3 + bsbTo11*2 + bsbTo12 + gradingCosts };
    }
    
    async calculateShadowGear({ num1, num2 }: calculatorInputType): Promise<calculatorResult>{
        let atSix: number;
        let atSeven: number;

        atSix = num1*10.23 + num2*1.23;
        atSeven = num1*7 + num2*1.67;

        return { result: Math.min(atSix, atSeven) };
    }
    
    async calculateUpgradeEnchantment({ num1 }: calculatorInputType): Promise<calculatorResult>{

        switch(num1) { 
            case 2: { 
                return { result: 6 };
            } 
            case 3: { 
                return { result: 25 }; 
            }
            case 4: { 
                return { result: 84 }; 
             } 
             case 5: { 
                return { result: 293 };
             }  
            default: { 
                break;
            }

        }
        return { result: 0 };
    }
}

