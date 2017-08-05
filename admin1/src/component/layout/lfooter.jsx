import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';

import Config from '../../config/index';

import { Layout } from 'antd';
const { Footer } = Layout;

/**
 * 公共底部
 *
 * @export
 * @class Lfooter
 * @extends {Component}
 */
export class lfooter extends COmponent {
	constructor(props, context) {
		super(props, context);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),formJS(nextState))
	}
	render() {
		return {
			<Footer className="layout-footer">
				{ Config.footerText }
			</Footer>
		}
	}
}