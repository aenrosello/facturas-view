import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';

export default Mixin.create({
  notify: inject('notify'),
  notifications:[],
  actions: {
    cleanNotifications () {
      this.get('notifications').forEach(item => {
        item.set('visible', false);
      });
    }
  }
});
