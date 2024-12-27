import { useParams } from "react-router-dom";
import { Hero } from "../../components/Hero";
import { Title } from "../../components/Title";
import videos from "../../json/db.json"
import { NotFound } from "../NotFound";

export function Player() {
    const param = useParams();
    const video = videos.find((video) => video.id === Number(param.id));
    if (!video) return <NotFound />;
    return (
        <>
            <Hero banner="bg-banner-player" />
            <Title >
                <h1 className="">
                    Player
                </h1>
            </Title>
            <div>

            </div>
            <div className="flex justify-center py-10">
                <iframe
                    className="w-3/6 h-[31rem]"
                    src={video!.link}
                    title={video!.img}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </div>

        </>
    )
};
