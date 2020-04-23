import React from 'react';
import { YoutubeItem } from '../components/YoutubeItem';
import renderer from 'react-test-renderer';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

test('<YoutubeItem> snapshot testing', () => {
  const component = renderer.create(
    <YoutubeItem
      id="86yNic4O8Ns"
      title="あなたのためにさ"
    />
  );
  mockAllIsIntersecting(true);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});