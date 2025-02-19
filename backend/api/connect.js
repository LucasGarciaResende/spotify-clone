import { MongoClient } from "mongodb";

const URI = "mongodb+srv://lightsl:1234@cluster1.mpaj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(URI);

export const db = client.db('spotifyAudio');
