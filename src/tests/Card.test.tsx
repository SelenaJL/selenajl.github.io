import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';
import { MemoryRouter } from 'react-router-dom';

describe('Card', () => {
  it('renders with title and text', () => {
    render(<Card title="Test Title" text="Test Text" image="test-image.jpg" />);
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

  it('renders links in the text', () => {
    render(<Card title="Test Title" text='This is some text with a <a href="https://example.com">link</a>' image="test-image.jpg" />);
    expect(screen.getByText('link')).toBeInTheDocument();
    expect(screen.getByText('link').closest('a')).toHaveAttribute('href', 'https://example.com');
  });

  it('renders as a clickable card when button prop is provided', () => {
    const button = { logo: 'logo.png', text: 'Button Text', link: 'https://example.com/button' };
    render(
      <MemoryRouter>
        <Card title="Test Title" text="Test Text" image="test-image.jpg" button={button} />
      </MemoryRouter>
    );

    const cardLink = screen.getByRole('link', { name: /Test Title/i });
    expect(cardLink).toBeInTheDocument();
    expect(cardLink).toHaveAttribute('href', 'https://example.com/button');

    expect(screen.getByAltText('Test Title logo')).toBeInTheDocument();
    expect(screen.getByAltText('Test Title logo')).toHaveAttribute('src', 'logo.png');

    expect(screen.queryByText('Button Text')).not.toBeInTheDocument();
  });

  it('does not render as a clickable card when button prop is not provided', () => {
    render(<Card title="Test Title" text="Test Text" image="test-image.jpg" />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
