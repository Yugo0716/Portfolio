import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProps<T> {
  items: T[];
  id: string;
  getId: (item: T) => string;
  getTitle: (item: T) => string;
  pathPrefix: string; // 例：'/works'や'/game-review'
}

export default function Pagination<T>({
  items,
  id,
  getId,
  getTitle,
  pathPrefix,
}: PaginationProps<T>) {
  const currentIndex = items.findIndex((item) => getId(item) === id);
  const prev = items[currentIndex - 1];
  const next = items[currentIndex + 1];

  return (
    <div className="flex justify-between mt-8">
      {prev ? (
        <a href={`${pathPrefix}/${getId(prev)}`} className="text-lime-600 flex items-center underline">
          <FaAngleLeft /> {getTitle(prev)}
        </a>
      ) : (
        <span />
      )}
      {next ? (
        <a href={`${pathPrefix}/${getId(next)}`} className="text-lime-600 flex items-center underline">
          {getTitle(next)} <FaAngleRight />
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}
