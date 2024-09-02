import Link from "next/link";
import {getAllNews} from "@/lib/news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
    const newsList = getAllNews()
    return <>
        <h1>The News Page</h1>
        <NewsList news={newsList}/>
    </>
}