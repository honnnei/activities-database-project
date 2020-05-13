process.env.NODE_ENV = 'development';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');
var should = chai.should();
chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('GET /activities/all', function() {
    it('should return all activities', function(done) {
      chai.request(server)
      .get('/activities/all')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(3);
      res.body[1].should.have.property('title');
      res.body[1].title.should.equal('London Eye');
      res.body[1].should.have.property('location');
      res.body[1].location.should.equal('Waterloo');
      res.body[1].should.have.property('price');
      res.body[1].price.should.equal(16);
      res.body[1].should.have.property('time_needed');
      res.body[1].time_needed.should.equal(1);
      res.body[1].should.have.property('commute_time');
      res.body[1].commute_time.should.equal(15);
      res.body[1].should.have.property('description');
      res.body[1].description.should.equal('See the view from 60feet up');
      done();
      });
    });
  });

  describe('GET /activities/:id', function() {
    it('should return a single show', function(done) {
      chai.request(server)
      .get('/activities/2')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.title.should.equal('London Eye');
        res.body.should.have.property('location');
        res.body.location.should.equal('Waterloo');
        res.body.should.have.property('price');
        res.body.price.should.equal(16);
        res.body.should.have.property('time_needed');
        res.body.time_needed.should.equal(1);
        res.body.should.have.property('commute_time');
        res.body.commute_time.should.equal(15);
        res.body.should.have.property('description');
        res.body.description.should.equal('See the view from 60feet up');
        done();
      });
    });
  });

  describe('POST /activities/add', function() {
    it('should add an activity', function(done) {
      chai.request(server)
      .post('/activities/add')
      .send({
        title: 'Oxford Street',
        type: 'shopping',
        location: 'Oxford Circus',
        price: 0,
        time_needed: 1,
        commute_time: 0,
        description: "shopping for presents"   
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.title.should.equal('Oxford Street');
        res.body.should.have.property('location');
        res.body.location.should.equal('Oxford Circus');
        res.body.should.have.property('price');
        res.body.price.should.equal(0);
        res.body.should.have.property('time_needed');
        res.body.time_needed.should.equal(1);
        res.body.should.have.property('commute_time');
        res.body.commute_time.should.equal(0);
        res.body.should.have.property('description');
        res.body.description.should.equal('shopping for presents');
        done();
      });
    });
  });

  describe('PUT /activities/:id', function() {
    it('should update a show', function(done) {
      chai.request(server)
      .put('/activities/2')
      .send({
        title: 'London EYE EYE'
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.title.should.equal('London EYE EYE');
        res.body.should.have.property('location');
        res.body.location.should.equal('Waterloo');
        res.body.should.have.property('price');
        res.body.price.should.equal(16);
        res.body.should.have.property('time_needed');
        res.body.time_needed.should.equal(1);
        res.body.should.have.property('commute_time');
        res.body.commute_time.should.equal(15);
        res.body.should.have.property('description');
        res.body.description.should.equal('See the view from 60feet up');
        done();
      });
    });

    it('should NOT update an activity if the id field is part of the request', function(done) {
      chai.request(server)
      .put('/activities/2')
      .send({
        id: 20,
        title: 'London EYES'
      })
      .end(function(err, res) {
        res.should.have.status(422);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.error.should.equal('You cannot update the id field');
        done();
      });
    });
  });

  describe('DELETE /activities/:id', function() {
    it('should delete an activity', function(done) {
      chai.request(server)
      .delete('/activities/2')
      .end(function(error, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.title.should.equal('London Eye');
        res.body.should.have.property('location');
        res.body.location.should.equal('Waterloo');
        res.body.should.have.property('price');
        res.body.price.should.equal(16);
        res.body.should.have.property('time_needed');
        res.body.time_needed.should.equal(1);
        res.body.should.have.property('commute_time');
        res.body.commute_time.should.equal(15);
        res.body.should.have.property('description');
        res.body.description.should.equal('See the view from 60feet up');
        chai.request(server)
        .get('/activities/all')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json; // jshint ignore:line
          res.body.should.be.a('array');
          res.body.length.should.equal(2);
          res.body[1].should.have.property('title');
          res.body[1].title.should.equal('Tower of London');
          done();
        });
      });
    });
  });

});