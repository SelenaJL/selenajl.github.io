import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button', () => {
  it('renders a button with a link and text', () => {
    const buttonProps = {
      text: 'Test Button',
      link: 'https://example.com',
    };
    render(<Button {...buttonProps} />);

    const buttonLink = screen.getByRole('link');
    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute('href', 'https://example.com');
  });

  it('renders a button with a logo if provided', () => {
    const buttonProps = {
      logo: 'test-logo.png',
      text: 'Test Button',
      link: 'https://example.com',
    };
    render(<Button {...buttonProps} />);

    const buttonLink = screen.getByRole('link');
    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute('href', 'https://example.com');

    const buttonLogo = screen.getByAltText('Test Button');
    expect(buttonLogo).toBeInTheDocument();
    expect(buttonLogo).toHaveAttribute('src', 'test-logo.png');
  });
});
