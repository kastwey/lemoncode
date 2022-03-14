import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import App from './App';

test('renders learn react accessibility', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
