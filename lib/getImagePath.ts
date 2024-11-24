const getImagePath = (path: string, isBackdrop: boolean): string => {
    return path
        ? `http://image.tmdb.org/t/p/${isBackdrop ? "original" : "w500"}/${path}`
        : "https://i.ibb.co/9VxyNYc/DALL-E-2024-11-21-03-33-32-A-minimalist-logo-design-for-a-movie-streaming-website-named-FLIXNOM-The.png";
};

export default getImagePath;
