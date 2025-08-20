import { render, screen } from '@testing-library/react';
import { Footer } from '../components/Footer';

describe('Footer', () => {
  it('renders all the icons as links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);

    const mailLink = screen.getByAltText('mail.png').closest('a');
    expect(mailLink).toHaveAttribute('href', 'mailto:selenalatchman8@gmail.com');

    const linkedinLink = screen.getByAltText('linkedin.png').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/selena-lourenco/');

    const githubLink = screen.getByAltText('github.png').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/SelenaJL');

    const instagramLink = screen.getByAltText('instagram.png').closest('a');
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/selsfosterdiaries/');

    const youtubeLink = screen.getByAltText('youtube.png').closest('a');
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/@selenajazz');
  });

  it('renders the mail icon with a tooltip', () => {
    render(<Footer />);
    const mailIcon = screen.getByAltText('mail.png');
    expect(mailIcon).toBeInTheDocument();
    expect(mailIcon.closest('a')).toHaveAttribute('title', 'Once a Latchman, always a Latchman  😉');
  });
});
