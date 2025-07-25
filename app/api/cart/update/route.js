import connectDB from '@/config/db';
import User from '@/models/User';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		console.log('work here');
		const { userId } = getAuth(request);
		const { cartData } = await request.json();
		await connectDB();
		console.log(cartData);

		const user = await User.findById(userId);
		user.cartItems = cartData;
		await user.save();
		return NextResponse.json({
			success: true,
			message: 'Cart updated successfully',
		});
	} catch (error) {
		return NextResponse.json({ success: false, message: error.message });
	}
}
