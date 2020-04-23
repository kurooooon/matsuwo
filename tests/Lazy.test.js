import React from 'react';
import Lazy from '../components/Lazy';
import renderer from 'react-test-renderer';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

test('<Lazy> snapshot testing', () => {
  const component = renderer.create(
    <Lazy>test</Lazy>
  );
  mockAllIsIntersecting(true);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});