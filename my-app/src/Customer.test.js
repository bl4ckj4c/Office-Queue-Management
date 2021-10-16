import { render, screen } from '@testing-library/react';
import Customer from './Components/Customer';

test('Snapshot', () => {
  const tree = render(
    <Customer> </Customer>
  );
  expect(tree).toMatchSnapshot();
});

test.todo('Test that button trigger the right service');