const { createCollection , delEmpByEmployeeId} = require('./collection');
const { indexData } = require('./dataIndexing');
const {getEmpCount, searchByColumn , getDepFacet} = require('./searchOperations');

let v_nameCollection = 'Hash_Me';
let v_phoneCollection = 'Hash-83';

// Execution
async function execute(){

  // await createCollection(v_nameCollection);
  // await createCollection(v_phoneCollection);

  

  // await indexData(v_nameCollection, 'Department');
   
   await indexData(v_phoneCollection, 'Gender');
   
   await getEmpCount(v_phoneCollection);
  // await delEmpByEmployeeId(v_nameCollection, 'E02003'); 
  // await getEmpCount(v_nameCollection);

  // await searchByColumn(v_nameCollection, 'Department', 'IT');
  // await searchByColumn(v_nameCollection, 'Gender', 'Male');
  // await searchByColumn(v_phoneCollection, 'Department', 'IT');
  // await getDepFacet(v_nameCollection);
  // await getDepFacet(v_phoneCollection);
}
execute();
