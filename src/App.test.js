import { render, screen,fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('renders counter and increments, decrement and resets', () => {
  const {getByTestId}= render(<Counter />);
  const linkElement = screen.getByText(/counter/i);
  expect(linkElement).toBeInTheDocument();

  const incrementBtn = getByTestId("increment")
  const decrementBtn = getByTestId("decrement")

  fireEvent.click(incrementBtn)
  fireEvent.click(incrementBtn)
  fireEvent.click(incrementBtn)
  expect(getByTestId("countVal")).toHaveTextContent("3")
  fireEvent.click(decrementBtn)
  expect(getByTestId("countVal")).toHaveTextContent("2")


});
