import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeSvgViewer from './MemeSvgViewer';
import {  initialMeme as meme } from '../../../App';
import { I_memeImage } from '../../../interfaces/I_meme';
export const images: Array<I_memeImage> = [
  { id: 0, title: "futurama all", h: 1315, w: 2160, href: '/img/futurama.png' },
  { id: 1, title: "futurama solo", h: 1080, w: 1920, href: '/img/futurama2.png' },
 ];
describe('<MemeSvgViewer />', () => {
  test('it should mount', () => {
    render(<MemeSvgViewer meme={meme} image={images[0]} />);
    
    const memeSvgViewer = screen.getByTestId('MemeSvgViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});