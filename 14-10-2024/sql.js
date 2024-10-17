// Define base details for the 'users' table
const tableName = 'users';
const baseId = 12; // Starting ID after existing records
const numRecords = 989; // Number of records to generate

const baseName = 'Demo';
const baseEmail = 'sau.kum0227@gmail.com';
const basePassword = '123456';
const baseContact = '8755898402';
const baseAddress = 'patna';
const baseDob = '2000-01-01'; // Using a base date to increment from
const baseGender = ['M', 'F']; // Alternating genders
const status = 1;

// Construct the SQL statement
let sqlStatements = `INSERT INTO ${tableName} (id, name, email, password, contact, address, dob, gender, status) VALUES\n`;
let values = [];

for (let i = 0; i < numRecords; i++) {
  const recordId = baseId + i;
  const name = `${baseName}${i + 1}`;
  const email = `${baseEmail}`;
  const contact = baseContact;
  const address = baseAddress;
  const dob = `${2000 + (i % 20)}-${String((i % 12) + 1).padStart(
    2,
    '0'
  )}-${String((i % 28) + 1).padStart(2, '0')}`; // Cycling through years, months, and days
  const gender = baseGender[i % 2];

  values.push(
    `(${recordId}, '${name}', '${email}', '${basePassword}', '${contact}', '${address}', '${dob}', '${gender}', ${status})`
  );
}

// Join all values into one single SQL insert statement
sqlStatements += values.join(',\n') + ';\n';

// Output the SQL statement
console.log(sqlStatements);
