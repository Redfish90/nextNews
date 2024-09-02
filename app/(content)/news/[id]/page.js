import {notFound} from "next/navigation";
import {getAllNews} from "@/lib/news";
import Link from "next/link";

export default function NewsDetailPage({params}) {
    const newsId = params.id
    const newsList = getAllNews()
    const newsItem = newsList.find(news => news.slug === newsId)

    if (!newsItem) {
        notFound()
    }

    return <article className="news-article">
        <header>
            <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </Link>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
    </article>
}