import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';
import Splash from '../Splash';
import Library from '../Library';
import Options from '../Options';
import Wishlist from '../Wishlist';
import Profile from '../Profile';
import Recommended from '../Recommended';

test('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Splash renders correctly', () => {
  const tree = renderer.create(<Splash />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Library renders correctly', () => {
  const tree = renderer.create(<Library />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Options renders correctly', () => {
  const tree = renderer.create(<Options />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Profile renders correctly', () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Recommended renders correctly', () => {
  const tree = renderer.create(<Recommended />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Wishlist renders correctly', () => {
  const tree = renderer.create(<Wishlist />).toJSON();
  expect(tree).toMatchSnapshot();
});
