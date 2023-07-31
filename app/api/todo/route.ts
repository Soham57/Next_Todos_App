import { NextResponse } from "next/server";
import db from '@/utils/db'
export const GET = async (request:Request)=>{
const todos= await debugger.todo.findMany({})
return NextResponse.json({data:todos})
} 