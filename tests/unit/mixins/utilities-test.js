import EmberObject from '@ember/object';
import UtilitiesMixin from 'frontend/mixins/utilities';
import { module, test } from 'qunit';

module('Unit | Mixin | utilities', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let UtilitiesObject = EmberObject.extend(UtilitiesMixin);
    let subject = UtilitiesObject.create();
    assert.ok(subject);
  });
});
