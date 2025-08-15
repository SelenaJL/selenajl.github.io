import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Page } from '../pages/Page';

describe('Page', () => {
  const mockCardsContent = [
    { title: 'Card 1', text: 'Text 1', image: '' },
    { title: 'Card 2', text: 'Text 2', image: '' },
  ];

  it('renders the correct number of cards', () => {
    render(<Page mainCardContent={{ title: '', text: '' }} cardsContent={mockCardsContent} />);
    expect(screen.getAllByText(/card/i)).toHaveLength(2);
    expect(screen.getByText('Text 1')).toBeInTheDocument();
    expect(screen.getByText('Text 2')).toBeInTheDocument();
  });

  it('renders the main card content if provided', () => {
    const mainCardContent = { title: 'Main Card Title', text: 'Main Card Text' };
    render(<Page cardsContent={[]} mainCardContent={mainCardContent} />);
    expect(screen.getByText('Main Card Title')).toBeInTheDocument();
    expect(screen.getByText('Main Card Text')).toBeInTheDocument();
  });

  it('renders clickable cards if provided', () => {
    const clickableCardsContent = [
      { title: 'Clickable Card 1', text: 'Text 1', route: '/route1' },
      { title: 'Clickable Card 2', text: 'Text 2', route: '/route2' },
    ];
    render(
      <MemoryRouter>
        <Page mainCardContent={{ title: '', text: '' }} clickableCardsContent={clickableCardsContent} />
      </MemoryRouter>
    );
    expect(screen.getByText('Clickable Card 1')).toBeInTheDocument();
    expect(screen.getByText('Clickable Card 2')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/route1');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/route2');
  });
});