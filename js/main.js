var requestURL = '/json/fisheye.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
/**
 * Returns a promise the resolves when window fires the load event
 */
function onload() {
    return new Promise(function(resolve, reject) {
        // Resolve if window is already loaded by the time this is called.
        if (document.readyState === 'complete') { return resolve(); }
        // If reached here, window not loaded. Resolve when it is.
        window.addEventListener("load", resolve);
    });
}
var databaseAvailable = onload().then(function() {
    const datas = request.response;
    const database = JSON.parse(datas);
    return database;
});
// databaseAvailable is a Promise object that resolves once datas
// is executed and the result returned. It resolves with the returned value.
// The handler passed to .then will be called once databaseAvailable resolves.
// Which is always after datas was executed.

export default databaseAvailable;