import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pouch = require('pouchdb')
const parkingDb = pouch('http://admin:admin@127.0.0.1:5984/parking')
const find = require('pouchdb-find')
pouch.plugin(find);

const getParkingLots = async () =>{
    try{
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
    } catch(ex)
    { 
        console.log('error for all_docs', ex)
    }
}

const getUserByEmail = async (email) =>{
    try{
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
    } catch(ex)
    { 
        console.log('error for all_docs', ex)
    }
}

export default {
    getParkingLots: getParkingLots,
    getUserByEmail: getUserByEmail
}