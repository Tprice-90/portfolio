export interface Content {
    id: number;
    contentType: string;
    name: string;
    description: string;
}

export interface JobContent extends Content {
    date: string;
}