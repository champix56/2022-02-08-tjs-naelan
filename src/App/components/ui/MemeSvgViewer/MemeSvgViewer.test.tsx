import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeSvgViewer from './MemeSvgViewer';
import { images, initialMeme as meme } from '../../../App';

describe('<MemeSvgViewer />', () => {
  test('it should mount', () => {
    render(<MemeSvgViewer meme={meme} image={images[0]} />);
    
    const memeSvgViewer = screen.getByTestId('MemeSvgViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});