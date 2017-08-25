import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import prism from 'prismjs/themes/prism-okaidia.css';
import Header from '../components/header/header';

import '../components/style';
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Helmet
          title='Blog - Jefferson Daniel'
          link={[
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
          ]}
          meta={[
            { name: 'description', content: 'Desenvolvedor front-end' },
            { name: 'keywords', content: 'front-end' },
          ]}
        />

        <Header />

        <div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}
