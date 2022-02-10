import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ConnectedMemeThumbnail } from './MemeThumbnail';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('<MemeThumbnail />', () => {
  /*test('it should mount', () => {
    render(<Provider store={store}><ConnectedMemeThumbnail /></Provider>);
    
    const memeThumbnail = screen.getByTestId('MemeThumbnail');

    expect(memeThumbnail).toBeInTheDocument();
  });
  */
});