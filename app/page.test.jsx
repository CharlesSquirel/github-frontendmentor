import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';
import Home from './page.tsx';

describe('Page unit tests', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders the page', () => {
    const app =
      screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });
  it('renders the header', () => {
    const header =
      screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  it('renders the search component', () => {
    const searchComponent =
      screen.getByTestId('form');
    expect(
      searchComponent
    ).toBeInTheDocument();
    const searchInput =
      screen.getByRole('textbox');
    expect(
      searchInput
    ).toBeInTheDocument();
    expect(searchInput.value).toBe('');
    const submitButton =
      screen.getByRole('button', {
        name: 'Search',
      });
    expect(
      submitButton
    ).toBeInTheDocument();
    expect(
      submitButton.disabled
    ).toBeTruthy();
  });
});
