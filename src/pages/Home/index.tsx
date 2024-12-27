import { Card } from "../../components/Card";
import { Hero } from "../../components/Hero";
import { Title } from "../../components/Title";
import { useFetch } from "../../Hook/useFetch";

export type VideosType = {
    id: number,
    title: string,
    img: string,
    link: string,
    favorite: boolean,
}
export function Home() {
    const { data: videos, loading, error } = useFetch('');

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    return (
        <>
            <Hero banner="bg-banner-home" />
            <main className="w-[1440px] mx-auto max-w-full">
                <Title>
                    <h1>Um lugar para guardar seus vídeos e filmes!</h1>
                </Title>
                <div className="flex gap-4 justify-center flex-wrap pb-8">
                    {videos.map((video: VideosType) => (
                        <Card key={video.id} video={video} />
                    ))}
                </div>
            </main>
        </>

    )
};
