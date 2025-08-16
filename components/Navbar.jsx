'use client';
import React, { useState } from 'react';
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from '@/assets/assets';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useClerk, UserButton } from '@clerk/nextjs';

const Navbar = () => {
	const { isSeller, router, user, cartItems } = useAppContext();
	const { openSignIn } = useClerk();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<nav className='sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200'>
			<div className='flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 text-gray-700'>
				{/* Logo */}
				<Image
					className='cursor-pointer w-28 md:w-32 text-main-color-600 fill-current'
					onClick={() => router.push('/')}
					src={assets.logo}
					alt='Tunimode logo'
				/>

				{/* Desktop Menu */}
				<div className='hidden md:flex items-center gap-6 lg:gap-10'>
					<Link href='/' className='hover:text-main-color-600 transition'>
						Home
					</Link>
					<Link
						href='/all-products'
						className='hover:text-main-color-600 transition'
					>
						Shop
					</Link>
					<Link href='/about' className='hover:text-main-color-600 transition'>
						About Us
					</Link>
					<Link
						href='/contact'
						className='hover:text-main-color-600 transition'
					>
						Contact
					</Link>

					{Boolean(user) && isSeller && (
						<button
							onClick={() => router.push('/seller')}
							className='text-xs border px-4 py-1.5 rounded-full hover:bg-main-color-600 hover:text-white transition'
						>
							Seller Dashboard
						</button>
					)}
				</div>

				{/* Right Section */}
				<div className='flex items-center gap-4 md:gap-6'>
					{/* Search */}
					<div className='relative hidden md:block'>
						{showSearch ? (
							<input
								type='text'
								placeholder='Search...'
								className='border rounded-full px-3 py-1 w-40 md:w-56 outline-none transition'
								onBlur={() => setShowSearch(false)}
								autoFocus
							/>
						) : (
							<Image
								className='w-5 h-5 cursor-pointer'
								src={assets.search_icon}
								alt='search'
								onClick={() => setShowSearch(true)}
							/>
						)}
					</div>

					{/* Cart */}
					{user && (
						<button onClick={() => router.push('/cart')} className='relative'>
							<CartIcon />
							{cartItems?.length > 0 && (
								<span className='absolute -top-2 -right-2 bg-main-color-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
									{cartItems.length}
								</span>
							)}
						</button>
					)}

					{/* User Account */}
					{user ? (
						<UserButton afterSignOutUrl='/' />
					) : (
						<button
							onClick={openSignIn}
							className='flex items-center gap-2 hover:text-main-color-600 transition'
						>
							<Image src={assets.user_icon} alt='user icon' />
							<span className='hidden md:inline'>Account</span>
						</button>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			<div className='flex items-center justify-around md:hidden border-t border-gray-200 py-2 bg-white'>
				<button onClick={() => router.push('/')}>
					<HomeIcon />
				</button>
				<button onClick={() => router.push('/all-products')}>
					<BoxIcon />
				</button>
				<button onClick={() => router.push('/cart')} className='relative'>
					<CartIcon />
					{cartItems?.length > 0 && (
						<span className='absolute -top-1 -right-2 bg-main-color-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>
							{cartItems.length}
						</span>
					)}
				</button>
				<button onClick={user ? () => router.push('/my-orders') : openSignIn}>
					<BagIcon />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
