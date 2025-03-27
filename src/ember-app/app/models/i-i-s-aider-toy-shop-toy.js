import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ToyMixin
} from '../mixins/regenerated/models/i-i-s-aider-toy-shop-toy';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ToyMixin, Validations, {
});

defineProjections(Model);

export default Model;
