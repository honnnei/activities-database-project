var knex = require('./knex.js');

function Activity() {
  return knex('activity');
}

// *** queries for Activity*** //

function getAll() {
  return Activity().select();
}

function getSingle(activityID) {
  return Activity().where('id', parseInt(activityID)).first();
}

function orderByAsc(column) {
  return Activity().select().orderBy(column);
}

function getByPrice() {
    // return Activity().select();
//     SELECT *
// FROM public.activity
// ORDER BY price ASC;
}

function getByCommute() {
    // return Activity().select();
//     SELECT *
// FROM public.activity
// ORDER BY commute_time ASC;
}

function getTypes() {
  return Activity().select('type').distinct();
  // SELECT 	DISTINCT type FROM public.activity;
}

function getByType(type) {
  return Activity().where('type', (type));
  //SELECT * FROM public.activity WHERE type = 'museum';
}

function add(activity) {
  return Activity().insert(activity, 'id');
}

function update(activityID, updates) {
  return Activity().where('id', parseInt(activityID)).update(updates);
}
knex 
function deleteItem(activityID) {
  return Activity().where('id', parseInt(activityID)).del();
}

module.exports = {
  getAll: getAll,
  getTypes: getTypes,
  getSingle: getSingle,
  orderByAsc: orderByAsc,
  getByPrice: getByPrice,
  getByCommute: getByCommute,
  getByType: getByType,
  add: add,
  update: update,
  deleteItem: deleteItem
};