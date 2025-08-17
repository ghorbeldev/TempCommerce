// app/api/category/list/route.js
import connectDB from '@/config/db';
import Category from '@/models/Category';
import { NextResponse } from 'next/server';

export async function GET() {
	await connectDB();
	const categories = await Category.find().sort({ name: 1 });
	return NextResponse.json({ success: true, categories });
}
