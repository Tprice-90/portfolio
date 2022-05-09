export interface Content {
    id: number;
    contentType: string;
    name: string;
    description: string;
    imgURL: string;
}

export interface JobContent extends Content {
    date: string;
}