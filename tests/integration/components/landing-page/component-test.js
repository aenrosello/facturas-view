import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/start-mirage';

moduleForComponent('landing-page', 'Integration | Component | landing page', {
  integration: true,
  setup() {
    startMirage(this.container);
  },
  afterEach() {
    server.shutdown();
  }
});

test('it renders', function(assert) {
  let users = server.createList('user', 10);
  this.set('mockUsers', users);
  this.render(hbs`{{landing-page users=mockUsers}}`);
  assert.equal(this.$("h3:contains('Component')").text(), 'Component: landing-page', 'Tag found');
  assert.equal(this.$("li:contains('User')").length, 10, 'Tag found');
});
