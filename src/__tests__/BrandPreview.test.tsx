import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrandPreview } from '../components/BrandPreview';

describe('BrandPreview', () => {
    it('renders gym name input', () => {
        render(<BrandPreview />);
        const input = screen.getByPlaceholderText('brand_preview.gym_name_placeholder');
        expect(input).toBeInTheDocument();
    });

    it('updates gym name on input change', () => {
        render(<BrandPreview />);
        const input = screen.getByPlaceholderText('brand_preview.gym_name_placeholder');
        fireEvent.change(input, { target: { value: 'My Gym' } });
        expect(input).toHaveValue('My Gym');
    });

    it('renders color selection buttons', () => {
        render(<BrandPreview />);
        const colorButtons = document.querySelectorAll('button[style*="background"]');
        expect(colorButtons.length).toBeGreaterThan(0);
    });
});
