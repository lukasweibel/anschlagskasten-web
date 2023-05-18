import { writable } from 'svelte/store';
import { api } from "../services/api.js";

export const city = writable('New York')