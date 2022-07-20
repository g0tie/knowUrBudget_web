import * as DB from './database';

function seedTypes() {

    if (DB.getDatas('types').length > 0) return;

    [
        "Alimentaire",
        "Vehicule",
        "Divertissement",
        "Santé",
        "Vêtements",
        "Sport"
    ].forEach(type => DB.insertData("types", {name:type}));
}

export {
    seedTypes
}