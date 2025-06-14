import { worksData } from "app/data/worksData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Pagination({id}: {id: string}) {
    const currentIndex = worksData.findIndex((worksData)=>worksData.id === id);

    const prev = worksData[currentIndex-1];
    const next = worksData[currentIndex+1];
    return(
        <div className="flex justify-between mt-8">
            {prev ? (
                <a href={`/works/${prev.id}`} className="text-lime-600 flex items-center underline">
                <FaAngleLeft/> {prev.title}
                </a>
            ) : (
                <span />
            )}
            {next ? (
                <a href={`/works/${next.id}`} className="text-lime-600 flex items-center underline">
                {next.title} <FaAngleRight/>
                </a>
            ) : (
                <span />
            )}
    </div>
    )
}