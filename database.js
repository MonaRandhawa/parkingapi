const pouch = require('pouchdb')
const parkingDb = pouch('http://admin:9WDocaHWVS4U@52.183.116.191:5984/parking')
const find = require('pouchdb-find')
pouch.plugin(find);

module.exports.getParkingLots = async () =>{
    try {
        // get docs that with property of docType equal to parkingLot
        const results = await parkingDb.find({
            selector: {
                docType: 'parkingLot'
            },
            // fields: ['_id', 'name'],
            // sort: ['name']
          });

          console.log(results.docs);
          return results.docs;
    } 
    catch(ex) { 
        console.log('error for parkinglot find', ex);
    }
}

module.exports.getParkingLotById = async (parkingLotId) => {
    try {
        // get the document by its id
        const parkingLot = await parkingDb.get(parkingLotId);
        console.log('retrieved doc', parkingLot);
        return parkingLot;
    }
    catch(ex) { 
        console.log('error for get document', ex);
    }    
} 

module.exports.getUserByEmail = async (email) =>{
    try {
        // get docs that with property of docType equal to parkingLot
        const results = await parkingDb.find({
            selector: {
                docType: 'user',
                email: email
            },
            // fields: ['_id', 'name'],
            // sort: ['name']
          });

          console.log(results.docs);

          return results.docs.length === 1? results.docs[0]:null;
    } 
    catch(ex) { 
        console.log('error for user find', ex);
    }
}


module.exports.updateParkingLot = async(parkingLot)=>{
    try {
        parkingLot.changed = true;
        // put it back with the change
        await parkingDb.put(parkingLot); // put a second time this time to update
    } 
    catch(ex) { 
        console.log('error on update', ex); 
    }
}

