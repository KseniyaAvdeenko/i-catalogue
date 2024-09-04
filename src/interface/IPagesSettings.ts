import {INavLinks, INavLinksBase} from "./INavbar";

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
    cardQuantityInRow: number;
    headingSettings: IHeading
}


export interface IPageContentBase {
    content: string;
    contentLayout: string;
}

export interface IPageContent extends IPageContentBase {
    id: number;
}

export interface IPageSettingBase {
   slug: string;
   background: string;
   isBlockWithProds: boolean;
   prodBackground: string;
   cardQuantityInRow: number
}

export interface IPageSettingCreation extends IPageSettingBase {
    headingSettings: IHeadingBase
    link: INavLinksBase
}

export interface IPageSetting extends IPageSettingBase {
    id: number;
    link:INavLinks
    headingSettings: IHeading;
}
