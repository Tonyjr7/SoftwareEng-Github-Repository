import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {

        const controller = new AbortController();
    
        fetch(url, { signal: controller.signal })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data from this resource');
            }
            setIsPending(true);
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name !== 'AbortError') {
                setIsPending(false);
                setError(err.message);
            }
        });
        return () => controller.abort();
    }, [url]);

    return { data, IsPending, error};
}

export default useFetch;

