import { contractProps } from "../types";

export function compareDate(contracts: contractProps[], additionValue: number) {
    let filteredContracts: any = []
    contracts?.forEach((contract: contractProps) => {
        let partesData: string[] | any = contract.contractValidate.split("/");
        const date: Date = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        const today = new Date()
        let newDate = today.setDate(today.getDate() + additionValue)
        if(date <= new Date(newDate)) {
            filteredContracts.push(contract)
        }
    })
    return filteredContracts
}