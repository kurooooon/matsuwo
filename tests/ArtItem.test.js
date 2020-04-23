import React from 'react';
import { ArtItem } from '../components/ArtItem';
import renderer from 'react-test-renderer';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

test('<ArtItem> snapshot testing', () => {
  const component = renderer.create(
    <ArtItem
      id="4274559-XBAHEJFZ-7_tt3p6x"
      title="After the party"
      url="https://www.saatchiart.com/art/Painting-After-the-party/218701/4519690/view"
    />
  );
  mockAllIsIntersecting(true);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});