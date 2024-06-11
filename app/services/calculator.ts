import * as c from "#types/calculator"

export class CalculatorService {

    async calculateLvl1({ targetStep, materialBase }: c.lvl1InputType): Promise<c.calculatorResult>{
        let attempts: number;
        const expr = Number(targetStep);
        switch(expr) { 
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
        let cost = materialBase * attempts;

        let largeNumber: string = cost >= 1000 ? ' billion' : ' million';
        if(cost < 1){
            cost = cost*1000;
            largeNumber = ' thousand';
        }
        if(largeNumber == ' billion'){
            cost = cost/1000;
            
        }
        
        const result = cost+largeNumber;
        const path = 'after reaching +10 with a "Safe to +10 Certificate" item, attempt special upgrades until upgrade target +1'+expr+' is reached';

        return { 
            result,
            path
        };
    }
    
    async calculateLvl2({ materialBase, materialHd, bsb }: c.lvl2InputType): Promise<c.calculatorResult> {
         
        const gradingCosts: number = 16.7 + 21 + 20.53 + 77;
        const attemptsTo9: number = (Number(materialBase) * 79);
        const attemptsTo10: number = (Number(materialBase) * 284);
        const blacksmithBlessingTo11: number = (Number(bsb) * 4 + Number(materialHd)) * 5;
        const blacksmithBlessingTo12: number = (Number(bsb) * 7 + Number(materialHd)) * 5;

        let cost = attemptsTo9 + attemptsTo10*3 + blacksmithBlessingTo11*2 + blacksmithBlessingTo12 + gradingCosts;

        let largeNumber: string = cost >= 1000 ? ' billion' : ' million';
        if(cost < 1){
            cost = cost*1000;
            largeNumber = ' thousand';
        }
        if(largeNumber == ' billion'){
            cost = cost/1000;
        }
        const result = cost+largeNumber;

        const path = 'First, attempt to get the equipment to +9 using base materials (etherium/etherdeocon). grade the equipment to grade "D", which will clear its upgrades. After equipment reset from grading, attempt equipment upgrade to +10 using base materials(etherium/etherdeocon). Next, grade it to "C". then Again upgrade the equipment to +11, and grade to "B". Repeat this last process to grade "A", then finally grade it to +12';
        return { 
            result,
            path
            };

    }
    
    async calculateShadowGear({ materialBase, shadowHammer }: c.shadowGearType): Promise<c.calculatorResult>{
        const stopAtSix: number = materialBase * 10.23 + shadowHammer * 1.23;
        const stopAtSeven: number = materialBase * 7 + shadowHammer * 1.67;
        let cost = Math.min(stopAtSix, stopAtSeven);

        let largeNumber: string = cost >= 1000 ? ' billion' : ' million';
        const path = String(cost == stopAtSix ? 6 :  7);

        if(cost < 1){
            cost = cost*1000;
            largeNumber = ' thousand';
        }
        if(largeNumber == ' billion'){
            cost = cost/1000;
        }
        const result = cost+largeNumber;
        
        
        
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

        const result = String(materialCost);
        const path = 'the expected cost to get a lv'+expr+' enchant is '+materialCost+' base materials.';
        return { 
            result,
            path
        };
    }

}



