import Link from "next/link";
import { getReviews } from "../../../libs/client";

export default async function StaticPage() {
    const { contents } = await getReviews();

    if (!contents || contents.length === 0) {
        return <h1>No Contents</h1>;
    }

    return (
        <section id="reviews" className="relative -mt-20 pt-24 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Review</h1>
            <p className="mb-6">クリアしたことのあるゲームのコンセプト、面白さ、より面白くするアイデアを掲載しています。</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contents.map((review) => (
                    <Link
                        key={review.id}
                        href={`/game-review/${review.id}`}
                        className="flex flex-col justify-between h-full p-4 border border-lime-400 rounded shadow hover:bg-lime-50 transition"
                    >
                        <h2 className="text-xl font-bold text-lime-600 mb-2">{review.title}</h2>
                        <p className="text-gray-700 mb-1"><strong>ハードウェア:</strong> {review.hardware}</p>
                        <p className="text-gray-700 mb-1"><strong>発売日:</strong> {review.releaseDate}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
