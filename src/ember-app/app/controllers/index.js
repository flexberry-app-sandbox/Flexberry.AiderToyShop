import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.магазин-игрушек.caption'),
          title: i18n.t('forms.application.sitemap.магазин-игрушек.title'),
          children: [{
            link: 'i-i-s-aider-toy-shop-toy-l',
            caption: i18n.t('forms.application.sitemap.магазин-игрушек.i-i-s-aider-toy-shop-toy-l.caption'),
            title: i18n.t('forms.application.sitemap.магазин-игрушек.i-i-s-aider-toy-shop-toy-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})