import { AccordianEntity } from "./accordianEntity.model";

export class Banner {
    BannerId: number
    accordian?: (AccordianEntity)[] | null = []
    Created: string
    LastUpdated: string
}
