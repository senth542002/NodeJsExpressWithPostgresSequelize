'use strict';

var app = require('../app'),
    chai = require('chai'),
    request = require('supertest');

var expect = chai.expect;

describe('Todos API Integration Tests', function(){

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

  describe('#POST /api/todos/:todoId/items', function(){
    let itemData = {
       "content": "todoItem-content"
   }
   var itemId = '';
    it('should respond with 201 created', function(done){
      request(app).post('/api/todos/'+id+'/items')
        .send(itemData)
        .end(function(err, res){
          expect(res.status).to.equal(201);
          expect(res.body.content).to.be.equal('todoItem-content');
          itemId = res.body.id;
          done();
        });
    });

    describe('#PUT /api/todos/:todoId/items/:todoItemId', function(){
      let data = {
         "content": "todoItem-updated-content",
         "complete": true
     }
      it('respond with 200 updated', function(done){
        request(app).put('/api/todos/'+id+'/items/'+itemId)
          .send(data)
          .expect('Content-Type', /json/)
          .end(function(err, res){
            expect(res.status).to.equal(200);
            expect(res.body.content).to.be.equal('todoItem-updated-content');
            expect(res.body.complete).to.be.equal(true);
            done();
          });
      });
    });

    describe('#DELETE /api/todos/:todoId/items/:todoItemId', function(){
      it('respond with 200 Deleted', function(done){
        request(app).delete('/api/todos/'+id+'/items/'+itemId)
          .expect('Content-Type', /json/)
          .end(function(err, res){
            expect(res.status).to.equal(200);
            expect(res.body.message).to.be.equal('Todo Item deleted successfully.');
            done();
          });
      });
    });
  });
});
