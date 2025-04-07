import { useState, useEffect, useCallback } from 'react';
import { CatImageResponse } from './pub.types';

export const useCatImage = () => {
    const [image, setImage] = useState<CatImageResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [enabled, setEnabled] = useState<boolean>(false);
    const [autoRefresh, setAutoRefresh] = useState<boolean>(false);

    const fetchImage = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
            const data = await response.json();
            setImage(data[0]);
        } catch (error) {
            console.error('Error fetching cat image:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (autoRefresh && enabled) {
            const interval = setInterval(() => {
                fetchImage();
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [autoRefresh, enabled, fetchImage]);

    useEffect(() => {
        if (enabled) {
            fetchImage();
        }
    }, [enabled, fetchImage]);

    return {
        image,
        loading,
        enabled,
        setEnabled,
        autoRefresh,
        setAutoRefresh,
        fetchImage,
    };
};
