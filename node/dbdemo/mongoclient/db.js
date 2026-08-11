// db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select the database
    const db = client.db('demoDB');

    // Select the collection
    const collection = db.collection('students');

    // Insert a document
    await collection.insertOne({
        name: 'Ragini Singh',
        age: 19,
        enrolled: 'yes'
    });

    console.log("Document inserted successfully");
} catch (err) {
    console.error("Error:", err);
} finally {
    await client.close();
    console.log("MongoDB connection closed");
}