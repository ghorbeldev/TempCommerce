'use client';
import React, { useState } from 'react';
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaTwitter,
	FaFacebookF,
	FaLinkedinIn,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		try {
			// Replace with your API endpoint
			await new Promise(res => setTimeout(res, 1000));
			toast.success('Message sent successfully!');
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (err) {
			toast.error('Failed to send message.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<div className='flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-center p-6 lg:p-16 gap-10'>
				{/* Contact Info */}
				<div className='w-full lg:w-1/3 bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6'>
					<h2 className='text-3xl font-bold text-gray-800'>Get in Touch</h2>
					<p className='text-gray-600'>
						Reach out for questions, support, or business inquiries.
					</p>

					<div className='flex items-center gap-3 text-gray-700'>
						<FaMapMarkerAlt className='text-main-color-600 w-5 h-5' />
						<span>Shop 1: 123 Main Street, City</span>
					</div>
					<div className='flex items-center gap-3 text-gray-700'>
						<FaMapMarkerAlt className='text-main-color-600 w-5 h-5' />
						<span>Shop 2: 456 Second Ave, City</span>
					</div>
					<div className='flex items-center gap-3 text-gray-700'>
						<FaPhone className='text-main-color-600 w-5 h-5' />
						<span>+123 456 7890</span>
					</div>
					<div className='flex items-center gap-3 text-gray-700'>
						<FaEnvelope className='text-main-color-600 w-5 h-5' />
						<span>contact@example.com</span>
					</div>

					<div className='flex gap-4 mt-4'>
						<a
							href='#'
							className='p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition'
						>
							<FaFacebookF />
						</a>
						<a
							href='#'
							className='p-2 rounded-full bg-sky-400 text-white hover:bg-sky-500 transition'
						>
							<FaTwitter />
						</a>
						<a
							href='#'
							className='p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition'
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>

				{/* Contact Form */}
				<div className='w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-xl'>
					<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
						<div className='flex flex-col md:flex-row gap-4'>
							<input
								type='text'
								name='name'
								placeholder='Your Name'
								value={formData.name}
								onChange={handleChange}
								required
								className='border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-main-color-500 transition'
							/>
							<input
								type='email'
								name='email'
								placeholder='Your Email'
								value={formData.email}
								onChange={handleChange}
								required
								className='border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-main-color-500 transition'
							/>
						</div>
						<input
							type='text'
							name='subject'
							placeholder='Subject'
							value={formData.subject}
							onChange={handleChange}
							required
							className='border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-main-color-500 transition'
						/>
						<textarea
							name='message'
							placeholder='Your Message'
							value={formData.message}
							onChange={handleChange}
							required
							rows={6}
							className='border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-main-color-500 transition resize-none'
						></textarea>
						<button
							type='submit'
							disabled={loading}
							className='bg-main-color-600 text-white px-6 py-3 rounded-xl hover:bg-main-color-700 transition'
						>
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				</div>
			</div>

			{/* Maps Section */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:px-16 pb-16'>
				{/* Shop 1 Map */}
				<div className='relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg'>
					<iframe
						title='Shop 1 Location'
						className='w-full h-full border-0'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086093012831!2d-122.42018468468141!3d37.77928077975766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d0b604e0f%3A0x7f2f53bbde8c5c7!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1692200000000!5m2!1sen!2sus'
						allowFullScreen
						loading='lazy'
					/>
					<div className='absolute top-2 left-2 bg-main-color-600 text-white px-3 py-1 rounded shadow'>
						Shop 1
					</div>
				</div>

				{/* Shop 2 Map */}
				<div className='relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg'>
					<iframe
						title='Shop 2 Location'
						className='w-full h-full border-0'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.503028726194!2d-73.98749868459312!3d40.75889597932626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b56701f3%3A0x1f2b6b8c0b1829a3!2sTimes%20Square%2C%20NY!5e0!3m2!1sen!2sus!4v1692200000001!5m2!1sen!2sus'
						allowFullScreen
						loading='lazy'
					/>
					<div className='absolute top-2 left-2 bg-main-color-600 text-white px-3 py-1 rounded shadow'>
						Shop 2
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
