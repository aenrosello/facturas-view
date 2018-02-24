import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-section', 'Integration | Component | login section', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{login-section}}`);
  assert.equal(this.$("h2:contains('no name')").text(), 'no name', 'Tag found');
  assert.equal(this.$("button:contains('Login')").text().trim(), 'Login', 'Tag found');
});
