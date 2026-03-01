
export enum TCategory {
    DESIGN = "DESIGN",
    SALES = "SALES",
    MARKETING = "MARKETING",
    FINANCE = "FINANCE",
    TECHNOLOGY = "TECHNOLOGY",
    ENGINEERING = "ENGINEERING",
    BUSINESS = "BUSINESS",
    HUMAN_RESOURCE = "HUMAN_RESOURCE"
};

export enum TCompany {
    REVOLUT = "REVOLUT",
    DROPBOX = "DROPBOX",
    PITCH = "PITCH",
    BLINKIST = "BLINKIST",
    CLASSPASS = "CLASSPASS",
    CANVA = "CANVA",
    GODADDY = "GODADDY",
    TWITTER = "TWITTER"
}

export interface IJob {
    id: number;
    title: string;
    company: TCompany;
    location: string;
    category: TCategory;
    type: string;
    description: string;
}