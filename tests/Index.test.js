import React from 'react';
import Index from '../pages';
import renderer from 'react-test-renderer';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

test('<Index> snapshot testing', () => {
  const component = renderer.create(<Index />);
  mockAllIsIntersecting(true);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});