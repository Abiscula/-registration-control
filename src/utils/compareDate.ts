import { contractProps } from "../types";

export function compareDate(contracts: contractProps[], additionValue: number) {
    let filteredContracts: any = []
    contracts?.forEach((contract: contractProps) => {
        let dateParts: string[] | any = contract.contractValidate.split("/");
        const date: Date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        if (additionValue === -1) {
            if (date < new Date()) {
                filteredContracts.push(contract)
            }
        } else {
            const today = new Date()
            let newDate = today.setDate(today.getDate() + additionValue)
            if ((date <= new Date(newDate)) && (date > new Date())) {
                filteredContracts.push(contract)
            }
        }
    })
    return filteredContracts
}