import { writable } from 'svelte/store';

const ACCESS_TOKEN_KEY = 'access_token';

const storedAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

export const accessToken = writable(storedAccessToken);

accessToken.subscribe(($accessToken) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, $accessToken);
});