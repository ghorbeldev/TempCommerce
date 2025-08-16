import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
	const { currency, router } = useAppContext();

	return (
		<div
			onClick={() => {
				router.push('/product/' + product._id);
				scrollTo(0, 0);
			}}
			className='flex flex-col items-start gap-2 max-w-[220px] w-full cursor-pointer group'
		>
			{/* Product Image */}
			<div className='relative bg-gray-100 rounded-xl overflow-hidden w-full h-52 flex items-center justify-center shadow-sm hover:shadow-lg transition'>
				<Image
					src={product.image[0].url}
					alt={product.name}
					className='object-contain w-full h-full transition-transform duration-300 group-hover:scale-105'
					width={800}
					height={800}
				/>
				{/* Wishlist Button */}
				<button className='absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-main-color-100 transition'>
					<Image className='h-4 w-4' src={assets.heart_icon} alt='heart_icon' />
				</button>
			</div>

			{/* Product Info */}
			<div className='flex flex-col gap-1 w-full'>
				<p className='text-sm md:text-base font-semibold truncate'>
					{product.name}
				</p>

				{/* Shop Name */}
				{product.shop && (
					<p className='text-xs text-main-color-600 font-medium truncate'>
						{product.shop}
					</p>
				)}

				{/* Categories */}
				{product.categories?.length > 0 && (
					<p className='text-xs text-gray-500/80 truncate'>
						{product.categories.join(', ')}
					</p>
				)}

				{/* Price */}
				<p className='text-base font-bold mt-1'>
					{product.offerPrice > 0 ? product.offerPrice : product.price}
					<small className='text-sm text-gray-500 ml-1'>
						<b className='font-bold text-main-color-900'>{currency}</b>
					</small>
				</p>
			</div>

			{/* Buy Now Button */}
			<button
				onClick={e => {
					e.stopPropagation();
					router.push('/product/' + product._id);
				}}
				className='mt-2 w-full px-4 py-2 text-xs text-gray-700 border border-gray-300 rounded-full hover:bg-main-color-100 transition'
			>
				View Product
			</button>
		</div>
	);
};

export default ProductCard;
