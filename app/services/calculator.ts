import * as c from "#types/calculator"

export class CalculatorService {

    async calculateLvl1({ num1, num2 }: c.calculatorInputType): Promise<c.calculatorResult>{
        let attempts: number;
        switch(num1) { 
            case 1: { 
                attempts = 4;
                break;
            } 
            case 2: { 
                attempts = 20;
                break; 
            }
            case 3: { 
                attempts = 85;
                break;
             } 
             case 4: { 
                attempts = 337;
                break;
             }
             case 5: { 
                attempts = 1354;
                break;
             }    
            default: {
                attempts = 0; 
                break;
            }
        }
        const result = num2 * attempts;
        const path = 'do this and then that. then do another thing'

        return { 
            result,
            path
            
        };
    }
    
    async calculateLvl2({ materialBase, materialHd, bsb, hammerAttemptCost }: c.lvl2InputType): Promise<c.calculatorResult> {
        
        /*
        if (hammerAttemptCost > blacksmithBlessingTo11){
            //some other other code
            }
            
        if (hammerAttemptCost > attemptsTo10){
            //some other code
        }
            
        if (hammerAttemptCost > attemptsTo9){
            //some code
        }*/
                   
        const gradingCosts: number = 16.7 + 21 + 20.53 + 77;
        const attemptsTo9: number = materialBase * 79;
        const attemptsTo10: number = materialBase * 284;
        const blacksmithBlessingTo11: number = (bsb * 4 + materialHd) * 5;
        const blacksmithBlessingTo12: number = (bsb * 7 + materialHd) * 5;

        const result = attemptsTo9 + attemptsTo10*3 + blacksmithBlessingTo11*2 + blacksmithBlessingTo12 + gradingCosts;
        const path = 'do this and then that. then do another thing. '
        return { 
            result,
            path
            };

    }
    
    async calculateShadowGear({ materialBase, shadowHammer }: c.shadowGearType): Promise<c.calculatorResult>{
        const stopAtSix: number = materialBase * 10.23 + shadowHammer * 1.23;
        const stopAtSeven: number = materialBase * 7 + shadowHammer * 1.67;
        const result = Math.min(stopAtSix, stopAtSeven);
        
        const path = String(result == stopAtSix ? 6 :  7);
        
        return { 
            result,
            path
            };
        }
    
    
    
    async calculateUpgradeEnchantment( {targetStep} : c.enchantmentsType): Promise<c.calculatorResult>{
        let materialCost: number;
        const expr = Number(targetStep)
        switch(expr) { 
            case 2: { 
                materialCost = 6;
                break;
            } 
            case 3: { 
                materialCost = 25;
                break; 
            }
            case 4: { 
                materialCost = 85;
                break;
            } 
            case 5: { 
                materialCost = 337;
                break;
            }
            default: {
                materialCost = 0; 
                break;
            }
        }

        const result = materialCost;
        const path = 'the expected cost to get a lv'+expr+' enchant is '+materialCost+' base materials.';
        return { 
            result,
            path
        };
    }
}

