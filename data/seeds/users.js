
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'ippo', password: "pass"},
        {id: 2, username: 'hisoka', password: "pass"},
        {id: 3, username: 'gutz', password: "pass"}
      ]);
    });
};
