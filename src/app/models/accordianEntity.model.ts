import { PluginListEntity } from "./pluginListEntity.model";

export class AccordianEntity {
    Localization: string
    CategoyId: number
    CategoyHeading: string
    IsMandatory: boolean
    CategoyText: string
    PluginList?: (PluginListEntity)[] | null = []
    ExtraSettings: string
}
