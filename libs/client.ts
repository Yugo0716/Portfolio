import { createClient } from 'microcms-js-sdk';

export type GameReview = {
    id: string;
    title: string;
    hardware: string;
    releaseDate: string;
    concept: string;
    fun: string;
    idea: string;   
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

// レビューの一覧を取得
export const getReviews = async () => {
    const reviews = await client.getList<GameReview>({
    endpoint: "review"
    });
    return reviews;
}

// レビューの詳細を取得
export const getDetail = async (contentId: string) => {
    const review = await client.getListDetail<GameReview>({
        endpoint: "review",
        contentId,
    });
    return review;
};


