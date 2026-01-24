// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// import User from "../models/User";
// import Car from "../models/Car";
// import Booking from "../models/Booking";
// import { connectDB } from "../lib/mongodb";
// dotenv.config();
// async function seed() {
//   await connectDB();

//   // Clear collections
//   await User.deleteMany({});
//   await Car.deleteMany({});
//   await Booking.deleteMany({});

//   // Seed Users
//   const passwordHash = await bcrypt.hash("123456", 10);

//   try {
//     const users = await User.insertMany([
//       {
//         name: "Toan",
//         email: "toan@example.com",
//         password: passwordHash,
//         role: "USER",
//         position: "Developer at XYZ Company",
//       },
//       {
//         name: "Linh",
//         email: "linh@example.com",
//         password: passwordHash,
//         role: "USER",
//         position: "Designer at ABC Company",
//       },
//       {
//         name: "Hoang",
//         email: "hoang@example.com",
//         password: passwordHash,
//         role: "USER",
//         position: "Product Manager at 123 Inc.",
//       },
//       {
//         name: "Minh",
//         email: "minh@example.com",
//         password: passwordHash,
//         role: "USER",
//         position: "Data Analyst at DataWorks",
//       },
//       {
//         name: "Admin",
//         email: "admin@example.com",
//         password: passwordHash,
//         role: "ADMIN",
//       },
//     ]);
//     console.log(
//       "Seeded users:",
//       users.map((u) => u.email),
//     );
//   } catch (error) {
//     console.log("Error seeding data", error);
//   }

//   mongoose.connection.close();
// }

// seed().catch((err) => {
//   console.error(err);
//   mongoose.connection.close();
// });
