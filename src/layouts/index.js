import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import prism from 'prismjs/themes/prism-okaidia.css'
import Header from '../components/header'
import Footer from '../components/footer'

import '../css/font.css'
import '../css/reset.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Helmet
          title="Blog - Jefferson Daniel"
          meta={[
            { name: 'description', content: 'Desenvolvedor front-end' },
            { name: 'keywords', content: 'front-end' },
          ]}
        />
        
        <Header />

        <div className='wrapper'>
          { this.props.children() }
        </div>
        <Footer />
      </div>
    );
  }
}
