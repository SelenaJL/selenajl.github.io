import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ClickableCard } from '../components/ClickableCard';

describe('ClickableCard', () => {
  it('renders with arrow, title, and text', () => {
    render(
      <MemoryRouter>
        <ClickableCard title="Test Title" text="Test Text" route="/test" />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Arrow')).toBeInTheDocument();
    expect(screen.getByAltText('Arrow')).toHaveAttribute('src', '/icons/arrow.png');
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
    
  });

  it('is a link to the correct route', () => {
    render(
      <MemoryRouter>
        <ClickableCard title="Test Title" text="Test Text" route="/test" />
      </MemoryRouter>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });
});
