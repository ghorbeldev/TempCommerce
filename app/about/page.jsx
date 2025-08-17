// app/about/page.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
	return (
		<>
			<Navbar />
			<div className='min-h-screen bg-white text-gray-800'>
				{/* Hero Section */}
				<section className='relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-gradient-to-r from-main-color-500/90 to-main-color-700/90 text-white rounded-b-3xl shadow-lg'>
					<div className='flex-1 text-center md:text-left'>
						<h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
							About <span className='text-yellow-300'>Tunimode</span>
						</h1>
						<p className='mt-6 text-lg md:text-xl max-w-lg mx-auto md:mx-0'>
							We bring you the best products, curated with passion and crafted
							for modern living. Our mission is to make shopping simple,
							enjoyable, and stylish.
						</p>
					</div>
					<div className='flex-1 mt-10 md:mt-0 flex justify-center'>
						<Image
							src='/about-hero.png' // 👉 replace with your image
							alt='Tunimode About'
							width={400}
							height={400}
							className='rounded-2xl shadow-lg'
						/>
					</div>
				</section>

				{/* Story Section */}
				<section className='px-6 md:px-16 lg:px-24 py-20'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-main-color-600'>
						Our Story
					</h2>
					<p className='max-w-3xl mx-auto text-center text-lg text-gray-600 leading-relaxed'>
						Tunimode was founded with the belief that shopping should be
						effortless and fun. From humble beginnings, we’ve grown into a
						community-driven brand, serving thousands of happy customers across
						the globe. Our journey is powered by creativity, innovation, and a
						commitment to quality.
					</p>
				</section>

				{/* Mission Section */}
				<section className='px-6 md:px-16 lg:px-24 py-20 bg-gray-50 rounded-3xl'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<Image
							src='/mission.png' // 👉 replace with your image
							alt='Our Mission'
							width={500}
							height={350}
							className='rounded-2xl shadow-md'
						/>
						<div>
							<h2 className='text-3xl md:text-4xl font-bold mb-6 text-main-color-600'>
								Our Mission
							</h2>
							<p className='text-lg text-gray-600 leading-relaxed'>
								We aim to deliver not just products but experiences that inspire
								our customers. Every item we showcase is carefully selected to
								ensure it meets our high standards of quality, design, and
								functionality.
							</p>
						</div>
					</div>
				</section>

				{/* Call To Action */}
				<section className='text-center py-16 px-6 md:px-16 lg:px-24'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>
						Join Our Journey
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
						We’re always evolving and innovating. Be part of our growing
						community and discover the future of shopping with Tunimode.
					</p>
					<button
						onClick={() => (window.location.href = '/products')}
						className='bg-main-color-600 hover:bg-main-color-700 text-white px-8 py-3 rounded-full font-medium transition'
					>
						Explore Products
					</button>
				</section>
			</div>
		</>
	);
}
