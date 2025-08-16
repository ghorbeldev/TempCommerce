import connectDB from '@/config/db';
import authSeller from '@/lib/authSeller';
import Product from '@/models/Product';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(request) {
	try {
		const { userId } = getAuth(request);
		const isSeller = await authSeller(userId);
		if (!isSeller) {
			return NextResponse.json({ success: false, message: 'Not authorized' });
		}

		await connectDB();

		const { searchParams } = new URL(request.url);
		const search = searchParams.get('search') || '';
		const category = searchParams.get('category') || '';
		const shop = searchParams.get('shop') || '';
		const sort = searchParams.get('sort') || 'newest';

		const query = { image: { $exists: true, $ne: [] } };

		if (category) query.categories = category;
		if (shop) query.shop = shop;
		if (search) {
			query.$or = [
				{ name: { $regex: search, $options: 'i' } },
				{ description: { $regex: search, $options: 'i' } },
			];
		}

		let products = await Product.find(query);

		if (sort === 'newest') products = products.sort((a, b) => b.date - a.date);
		else if (sort === 'oldest')
			products = products.sort((a, b) => a.date - b.date);
		else if (sort === 'lowprice')
			products = products.sort((a, b) => a.offerPrice - b.offerPrice);
		else if (sort === 'highprice')
			products = products.sort((a, b) => b.offerPrice - a.offerPrice);

		return NextResponse.json({ success: true, products });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false, message: error.message });
	}
}
