import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  color: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('number')
});

export let ValidationRules = {
  color: {
    descriptionKey: 'models.i-i-s-aider-toy-shop-toy.validations.color.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-aider-toy-shop-toy.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-aider-toy-shop-toy.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ToyE', 'i-i-s-aider-toy-shop-toy', {
    name: attr('Name', { index: 0 }),
    price: attr('Price', { index: 1 }),
    color: attr('Color', { index: 2 })
  });

  modelClass.defineProjection('ToyL', 'i-i-s-aider-toy-shop-toy', {
    name: attr('Name', { index: 0 }),
    price: attr('Price', { index: 1 }),
    color: attr('Color', { index: 2 })
  });
};
