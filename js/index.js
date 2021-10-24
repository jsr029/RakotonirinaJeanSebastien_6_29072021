import databaseAvailable from './main.js';
import launchIndex from './launchIndex.js';
import launchMenu from './launchMenu.js';

databaseAvailable.then(function(database) {
    launchIndex(database);
    launchMenu(database);
    console.log(database);
});
