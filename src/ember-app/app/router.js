import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-aider-toy-shop-toy-l');
  this.route('i-i-s-aider-toy-shop-toy-e',
  { path: 'i-i-s-aider-toy-shop-toy-e/:id' });
  this.route('i-i-s-aider-toy-shop-toy-e.new',
  { path: 'i-i-s-aider-toy-shop-toy-e/new' });
});

export default Router;
