export interface calculatorInputType {
    num1: number;
    num2: number;
}

export interface lvl1InputType {
    targetStep: number;
    materialBase: number;
}

export interface lvl2InputType {
    materialBase: number;
    materialHd: number;
    bsb: number;
    hammerAttemptCost: number;
}

export interface enchantmentsType {
    targetStep: number;
}

export interface shadowGearType {
    materialBase: number;
    shadowHammer: number;
}

export interface calculatorResult {
    result: number;
    path: string;
}
