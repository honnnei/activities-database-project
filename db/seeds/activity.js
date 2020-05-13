exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity').insert([
        {title: 'Madame Tussods', type: 'museum', location: 'Baker Street', price: 50, time_needed: 2, commute_time: 15, description: 'Wax figoures of celebrities'},
        {title: 'London Eye', type: 'ride', location: 'Waterloo', price: 16, time_needed: 1, commute_time: 15, description: 'See the view from 60feet up'},
        {title: 'Oxford Street', type: 'shopping', location: 'Oxford Circus', price: 0, time_needed: 2, commute_time: 0, description: 'Check out all the cool shops'},
        {title: 'Camden Town', type: 'food_market', location: 'Camden Town', price: 0, time_needed: 1, commute_time: 30, description: 'Have some streetfood'},
        {title: 'Tate Modern', type: 'museum', location: 'London Bridge', price: 0, time_needed: 2, commute_time: 30, description: 'See some modern art'},
        {title: 'British Museum', type: 'museum', location: 'Tottenham Court Road', price: 0, time_needed: 2, commute_time: 15, description: 'Ancient history artefacts'},
        {title: 'Richmond Park', type: 'park', location: 'Richmond', price: 0, time_needed: 2, commute_time: 70, description: 'See some deers'},
        {title: 'Covent Garden', type: 'area', location: 'Covent Garden', price: 0, time_needed: 0, commute_time:20, description: 'Look at some shops and go to a nice restaurant'},
        {title: 'Notting Hill', type: 'flea_market', location: 'Notting Hill Gate', price: 0, time_needed: 2, commute_time: 20, description: 'Flea market'},
        {title: 'Harrods', type: 'shopping', location: 'Knightsbridge', price: 0, time_needed: 1, commute_time: 35, description: 'Really fancy stuff'},
        {title: 'Soho', type: 'area', location: 'Piccadily Circus', price: 0, time_needed: 6, commute_time: 10, description: 'Have some drinks'},

      ]);
    });
};
