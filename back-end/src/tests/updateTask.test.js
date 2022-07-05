const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');
const route = require('../routes/Task.routes');
const { tasks } = require('../database/models');
jest.setTimeout(60000);


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa se é possível atualizar uma nova tarefa', () => {
  let chaiHttpResponse;

  beforeEach(async () => {
    
    sinon
      .stub(tasks, "update")
      .resolves({
        "task": "Task atualizada",
        "status": "pronto"
      });
  });

  afterEach(() => {
    (tasks.update).restore();
  });


  it('A tarefa foi atualizada com sucesso', async () => {
    chaiHttpResponse = await chai
      .request(route)
      .post('/')
      .send({
        "task": "Task atualizada",
        "status": "pronto",
      });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('status');
      expect(chaiHttpResponse.body).to.have.property('task');
      expect(chaiHttpResponse.body).to.have.property('id');
  });

});