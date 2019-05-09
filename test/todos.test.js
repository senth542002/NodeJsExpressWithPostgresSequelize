'use strict';

var app = require('../app'),
    chai = require('chai'),
    request = require('supertest'),
    nock = require('nock');

const response = require('./getAllResponse')

var expect = chai.expect;

describe('Todos API Integration Tests', function(){
  describe('#GET /api/todos', function(){

    beforeEach(() => {
      nock('http://localhost:8000')
        .get('/api/todos')
        .reply(200, response);
    });

    it.only('should get all tasks', function(done){
      request(app).get('/api/todos')
        .end(function(err, res){
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.not.be.empty;
          done();
        });
    });
  });

  describe('#GET /', function(){
    it('should get welcome nothingness message', function(done){
      request(app).get('/')
        .end(function(err, res){
          expect(res.status).to.equal(200);
          expect(res.body.message).to.be.equal('Welcome to the begining of nothingness.');
          done();
        });
    });
  });

  describe('#GET /api', function(){
    it('should get welcome TODOs api message', function(done){
      request(app).get('/api')
        .end(function(err, res){
          expect(res.status).to.equal(200);
          expect(res.body.message).to.be.equal('Welcome to the Todos API!');
          done();
        });
    });
  });

  describe('#POST /api/todos', function(){
    let data = {
       "title": "todo-title"
   }

   var id = '';
    it('respond with 201 created', function(done){
      request(app).post('/api/todos')
        .send(data)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          expect(res.status).to.equal(201);
          expect(res.body.title).to.be.equal('todo-title');
          id = res.body.id;
          done();
        });
    });

    describe('#PUT /api/todos/:todoId', function(){
      let data = {
         "title": "todo-updated-title"
     }
      it('respond with 200 updated', function(done){
        request(app).put('/api/todos/'+id)
          .send(data)
          .expect('Content-Type', /json/)
          .end(function(err, res){
            expect(res.status).to.equal(200);
            expect(res.body.title).to.be.equal('todo-updated-title');
            done();
          });
      });
    });

    describe('#DELETE /api/todos/:todoId', function(){
      it('respond with 200 Deleted', function(done){
        request(app).delete('/api/todos/'+id)
          .expect('Content-Type', /json/)
          .end(function(err, res){
            expect(res.status).to.equal(200);
            expect(res.body.message).to.be.equal('Todo deleted successfully.');
            done();
          });
      });
    });

  });

});
