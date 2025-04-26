export const isProduction = () => {
    return process.env.NODE_ENV === 'production';
}

export const getContext = () => {
    return isProduction() ? '/portfolio' : '/';
}