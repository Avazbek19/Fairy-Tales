import React, { useEffect, useState } from 'react'
import news from '../../repository/news'
import NewsComponent from '../../components/newsComponent/newsComponent'

export default function News() {
    const [newsList, setNewsList] = useState([])
    const [loading, setloading] = useState(false)


    async function getNews() {
        setloading(true)
        const currentNews = await news.getNewsList()
        setNewsList(currentNews)
        setloading(false)
    }

    useEffect(() => {
        getNews()
    }, [])
    return (
        (loading) ?
            <div className="spinner">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            <NewsComponent item={newsList} />
    )
}