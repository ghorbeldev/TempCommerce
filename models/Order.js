import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		ref: 'User',
		required: true,
	},
	items: [
		{
			product: {
				type: String,
				required: true,
				ref: 'product',
			},
			quantity: {
				type: Number,
				required: true,
			},
		},
	],
	amount: { type: Number, required: true },
	address: { type: String, required: true, ref: 'address' },
	status: { type: String, required: true, default: 'Order Placed' },
	date: { type: Number, required: true },
});

const Order = mongoose.models.order || mongoose.model('order', orderSchema);

export default Order;
