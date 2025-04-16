export interface SiteData {
    id: string;
    userId: string;
    siteName: string;
    createdAt: string;
    header: HeaderData;
    sections: SectionData[];
    footer: FooterData;
}

export interface HeaderData {
    type: "1" | "2";
    title: string;
    subtitle: string;
    buttonText: string;
    logo?: string;
}

export interface FooterData {
    type: "1" | "2";
    title: string;
    address: string;
    socialMedia: boolean;
    copyright: string;
}

export interface BaseSectionData {
    type: "1" | "2" | "3" | "4";
    orderIndex: number;
}

export interface HeroSectionData extends BaseSectionData {
    type: "1";
    title: string;
    description: string;
    imageUrl: string;
}

export interface FeaturesSectionData extends BaseSectionData {
    type: "2";
    features: Array<{ title: string; description: string }>;
}

export interface TestimonialsSectionData extends BaseSectionData {
    type: "3";
    testimonials: Array<{ author: string; text: string }>;
}

export interface ContactSectionData extends BaseSectionData {
    type: "4";
    email: string;
    phone: string;
    address: string;
}

export type SectionData = HeroSectionData | FeaturesSectionData | TestimonialsSectionData | ContactSectionData;