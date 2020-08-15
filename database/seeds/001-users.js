
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user1', password: 'pass1'},
        {username: 'user2', password: 'pass2'},
        {username: 'user3', password: 'pass3'}
      ]);
    });
};
