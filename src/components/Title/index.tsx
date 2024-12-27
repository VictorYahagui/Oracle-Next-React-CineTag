
interface TitleProps {
    children: React.ReactNode;
}
export function Title(props: TitleProps) {
    return (
        <>
            <div className="text-center text-3xl font-medium p-4">
                {props.children}
            </div>
        </>
    )
};
