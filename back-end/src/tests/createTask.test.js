const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
// import chaiHttp from 'chai-http';
// import * as sinon from 'sinon';
// import * as chai from 'chai';

const server = require('../server');
const route = require('../routes/Task.routes');
const { tasks } = require('../database/models');
jest.setTimeout(60000);

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa se é possível criar uma nova tarefa', () => {
  let chaiHttpResponse;

  beforeEach(async () => {
    
    sinon
      .stub(tasks, "create")
      .resolves({
        "task": "Task teste",
        "status": "pronto"
      });
  });

  afterEach(() => {
    (tasks.create).restore();
  });


  it('A tarefa foi criada com sucesso', async () => {
    chaiHttpResponse = await chai
      .request(route)
      .post('/')
      .send({
        "task": "Task teste",
        "status": "pronto",
      });

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.have.property('status');
      expect(chaiHttpResponse.body).to.have.property('task');
      expect(chaiHttpResponse.body).to.have.property('id');
  });

});