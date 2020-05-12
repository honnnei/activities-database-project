
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity').insert([
        {title: 'Madame Tussods', type: 'museum', location: 'Baker Street', price: 50, time_needed: 2, commute_time: 15, description: 'Wax figoures of celebrities'},
        {title: 'London Eye', type: 'ride', location: 'Waterloo', price: 16, time_needed: 1, commute_time: 15, description: 'See the view from 60feet up'},
        {title: 'Tower of London', type: 'museum', location: 'Tower Hill', price: 25, time_needed: 2, commute_time: 30, description: 'Sightsee the Tower of London and see Crown Jewels'},
      ]);
    });
};
