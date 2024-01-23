type Article = {
    id: string;
    titolo: string;
    riassunto: string;
    foto: string;
    creazione: string;
    giorno: string;
    orario: string;
    numeroFoto: number;
}

export type cardArticle = Article[];

export type detailArticle = {
    blog: Article;
    paragrafi: {
        titoloParagrafo: string | null;
        testoParagrafo: string | null;
        foto: string | null;
    }[];
    tags: string[];
};
