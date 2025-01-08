import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';
import styles from './Sidebar.module.scss';

describe('Sidebar Component', () => {
	test('renders the Sidebar with logo', () => {
		render(<Sidebar />);
		const logoElement = screen.getByText('AI SaaS');
		expect(logoElement).toBeInTheDocument();
		expect(logoElement).toHaveClass(styles.logo);
	});

	test('renders all navigation links', () => {
		render(<Sidebar />);

		const links = [
			{ text: 'Home', href: '/dashboard' },
			{ text: 'Projects', href: '/dashboard/projects' },
			{ text: 'Datasets', href: '/dashboard/datasets' },
			{ text: 'Model Training', href: '/dashboard/model-training' },
			{ text: 'Deployment', href: '/dashboard/deployment' },
			{ text: 'Settings', href: '/dashboard/settings' },
			{ text: 'Help Center', href: '/dashboard/help-center' },
		];

		links.forEach((link) => {
			const linkElement = screen.getByRole('link', { name: link.text });
			expect(linkElement).toBeInTheDocument();
			expect(linkElement).toHaveAttribute('href', link.href);
		});
	});

	test('applies the correct sidebar class', () => {
		const { container } = render(<Sidebar />);
		const navElement = container.querySelector('nav');
		expect(navElement).toHaveClass(styles.sidebar);
	});
});
