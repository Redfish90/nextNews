import {getAllNews} from "@/lib/news";
import {notFound} from "next/navigation";

export default function ImagePage({params}) {
    const newsItemSlug = params.id;
    const newsItem = getAllNews().find(newsItem => newsItem.slug === newsItemSlug);

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
    )
}