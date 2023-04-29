import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/newsView/newsView.css'
import BackIcon from '../assets/images/arrow-back-outline.svg'

export default function NewsView() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {author, content, description, publishedAt, title, urlToImage} = state;
    return (
        <div className="newsView">
            <div className="backButton" onClick={() => navigate(-1)}>
                <img src={BackIcon} />
            </div>
            <img className="newsImage" src={urlToImage} />
            <h3 className='newsTitle'>{title}</h3>
            <div className='newsContent'>{content}</div>
            <div className='newsDateAuthor'>
                <h4>{publishedAt}</h4>
                <h4>{author}</h4>
            </div>
        </div>
    )
}