import React from 'react';
import renderer from 'react-test-renderer';
import { ModalWindow } from '@base/containers/ModalWindow';

describe('The ModalWindow component', () => {
	it('should renders correctly', () => {
		const tsx = (<ModalWindow />);
		const tree = renderer
			.create(tsx)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
