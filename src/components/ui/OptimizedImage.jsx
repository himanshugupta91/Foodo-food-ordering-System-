import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({
    src,
    alt = '',
    className = '',
    fallbackSrc = '/placeholder-image.jpg',
    showLoader = true,
    aspectRatio = null, // e.g., '16/9', '4/3', '1/1'
    objectFit = 'cover', // 'cover', 'contain', 'fill'
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [inView, setInView] = useState(false);
    const imgRef = useRef(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px', // Start loading 50px before image is visible
            }
        );

        observer.observe(imgRef.current);

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    const handleLoad = () => {
        setLoaded(true);
        setError(false);
    };

    const handleError = () => {
        setError(true);
        setLoaded(true);
    };

    const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className}`}
            style={aspectRatioStyle}
        >
            {/* Loading Skeleton */}
            {!loaded && showLoader && (
                <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
                    <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            )}

            {/* Actual Image */}
            {inView && (
                <img
                    src={error ? fallbackSrc : src}
                    alt={alt}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`w-full h-full transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ objectFit }}
                    loading="lazy"
                    {...props}
                />
            )}

            {/* Error State */}
            {error && loaded && (
                <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center text-neutral-500">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Image not available</span>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
