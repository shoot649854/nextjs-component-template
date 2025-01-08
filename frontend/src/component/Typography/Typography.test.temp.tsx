// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Typography from './Typography';

// // Mock the scss module
// jest.mock('./Typography.module.scss', () => ({
// 	h1: 'h1-style',
// 	h2: 'h2-style',
// 	h3: 'h3-style',
// 	h4: 'h4-style',
// 	p: 'p-style',
// 	legend: 'legend-style',
// 	caption: 'caption-style',
// }));

// describe('Typography Component', () => {
// 	// Test default rendering for each variant
// 	test.each([
// 		['h1', 'h1'],
// 		['h2', 'h2'],
// 		['h3', 'h3'],
// 		['h4', 'h4'],
// 		['p', 'p'],
// 		['legend', 'legend'],
// 		['caption', 'caption'],
// 	])(
// 		'renders %s variant with correct element and styles',
// 		(variant, expectedElement) => {
// 			render(
// 				<Typography variant={variant as any}>
// 					Test {variant} content
// 				</Typography>
// 			);

// 			const element = screen.getByText(`Test ${variant} content`);
// 			expect(element.tagName.toLowerCase()).toBe(expectedElement);
// 			expect(element).toHaveClass(`${variant}-style`);
// 		}
// 	);

// 	// Test custom component override
// 	test('renders with custom component when specified', () => {
// 		render(
// 			<Typography
// 				component="article"
// 				variant="p"
// 			>
// 				Custom component content
// 			</Typography>
// 		);

// 		const element = screen.getByText('Custom component content');
// 		expect(element.tagName.toLowerCase()).toBe('article');
// 		expect(element).toHaveClass('p-style');
// 	});

// 	// Test custom className
// 	test('applies custom className alongside variant styles', () => {
// 		const customClass = 'custom-class';
// 		render(
// 			<Typography
// 				variant="p"
// 				className={customClass}
// 			>
// 				Custom class content
// 			</Typography>
// 		);

// 		const element = screen.getByText('Custom class content');
// 		expect(element).toHaveClass('p-style', customClass);
// 	});

// 	// Test children rendering
// 	test('renders complex children correctly', () => {
// 		render(
// 			<Typography variant="div">
// 				<span>Child 1</span>
// 				<span>Child 2</span>
// 			</Typography>
// 		);

// 		expect(screen.getByText('Child 1')).toBeInTheDocument();
// 		expect(screen.getByText('Child 2')).toBeInTheDocument();
// 	});

// 	// Test additional props passing
// 	test('passes additional props to component', () => {
// 		render(
// 			<Typography
// 				variant="p"
// 				data-testid="test-typography"
// 				aria-label="test label"
// 			>
// 				Props test content
// 			</Typography>
// 		);

// 		const element = screen.getByTestId('test-typography');
// 		expect(element).toHaveAttribute('aria-label', 'test label');
// 	});

// 	// Test all variants with custom component
// 	test.each([['h1'], ['h2'], ['h3'], ['h4'], ['p'], ['legend'], ['caption']])(
// 		'renders %s variant with div component correctly',
// 		(variant) => {
// 			render(
// 				<Typography
// 					variant={variant as any}
// 					component="div"
// 				>
// 					{variant} with div
// 				</Typography>
// 			);

// 			const element = screen.getByText(`${variant} with div`);
// 			expect(element.tagName.toLowerCase()).toBe('div');
// 			expect(element).toHaveClass(`${variant}-style`);
// 		}
// 	);
// });
