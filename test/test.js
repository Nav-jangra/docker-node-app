const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../Routes/register'); // Replace with your actual Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Registration API', () => {
  it('should register a user', (done) => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword',
      email: 'test@example.com',
    };

    chai
      .request(app)
      .post('/register') // Replace with the actual route for user registration
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message').equal('User registered successfully');
        done();
      });
  });

  it('should not register a user with missing information', (done) => {
    const incompleteUser = {
      username: 'incompleteuser',
      // Missing password and email
    };

    chai
      .request(app)
      .post('/register') // Replace with the actual route for user registration
      .send(incompleteUser)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error').equal('something happened');
        done();
      });
  });

  // Add more test cases as needed, such as checking for duplicate usernames, invalid email formats, etc.
});
