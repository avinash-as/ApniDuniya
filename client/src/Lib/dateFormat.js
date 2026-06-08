export const dateFormat = (data) => {
    return new Date(data).toLocaleString('en-US',{
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
};