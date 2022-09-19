import endpoints from './endpoints';
import customFetch from './customFetch'

export const getAllPokemonFetch = async () => {
    let response = await fetch(`${endpoints.pokemon}/?limit=151`);
    return await response.json();
}

export const getSpecificPokemonFetch = async (specificUrl) => {
    let response = await fetch(`${specificUrl}`);
    return await response.json();
}

export const getSpecificPokemonSpeciesFetch = async (specificUrl) => {
    let specificApi = await getSpecificPokemonFetch(`${specificUrl}`);
    let response = await fetch(`${specificApi.species.url}`);
    return await response.json();
}