// app/api/category/add/route.js
import connectDB from '@/config/db';
import Category from '@/models/Category';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
	const { userId } = getAuth(request);
	if (!userId)
		return NextResponse.json(
			{ success: false, message: 'Unauthorized' },
			{ status: 401 }
		);

	const { name } = await request.json();
	if (!name)
		return NextResponse.json(
			{ success: false, message: 'Name is required' },
			{ status: 400 }
		);

	await connectDB();
	const existing = await Category.findOne({ name });
	if (existing)
		return NextResponse.json({
			success: false,
			message: 'Category already exists',
		});

	const newCategory = await Category.create({ name });
	return NextResponse.json({ success: true, category: newCategory });
}
