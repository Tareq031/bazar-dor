

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";

// const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
// const db = client.db("bazar-dor"); // Replace with your database name

// export const auth = betterAuth({

//      emailAndPassword: { 
//     enabled: true, 
//   }, 
  


//   database: mongodbAdapter(db, {
//     client,
//   }),
// });







import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.BETTER_AUTH_DB_URL;

if (!uri) {
  throw new Error("BETTER_AUTH_DB_URL is missing");
}

// Reuse MongoDB connection during Next.js development
const globalForMongo = globalThis;

const client =
  globalForMongo.mongoClient ||
  new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

const db = client.db("bazar-dor");

export const auth = betterAuth({
  appName: "Bazar Dor",

  baseURL: process.env.BETTER_AUTH_URL,

  secret: process.env.BETTER_AUTH_SECRET,

  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});
