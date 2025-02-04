// Bu yerda serverga so'rov jo'natish uchun funksiyalar bo'ladi.

import { MOVIES_ENDPOINT } from "../../constants";

/**
 * Bu funksiya bazadan barcha filmlarni ma'lumotni yuklab keladi.
 * @param {*} endpoint - buyerda backendga link bo'ladi (masanlan: https://localhost:3000/movies)
 */

async function getAllMovies(endpoint) {
    try {
        const reponse = await fetch(endpoint, {
            method: "GET",
        })

        if (!reponse.ok) {
            throw new Error(reponse.statusText)
        }

        return await reponse.json()
    } catch (error) {
        return error
    }
}

/**
 * Ma'lumot bazasidan id orqali kinoni topib beradi
 * @param {*} id - Kinoning idsi
 */

async function getMoviesWithId(id)  {
    const movies = await getAllMovies(MOVIES_ENDPOINT)
    return movies.find(movie => movie.id == id)
}

async function creatAccount (endpoint, userData) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...userData
        })
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return {
        status: true,
        message: "Created Account"
    }
    
}

async function getUsers (endpoint) {
    const response = await fetch(endpoint)

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return await response.json()
}

export { getAllMovies, getMoviesWithId, creatAccount, getUsers }