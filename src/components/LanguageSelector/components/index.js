import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ALLOWED_LANGUAGES,
} from 'utils/language';

import './styles.css';

class LanguageSelector extends Component {
  static propTypes = {
    direction: PropTypes.string,
    setLanguage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    direction: 'right',
  }

  handleLanguageSelection = (lang) => {
    const { setLanguage } = this.props;

    setLanguage(lang);
  }

  render() {
    const {
      direction,
    } = this.props;

    return (
      <div className={`language-selector ${direction}`}>
        <ul className='language-selector__list'>
          {ALLOWED_LANGUAGES.map((lang, index) => (
            <li key={index} className='language-selector__list__element'>
              <img
                alt={`img-${lang}`}
                title={`${lang.toUpperCase()}`}
                src={require(`assets/images/lang-${lang}.png`)}
                className='language-selector__list__element__img'
                onClick={() => this.handleLanguageSelection(lang)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LanguageSelector;
