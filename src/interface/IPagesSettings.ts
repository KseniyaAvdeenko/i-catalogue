export type blockHeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type FontWeight = 400 | 500 | 600 | 700 | 800 | 900

export interface IHeadingBase {
    blockHeadingType: blockHeadingTypes;
    headingFontSize: number;
    headingFontColor: string;
    headingFontWeight: FontWeight;
    headingContent: string;
}

export interface IHeading extends IHeadingBase {
    id: number;
}

export interface IMainPageSetting {
    id: number;
    title: string;
    background: string;
    prodCardBg: string;
    cardBorder: boolean;
    cardBorderColor: string;
    cardBorderWidth: number;
    headingSettings: IHeading
}


export interface IPageSettingBase {
    navLink: string;
    slug: string;
    background: string;
    isBlockWithProds: boolean;
    prodBackground: string;
    cardBorder: boolean;
    cardBorderColor: string;
    cardBorderWidth: number;
    content: string | null
}

export interface IPageSetting extends IPageSettingBase {
    id: number;
    headingSettings: IHeading;
}

