const assertEqual = require('../assertEqual');
const head = require('../head');

// head tests
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");