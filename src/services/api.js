import axios from "axios";
import { activeAnschlaege } from "../stores/store.js";
import { personsArray, orderedAnschlaege } from "../stores/personstore.js";

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
        })
        .catch((error) => {
            console.error(error);
        });
}

export function getOrderedAnschlaege() {
    let anschlaege = [];
    axios
        .get(
            baseUrl + "/anschlaege/ordered"
        )
        .then((response) => {
            anschlaege = response.data;
            orderedAnschlaege.set(anschlaege);
            console.log(orderedAnschlaege)

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

export function addAnschlagToPerson(personId, anschlagId) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                baseUrl + "/persons/add/" + personId + "/" + anschlagId
            )
            .then((response) => {
                console.log(response);
                resolve(resolve);
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

export function removeAnschlagFromPerson(personId, anschlagId) {
    return new Promise((resolve, reject) => {
        axios
            .delete(
                baseUrl + "/persons/remove/" + personId + "/" + anschlagId
            )
            .then((response) => {
                console.log(response);
                resolve(resolve);
            })
            .catch((error) => {
                console.error(error);
            });
    });
}

export const api = {
    getAnschlaege,
    getPersons,
    saveAnschlag,
    saveComment,
    getOrderedAnschlaege,
    addAnschlagToPerson,
    removeAnschlagFromPerson
};