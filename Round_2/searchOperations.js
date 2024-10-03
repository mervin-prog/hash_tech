
const client = require('./elasticSearch');

// Function to get employee count
async function getEmpCount(collectionName) {
  const lowerCaseCollectionName = collectionName.toLowerCase();
  try {
    const response = await client.count({
      index: lowerCaseCollectionName,
    });
    console.log(`Total employees: ${response.count}`);
  } catch (error) {
    console.error('Error getting employee count:', error);
  }
}


// Function to search by a specific column value
async function searchByColumn(collectionName, columnName, columnValue) {
  const lowerCaseCollectionName = collectionName.toLowerCase();
  try {
    const response = await client.search({
      index: lowerCaseCollectionName,
      body: {
        query: {
          match: {
            [columnName]: columnValue,
          },
          
        },
      },
    });
    //For neat appearence of all data matches.
    const results = response.hits.hits.map(hit => ({
      employeeid: hit._source['Employee ID'],
      fullname: hit._source['Full Name'],
      job:hit._source['Job Title'],
      salary:hit._source['Annual Salary']
    }));
    console.log(results);
  } 
  catch (error) {
    console.error('Error searching data:', error);
  }
}



// Function to get facet of departments
async function getDepFacet(collectionName) {
  const lowerCaseCollectionName = collectionName.toLowerCase();
  try {
    const response = await client.search({
      index: lowerCaseCollectionName,
      body: {
        aggs: {
          departments: {
            terms: {
              field: 'Department.keyword',
            },
          },
        },
        size: 0,
      },
    });
    console.log(response.aggregations.departments.buckets);
  } catch (error) {
    console.error('Error getting department facet:', error);
  }
}

module.exports = { searchByColumn, getEmpCount, getDepFacet };
