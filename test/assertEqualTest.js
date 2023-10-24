const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

// assertEqual tests
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// head tests
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// tail tests
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");