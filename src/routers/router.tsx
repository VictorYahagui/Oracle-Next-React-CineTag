import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Base } from "../pages/Base";
import { NotFound } from "../pages/NotFound";
import { Favorites } from "../pages/Favorites";
import { Player } from "../pages/Player";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}  >
                    <Route index element={<Home />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
};
