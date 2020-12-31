import React from 'react';
import {render} from '@testing-library/react-native';

import App from './App';

test('render', () => {
  const {queryByText} = render(<App />);
  const result = queryByText('hello');

  expect(result).not.toBeNull();
});
