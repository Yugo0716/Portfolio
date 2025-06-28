import { getDetail, getReviews } from "../../../../libs/client";
import Pagination from "components/pagination";
import Image from "next/image";

export async function generateStaticParams() {
  const { contents } = await getReviews();

  const paths = contents.map((review) => ({
    id: review.id,
  }));
  return [...paths];
}

export default async function StaticDetailPage(promise: { params: Promise<{ id: string }> }) {
  const { id } = await promise.params;
  const review = await getDetail(id);
  const { contents: reviewList } = await getReviews();

  return (
    <div className="max-w-3xl mx-auto space-y-6 p-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold">{review.title}</h1>
      </div>

      <div className="space-y-2">
        <p>
          <strong>ハードウェア：</strong> {review.hardware}
        </p>
        <p>
          <strong>発売日：</strong> {review.releaseDate}
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">ゲームのコンセプト</h2>
        <div
          className="prose space-y-2"
          dangerouslySetInnerHTML={{
            __html: review.concept,
          }}
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">ゲームの面白さ</h2>
        <div
          className="prose space-y-2"
          dangerouslySetInnerHTML={{
            __html: review.fun,
          }}
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">より面白くするアイデア</h2>
        <div
          className="prose space-y-2"
          dangerouslySetInnerHTML={{
            __html: review.idea,
          }}
        />
      </div>

      
<Pagination
  items={reviewList} 
  id={id}
  getId={(item) => item.id}
  getTitle={(item) => item.title}
  pathPrefix="/game-review"
/>
    </div>
  );
}
