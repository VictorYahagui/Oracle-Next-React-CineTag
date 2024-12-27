import { createContext, useContext, useState, ReactNode } from "react";
import { VideosType } from "../pages/Home";

// Tipo do contexto
interface FavoritesContextType {
    favorites: VideosType[];
    toggleFavorite: (video: VideosType) => void;
}

// Valor inicial do contexto
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Provider
interface FavoritesProviderProps {
    children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
    const [favorites, setFavorites] = useState<VideosType[]>([]);

    function toggleFavorite(newFavorite: VideosType) {
        setFavorites((prevFavorites) => {
            const isAlreadyFavorite = prevFavorites.some((item) => item.id === newFavorite.id);
            if (isAlreadyFavorite) {
                // Remove o item dos favoritos
                return prevFavorites.filter((item) => item.id !== newFavorite.id);
            } else {
                // Adiciona o item aos favoritos
                return [...prevFavorites,
                {
                    ...newFavorite,
                    favorite: true
                }];
            }
        });
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// Hook customizado para usar o contexto
export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider");
    }
    return context;
}
