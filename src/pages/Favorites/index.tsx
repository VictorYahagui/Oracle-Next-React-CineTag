import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { Title } from "../../components/Title";
import { VideosType } from "../Home";
import { useFavorites } from "../../contexts/favorites";

export function Favorites() {
    const { favorites } = useFavorites();
    return (
        <>
            <Hero banner="bg-banner-favoritos" />
            <Title>
                <h1 className="">
                    Meus Favoritos
                </h1>
            </Title>
            <div className="flex gap-4 justify-center flex-wrap">
                {favorites.map((fav: VideosType) => (
                    <Card key={fav.id} video={fav} />
                ))}
            </div>
        </>
    )
};
