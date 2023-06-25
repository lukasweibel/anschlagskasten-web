export function setCookie(key, value) {
    const expires = new Date();
    const days = 7;
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    let cookieString = `${key}=${value};expires=${expires.toUTCString()};path=/;SameSite=None;Secure`;
    document.cookie = cookieString;
}

export function getCookie(key) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(key + "=")) {
            return cookie.substring(key.length + 1);
        }
    }
    return null;
}

export function formatDate(date) {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("de-DE");
}

export function nullCheckForDisplay(input) {
    if (input == null) {
        return "-";
    } else {
        return input;
    }
}

export const common = {
    getCookie,
    setCookie,
    formatDate,
    nullCheckForDisplay
};