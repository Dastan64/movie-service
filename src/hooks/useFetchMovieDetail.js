import { useEffect, useState } from "react";

export function useFetchMovieDetail(url, id) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.REACT_APP_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false)
            }).catch(error => setError(error)).finally(setIsLoading(false));
    }, [url])
    return { data, error, isLoading }
}