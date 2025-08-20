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

  it('renders the photo stack if provided', () => {
    const photos = ['/path/to/photo1.jpg', '/path/to/photo2.jpg'];
    render(
      <MemoryRouter>
        <ClickableCard title="Test Title" text="Test Text" route="/test" photoStack={photos} />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Stack photo 1')).toBeInTheDocument();
    expect(screen.getByAltText('Stack photo 1')).toHaveAttribute('src', '/path/to/photo1.jpg');
    expect(screen.getByAltText('Stack photo 2')).toBeInTheDocument();
    expect(screen.getByAltText('Stack photo 2')).toHaveAttribute('src', '/path/to/photo2.jpg');
  });
});
