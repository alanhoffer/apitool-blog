import { useEffect, useState } from 'react';
import '../assets/css/homeView/homeView.css'

import Logo from '../assets/images/logo-black.png'
import BackArrow from '../assets/images/chevron-back-outline.svg'
import NextArrow from '../assets/images/chevron-forward-outline.svg'
import {NewsMiniCard} from '../components/homeView/NewsMiniCard';
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react/jsx-runtime'; 
import { useNavigate } from 'react-router-dom';

interface INews {
    author: string,
    title:string,
    content:string,
    description:string,
    urlToImage: string,
    publishedAt: Date,
}

export default function HomeView( ){

    const [news, setNews] = useState<INews[]>([])
    const [page, setPage] = useState(0)

    const navigate = useNavigate();


    async function getNews(){
        try{
            fetch('https://newsapi.org/v2/everything?q=beekeeping&from=2023-03-29&sortBy=publishedAt&apiKey=36f766169f5c4eaa87a8b8e30f2466c5')
            .then(res => res.json())
            .then(response => setNews(response.articles))
        }
        catch(error){
            alert(error)
        }
    }

    const filterNews = () => {
        const filteredNews = news.slice(0 + page, 5 + page) ;
        return filteredNews;
    }

    useEffect(() => {
        getNews()
    },[])

    return (
        <div className="homeView">
            <header className="header">
                <img src={Logo} alt='xd' />
            </header>
            { news.length >= 1 ?
            <section className="newsContainer">
                <h2>News</h2>
                <div className="latestNew">
                    <h3 className='newTitle'>{news[0].title}</h3>
                    <div className='newContent'>{news[0].content}</div>
                </div>
                <h3>More News</h3>
                <div className="newsSlider">
                    <div className='sliderButton Right' onClick={() => setPage(page => page + 1)}>
                        <img src={NextArrow} />
                    </div>
                    
                    {filterNews().map(news =>
                        <div className="cardContainer" onClick={() => navigate('news', {state: news})} >
                        <NewsMiniCard title={news.title} author={news.author} date={news.publishedAt} image={news.urlToImage} />
                        </div>
                    )}
                    <div className='sliderButton Left' onClick={() => setPage(page => page > 0 ?  page - 1: page)}>
                        <img src={BackArrow} /> 
                    </div>
                </div>
            </section>
            : null }
        </div>
    )
}