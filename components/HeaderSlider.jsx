'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HeaderSlider() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch('/api/product/latest', {
					cache: 'force-cache',
				});
				const data = await res.json();
				setProducts(data.products || []);
			} catch (err) {
				console.error('Failed to fetch products:', err);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className='w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-10'>
			{loading ? (
				// Skeleton Loader
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 animate-pulse'>
					{[1, 2, 3].map(i => (
						<div
							key={i}
							className='h-64 bg-gray-200 rounded-2xl shadow-md'
						></div>
					))}
				</div>
			) : (
				<Swiper
					modules={[Autoplay, Pagination]}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
					loop={true}
					className='w-full rounded-2xl shadow-lg'
				>
					{products.map(product => (
						<SwiperSlide key={product._id}>
							<div
								className='relative w-full h-[70vh] sm:h-[60vh] md:h-[75vh] cursor-pointer group'
								onClick={() => router.push(`/product/${product._id}`)}
							>
								<Image
									src={product.image?.[0]?.url || '/placeholder.png'}
									alt={product.name}
									fill
									className='object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105'
									priority
								/>
								{/* Overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl flex items-end p-6 sm:p-10'>
									<div className='text-white space-y-2 sm:space-y-3'>
										<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg'>
											{product.name}
										</h2>
										<p className='hidden sm:block text-sm md:text-base text-gray-200 line-clamp-2'>
											{product.description}
										</p>
										<button className='mt-3 bg-main-color-600 hover:bg-main-color-700 transition px-5 py-2 rounded-full font-medium shadow-lg'>
											View Product
										</button>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
}
