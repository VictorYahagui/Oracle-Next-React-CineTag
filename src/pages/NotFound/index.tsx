import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function NotFound() {
    return (
        <section className="flex gap-5 flex-col items-center">
            <div className="flex flex-col">
                <h1 className="text-5xl font-extrabold" >Not Found 404</h1>
                <p className="text-xl">Sorry, the page you're looking for doesn't exist.</p>
            </div>
            <Link to="/">
                <Button text="Back" />
            </Link>
        </section>
    )
};
