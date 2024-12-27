import { Link } from "react-router-dom";

interface HeaderLinkProps {
    URL: string;
    children: React.ReactNode;
}

export function HeaderLink(props: HeaderLinkProps) {
    return (
        <>
            <Link to={props.URL} className="text-white text-lg p-4 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4">
                {props.children}
            </Link>
        </>
    )
};
