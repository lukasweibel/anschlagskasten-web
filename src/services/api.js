import axios from "axios";

const baseUrl = "https://4ecb53c6.eu-gb.apigw.appdomain.cloud/anschlagskasten-test"

export function getAnschlaege() {
    let anschlaege = [];
    axios
        .get(
            baseUrl + "/anschlaege"
        )
        .then((response) => {
            anschlaege = response.data.entries;
        })
        .catch((error) => {
            console.error(error);
        });
    return anschlaege;
}

export function initializeApp() {

}

export const api = {
    getAnschlaege
};