const data = require('../Data'); 

// Function to search by name
function searchByName(name) {
    return data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
}

// Function to search by email
function searchByEmail(email) {
    return data.filter(item => item.email.toLowerCase().includes(email.toLowerCase()));
}

module.exports = { searchByName, searchByEmail };
