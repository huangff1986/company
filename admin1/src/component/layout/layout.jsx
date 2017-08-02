/* layout 的职责 */
/*
 *  定义后台的通用部分 
 */ 

import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { Histroy, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';

// layout 其他部件
// import { Lheader } from './lheader';
// import { Lmenu } from './lmenu';
// import { Lfooter } from './lfooter';

// 布局样式
// import './style/layout.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
