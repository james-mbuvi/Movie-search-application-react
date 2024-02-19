import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


jest.mock('./components/SearchMovie', () => () => <div data-testid="search-movie" />);
jest.mock('./components/MovieResult', () => () => <div data-testid="movie-result" />);
jest.mock('./Authntification', () => ({ onAuthenticated }) => <button onClick={onAuthenticated}>Mock Auth Button</button>);
jest.mock('./components/Videos', () => () => <div data-testid="videos" />);

describe('App component', () => {
  test('renders light mode by default', () => {
    render(<App />);
    const themeSwitch = screen.getByRole('checkbox', { name: /Light Mode/i });
    expect(themeSwitch).toBeInTheDocument();
  });

  test('toggles theme from light to dark', () => {
    render(<App />);
    const themeSwitch = screen.getByRole('checkbox', { name: /Light Mode/i });

    fireEvent.click(themeSwitch);

    expect(themeSwitch.checked).toBe(true);
  });

  
});
