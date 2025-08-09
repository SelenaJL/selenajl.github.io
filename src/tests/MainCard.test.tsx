import { render, screen } from '@testing-library/react';
import { MainCard } from '../components/MainCard';

describe('MainCard', () => {
  it('renders title and text', () => {
    render(<MainCard title="Test Main Card Title" text="Test Main Card Text" />);
    expect(screen.getByText('Test Main Card Title')).toBeInTheDocument();
    expect(screen.getByText('Test Main Card Text')).toBeInTheDocument();
  });

  it('renders buttons if provided', () => {
    const buttons = [
      { logo: 'logo1.png', text: 'Button 1', link: 'https://example.com/1' },
      { logo: 'logo2.png', text: 'Button 2', link: 'https://example.com/2' },
    ];
    render(<MainCard title="Test Main Card Title" text="Test Main Card Text" buttons={buttons} />);
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });
});
