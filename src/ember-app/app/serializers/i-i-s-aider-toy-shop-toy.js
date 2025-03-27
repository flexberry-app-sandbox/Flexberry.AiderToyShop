import { Serializer as ToySerializer } from
  '../mixins/regenerated/serializers/i-i-s-aider-toy-shop-toy';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ToySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
