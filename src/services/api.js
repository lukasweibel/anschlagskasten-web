import axios from "axios";
import { activeAnschlaege } from "../stores/store.js";
import { personsArray, allAnschlaege } from "../stores/personstore.js";

const baseUrl = "http://localhost:8081"

export function getAnschlaege() {
    let anschlaege = [];
    axios
        .get(
            baseUrl + "/anschlaege"
        )
        .then((response) => {
            anschlaege = response.data;
            activeAnschlaege.set(anschlaege);
            allAnschlaege.set(anschlaege);
        })
        .catch((error) => {
            console.error(error);
        });
}

export function getPersons() {
    let persons = [];
    axios
        .get(
            baseUrl + "/persons"
        )
        .then((response) => {
            persons = response.data;
            personsArray.set(persons);
        })
        .catch((error) => {
            console.error(error);
        });
}

export function saveAnschlag(anschlag) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                baseUrl + "/anschlaege", anschlag
            )
            .then((response) => {
                console.log(response);
                getAnschlaege();
                resolve(resolve);
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

export function saveComment(id, newComment) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                baseUrl + "/anschlaege/comment/" + id, newComment
            )
            .then((response) => {
                console.log(response);
                getAnschlaege();
                resolve(resolve);
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

export function initializeApp() {

}

export const api = {
    getAnschlaege,
    getPersons,
    saveAnschlag,
    saveComment
};