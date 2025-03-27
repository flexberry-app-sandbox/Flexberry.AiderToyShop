import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAider_Toy_ShopToyLForm from './forms/i-i-s-aider-toy-shop-toy-l';
import IISAider_Toy_ShopToyEForm from './forms/i-i-s-aider-toy-shop-toy-e';
import IISAider_Toy_ShopToyModel from './models/i-i-s-aider-toy-shop-toy';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-aider-toy-shop-toy': IISAider_Toy_ShopToyModel,
  },

  'application-name': 'Aider_ toy_ shop',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Aider_ toy_ shop',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Aider_ toy_ shop',
          title: 'Aider_ toy_ shop',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        'магазин-игрушек': {
          caption: 'Магазин игрушек',
          title: 'Магазин игрушек',
          'i-i-s-aider-toy-shop-toy-l': {
            caption: 'Игрушки',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-aider-toy-shop-toy-l': IISAider_Toy_ShopToyLForm,
    'i-i-s-aider-toy-shop-toy-e': IISAider_Toy_ShopToyEForm,
  },

});

export default translations;
