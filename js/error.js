function displayError(message) {
    if(!message) {
        message = "Unknown error has occured when calling the API"
    }
    return `<div class="error">${error}</div>`;
}