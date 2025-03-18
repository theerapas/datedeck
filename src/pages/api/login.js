import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      await client.connect();
      const database = client.db(process.env.MONGODB_DB_NAME);
      const collection = database.collection('users');

      // Hash the password before storing it
      const hashedPassword = /* your hashing function */(password);

      const result = await collection.insertOne({ email, password: hashedPassword });
      res.status(200).json({ message: 'User logged in successfully', result });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}