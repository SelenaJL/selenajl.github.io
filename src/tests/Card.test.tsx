import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';

describe('Card', () => {
  it('renders with title and text', () => {
    render(<Card title="Test Title" text="Test Text" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('renders an image if provided', () => {
    render(<Card title="Test Title" text="Test Text" image="test-image.jpg" />);
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
    expect(screen.getByAltText('Test Title')).toHaveAttribute('src', 'test-image.jpg');
  });

  it('renders a date if provided', () => {
    render(<Card title="Test Title" text="Test Text" image="test-image.jpg" date="2023-10-26" />);
    expect(screen.getByText('2023-10-26')).toBeInTheDocument();
  });

  it('renders a button if provided', () => {
    const button = { logo: 'logo.png', text: 'Button', link: 'https://example.com' };
    render(<Card title="Test Title" text="Test Text" button={button} />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders links in the text', () => {
    render(<Card title="Test Title" text='This is some text with a <a href="https://example.com">link</a>' />);
    expect(screen.getByText('link')).toBeInTheDocument();
    expect(screen.getByText('link').closest('a')).toHaveAttribute('href', 'https://example.com');
  });
});
