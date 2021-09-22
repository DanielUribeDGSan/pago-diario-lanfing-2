import React from 'react';
import ReactDOM from 'react-dom';

import { PagoDiarioApp } from './PagoDiarioApp';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles/styles.scss'



AOS.init();
library.add(fab)


ReactDOM.render(
  <PagoDiarioApp />,
  document.getElementById('root')
);

