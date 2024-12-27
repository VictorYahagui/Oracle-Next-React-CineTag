import { Link } from 'react-router-dom';
import favorite from '../../assets/favorite.png'
import unFavorite from '../../assets/unFavorite.png'
import { useFavorites } from '../../contexts/favorites';
import { VideosType } from '../../pages/Home'

interface CardProps {
    video: VideosType;
}
export function Card(props: CardProps) {
    const { favorites, toggleFavorite } = useFavorites();
    return (
        <>
            <div className='w-72 pb-4 mt-2 bg-gray-300 flex flex-col justify-between'>
                <Link to={`/${props.video.id}`}>
                    <img className='w-full h-full object-cover'
                        src={props.video.img}
                        alt={props.video.title} />
                </Link>

                <div className='h-28 flex flex-col justify-around gap-6 px-4'>
                    <h2 className='h-5'>{props.video.title}</h2>
                    <img className='w-6'
                        onClick={() =>
                            toggleFavorite(props.video)}
                        src={favorites.some((fav) => fav.id === props.video.id)
                            ? favorite
                            : unFavorite}
                        alt="icon" />
                </div>
            </div>
        </>
    )
};
