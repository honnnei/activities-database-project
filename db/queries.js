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

function getByPrice() {
    // return Activity().select();
}

function getByCommute() {
    // return Activity().select();
}

function getByType(type) {
    // return Activity().select();
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
  getSingle: getSingle,
  getByPrice: getByPrice,
  getByCommute: getByCommute,
  getByType: getByType,
  add: add,
  update: update,
  deleteItem: deleteItem
};