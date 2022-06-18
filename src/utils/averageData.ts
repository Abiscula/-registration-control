import moment from "moment";
import { contractProps } from "../types";

export function averageDate(contracts: contractProps[]) {
    let avgDates: number = 0
    contracts.forEach((contract: contractProps) => {
        let d1: string[] | any = contract.contractDate.split("/");
        let d2: string[] | any = contract.contractValidate.split("/");
        
        let diff = moment(new Date(d2[2], d2[1] - 1, d2[0])).diff(moment(new Date(d1[2], d1[1] - 1, d1[0])))
        let days = moment.duration(diff).asDays();
        avgDates += days
    })
    const timeService = avgDates / contracts.length
    return Math.trunc(timeService)
}