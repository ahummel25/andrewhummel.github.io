import React from 'react';
import renderer from 'react-test-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';

import Skills from '../../src/components/Skills';

describe('Skills', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Skills />);

    expect(tree).toBeDefined();
  });

  it('renders the correct number of images', () => {
    const tree = renderer.create(<Skills />);

    const images = tree.root.findAllByType(GatsbyImage);

    expect(images.length).toBe(18);
  });
});
