/**
 * @format
 */

import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';

import { it } from '@jest/globals';

import App from '../App';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
    create(<App />);
});
