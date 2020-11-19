

const parkingLakeLouise = {
    name: "Lake Louise",
    capacity: 15,
    stallsTaken: 0,
    hours: {
        monday: "8:00 - 22:00",
        tuesday: "8:00 - 22:00",
        wednesday: "8:00 - 22:00",
        thursday: "8:00 - 22:00",
        friday: "8:00 - 22:00",
        saturday: "8:00 - 22:00",
        sunday: "8:00 - 22:00",
    },
    responsible: "007",
}

const parkingMoraineLake = {
    name: "Moraine Lake",
    capacity: 15,
    stallsTaken: 6,
    hours: {
        monday: "8:00 - 22:00",
        tuesday: "8:00 - 22:00",
        wednesday: "8:00 - 22:00",
        thursday: "8:00 - 22:00",
        friday: "8:00 - 22:00",
        saturday: "8:00 - 22:00",
        sunday: "8:00 - 22:00",
    },
    responsible: "001",
}

const parkingOverflow = {
    name: "Overflow",
    capacity: 15,
    stallsTaken: 15,
    hours: {
        monday: "8:00 - 22:00",
        tuesday: "8:00 - 22:00",
        wednesday: "8:00 - 22:00",
        thursday: "8:00 - 22:00",
        friday: "8:00 - 22:00",
        saturday: "8:00 - 22:00",
        sunday: "8:00 - 22:00",
    },
    responsible: "002",
}

/**
 * Array of parking zones
 * [0] - Lake Louise
 * [1] - Moraine Lake
 * [2] - Overflow
 */
const parkingLots = [parkingLakeLouise, parkingMoraineLake, parkingOverflow]

const user1 = {
    id: 1,
    name: 'Bob Denver',
    email: 'islandguy@gmail.com',
    password: 'iloveginger'
}

const user2 = {
    id: 2,
    name: 'Mary Astor',
    email: 'maltesesparrow@gmail.com',
    password: 'dontrustmeever'
}

const user3 = {
    id: 3,
    name: 'Denzel Washington',
    email: 'kingkongaintgot@gmail.com',
    password: 'crookedcop'
}

const users = [user1,user2,user3]


const express = require('express')      // we're using request
const cors=require('cors')              // cors helps us call from other websites.. in particular if we want to run from 127.0.0.1 instead of localhost
const app = express()                   // create the express app

app.use(express.json());                // handles reading json, which we need for set posts
app.use(cors());                        // open cors policy... allows us to use either http://localhost or http://127.0.0.1

var server = app.listen(8082, function(){   // listen on port 8081
    var port = server.address().port
    console.log(`Server started on ${port}`)  // open by showing the port in case I forgot
})

app.post('/signin',(req, res) => {
    let bodyEmail = req.body.email;
    let bodyPassword = req.body.password;
    let foundUser = users.find(user => user.email=== bodyEmail);
    
    if (foundUser) {
        if (foundUser.password ===bodyPassword) {
            let sendUser = {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email
            }
            res.send(sendUser);
        }
        else {
            res.status(400).send('error logging in');
        }
    }
    else {
        res.status(400).send('error logging in');  
    }

});




