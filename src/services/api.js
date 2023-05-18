import axios from "axios";
import { anschlaegeArray } from "../stores/anschlagStore.js";

const baseUrl = "https://4ecb53c6.eu-gb.apigw.appdomain.cloud/anschlagskasten-test"

export function getAnschlaege() {
    let anschlaege = [];
    axios
        .get(
            baseUrl + "/anschlaege"
        )
        .then((response) => {
            anschlaege = response.data.entries;
            anschlaegeArray.set(anschlaege);
            return anschlaege;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function initializeApp() {

}

export const api = {
    getAnschlaege
};