export default function() {
  this.namespace = '/api';
  this.timing = 400;
  this.get('/users', ({ users }) => {
    return users.all();
  });
}
