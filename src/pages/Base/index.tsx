import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FavoritesProvider } from "../../contexts/favorites";

export function Base() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
};
