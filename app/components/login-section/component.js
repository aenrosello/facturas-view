import Component from '@ember/component';
import utilities from '../../mixins/utilities'

export default Component.extend(utilities, {
  company: 'no name',
  _email: '',
  _password:'',
  actions: {
    login(email, password) {
      this.send('cleanNotifications');
      const message = this.get('notify').error(`credentials user ${email} password ${password}`, {closeAfter: null});
      this.get('notifications').addObject(message);
    }
  }
});
