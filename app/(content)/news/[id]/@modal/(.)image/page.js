'use client'

import {getAllNews} from "@/lib/news";
import {notFound, useRouter} from "next/navigation";

export default function InterceptedImagePage({params}) {
    const router = useRouter();

    const newsItemSlug = params.id;
    const newsItem = getAllNews().find(newsItem => newsItem.slug === newsItemSlug);

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
}