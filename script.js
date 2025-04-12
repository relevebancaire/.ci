// JavaScript for dynamic page loading
function loadPage(page) {
    const contentDiv = document.getElementById('content');

    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${page}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>${error.message}</p>`;
        });
}
