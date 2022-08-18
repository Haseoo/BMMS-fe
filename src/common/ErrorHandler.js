export const DEFAULT_ERROR_MSG = 'An error has occurred, please contact the administrator';

export const getErrorResponseMessage = (response) => {
    if(!response?.message) {
        return DEFAULT_ERROR_MSG;
    }
    return response.message;
}