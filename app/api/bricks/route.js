// export async function GET() {
//     const res = await fetch("https://data.mongodb-api.com/...", {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     });
//     const data = await res.json();

import { db } from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const db = await pool.getConnection();
    // const query = "select * from bricks";
    // const rows = await db.execute(query);
    // db.release();
    const [results] = await db.execute("select * from bricks", data);
    console.log(results);
    return NextResponse.json(db);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
