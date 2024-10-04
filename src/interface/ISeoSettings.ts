export type SeoTagType = 'meta_tag'| 'pixel'

export interface ISeoSettingsBase {
    tag: SeoTagType;
    tagName: string;
    property: string;
    content: string;
    code: string;
}

export interface ISeoSettings extends ISeoSettingsBase{
    id: number
}