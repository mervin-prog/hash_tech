const fs = require('fs');
const csv = require('csv-parser');
const client = require('./elasticSearch');
const path = require('path');

// Use path.join to create the absolute path
const filePath = path.join(__dirname, 'Employee_data.csv');

// Function to index data, excluding a specific column
async function indexData(collectionName, excludeColumn) {
  const lowerCaseCollectionName = collectionName.toLowerCase();
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      delete row[excludeColumn];
      results.push(row);
    })
    .on('end', async () => {
      for (let employee of results) {
        await client.index({
          index: lowerCaseCollectionName,
          body: employee,
        });
      }
      console.log('Data indexed successfully');
    });
}

module.exports = { indexData };
