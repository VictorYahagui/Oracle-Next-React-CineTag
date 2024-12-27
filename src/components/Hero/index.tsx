
interface HeroProps {
    banner: string;
}
export function Hero(props: HeroProps) {
    return (
        <>
            <div className={`${props.banner} h-64 w-full bg-no-repeat bg-cover`}>

            </div>
        </>
    )
};
