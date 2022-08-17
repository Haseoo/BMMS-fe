const MATERIAL_BASE_URL = 'http://localhost:8080/api/v1/material'

export const getMaterials = async () => {
    return fetch(MATERIAL_BASE_URL);
}