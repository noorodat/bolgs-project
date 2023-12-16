import axios from "axios";
import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
            .then(res => {
                if (checkForBlogErrors(res)) {
                    setData(res.data);
                    setIsLoading(false);
                    setError(null);
                }
                else {
                    throw new Error("Can't load data");
                }
            })
            .catch(err => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
        }, 500)
    }, [url]);

    // Errors checking
    const checkForBlogErrors = (res) => {
        if (res.status >= 200 && res.status < 300) {
            return true
        }
        else {
            return false;
        }
    }

    return { data, isLoading, error };

}

export default useFetch;