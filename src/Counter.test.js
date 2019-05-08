import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from './Counter';
const config = { baseUrl: 'https://localhost:5001' };
beforeEach(cleanup);

it('renders correctly', () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should not be able to decrement initially', () => {
  const { getByText } = render(<Counter />);
  expect(getByText('-').attributes.getNamedItem('disabled')).toBeDefined();
});

it('should be able to increment initially', () => {
  const { getByText } = render(<Counter config={config} />);
  expect(getByText('+').attributes.getNamedItem('disabled')).toBeNull();
});

it('should increment the number when clicking the + button', () => {
  const { getByText, getByLabelText } = render(<Counter config={config} />);
  fireEvent.click(getByText('+'));
  expect(getByLabelText('counter').innerHTML).toBe('1');
});

it('should be able to decrement after incrementing', () => {
  const { getByText } = render(<Counter config={config} />);
  fireEvent.click(getByText('+'));
  expect(getByText('-').attributes.getNamedItem('disabled')).toBeNull();
});

it('should decrement the number when clicking the - button', () => {
  const { getByText, getByLabelText } = render(<Counter config={config} />);
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('-'));
  expect(getByLabelText('counter').innerHTML).toBe('1');
});
