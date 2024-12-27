import { useState, useEffect } from 'react';
import { VideosType } from '../pages/Home';

export function useFetch(url: string) {
    const [data, setData] = useState<VideosType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Erro ao buscar os dados');
                const result = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading, error };
}