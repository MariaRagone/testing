import { createButton } from './button.js';
import { screen } from '@testing-library/dom';

describe('createButton', () => {
  it('should create a button element', () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    const button = createButton();
    expect(button.textContent).toBe('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    const button = createButton();
    button.click();
    expect(button.textContent).toBe('Clicked!');
  });
});
