//we get the absolute path
const path = require('path');
const fs = require('fs');
const p = path.join(
    path.dirname(process.mainModule.filename),//we get a main module that changes dynamically
    'data',
    'card.json'
);


class Card {
    //add data to cart
    static async add(course) {
        const card = await Card.fetch();

        //find course index that we want to add
        const idx = card.courses.findIndex(c => c.id === course.id); //iteration, returns the index in the array
        const candidate = card.courses[idx];

        //check: the cart contains the course 'candidate' you want to add
        if (candidate) {
            //the 'candidate' is in the cart
            candidate.count++;
            card.courses[idx] = candidate;

        } else {
            //need to add 'candidate'
            course.count = 1;
            card.courses.push(course);
        }

        //find the total price of all courses in the cart
        card.price += +course.price;

        //write the object 'card' to a JSON file
        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }

            })
        })
    }


    //retrieve all data from the cart
    static async fetch() {
        return new Promise((resolve, reject) => { // the 'Promise' object links the 'create' and 'consume' codes together
            fs.readFile(p, 'utf-8', (err, content) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })

    }
}

module.exports = Card;
