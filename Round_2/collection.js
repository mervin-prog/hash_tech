const client = require('./elasticSearch');

// Function to create a collection
async function createCollection(collectionName) {
  const lowerCaseCollectionName = collectionName.toLowerCase();
  try {
    await client.indices.create({
      index: lowerCaseCollectionName,
    });
    console.log(`Index created: ${lowerCaseCollectionName}`);
  } catch (error) {
    console.error('Error creating collection:', error);
  }
}



async function delEmpByEmployeeId(collectionName, employeeId) {
  const lowerCaseCollectionName = collectionName.toLowerCase();
  try {
    // First, search for the document by Employee ID
    const searchResponse = await client.search({
      index: lowerCaseCollectionName,
      body: {
        query: {
          match: {
            'Employee ID': employeeId,
          },
        },
      },
    });

    console.log(searchResponse.hits.hits);

    // Check if any documents were found
    if (searchResponse.hits.total.value > 0) {
      const docId = searchResponse.hits.hits[0]._id; // Get the document ID
      
      // Now delete the document using the document ID
      await client.delete({
        index: lowerCaseCollectionName,
        id: docId,
      });
      console.log(`Employee with ID ${employeeId} deleted successfully`);
    } else {
      console.log(`Employee with ID ${employeeId} not found`);
    }
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
}


module.exports = { createCollection, delEmpByEmployeeId};
