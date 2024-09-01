import Link from "next/link";
import {DUMMY_NEWS} from "@/dummy-news";

export default function NewsPage() {
    return <>
        <h1>The News Page</h1>
        <ul className="news-list">
            {DUMMY_NEWS.map((newList) => (
                <li key={newList.id}>
                    <Link href={`/news/${newList.slug}`}>
                        <img src={`images/news/${newList.image}`} alt={newList.title}/>
                        <span>{newList.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </>
}