import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  test('render correctly', () => {
    render(<Button>Button text</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Button text');
  });
});
