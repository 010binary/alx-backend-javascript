
---

# Testing Node.js API with Mocha, Chai, and SinonJS

This guide will help you get started with testing your Node.js API using Mocha, Chai, and SinonJS. Mocha is a popular test framework, Chai provides assertion capabilities, and SinonJS is a versatile library for mocking, stubbing, and spying.

## Prerequisites

Make sure you have Node.js and npm installed.

1. **Initialize your project** (if not already done):
   ```bash
   npm init -y
   ```

2. **Install required packages**:
   ```bash
   npm install --save-dev mocha chai sinon supertest
   ```

   - `mocha`: Testing framework.
   - `chai`: Assertion library.
   - `sinon`: Spies, stubs, and mocks for functions and HTTP requests.
   - `supertest`: Simplifies HTTP assertions by testing your API routes.

## Project Structure

Here's an example structure for your Node.js project with tests:

```
/your-project
|-- /src
|   |-- app.js
|   |-- /routes
|       |-- exampleRoute.js
|-- /test
|   |-- exampleRoute.test.js
|-- package.json
```

- **`app.js`**: The main file where your Express app is set up.
- **`routes/exampleRoute.js`**: Your API route.
- **`test/exampleRoute.test.js`**: Your test file.

## Setting up Mocha

1. Add a test script to your `package.json`:
   ```json
   "scripts": {
     "test": "mocha"
   }
   ```

2. Create a test file in the `test/` folder, for example `exampleRoute.test.js`.

## Writing a Basic Test

### Step 1: Create a Simple Route

In your `routes/exampleRoute.js`:

```javascript
const express = require('express');
const router = express.Router();

router.get('/greet', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
});

module.exports = router;
```

In your `app.js`:

```javascript
const express = require('express');
const app = express();
const exampleRoute = require('./routes/exampleRoute');

app.use('/api', exampleRoute);

module.exports = app;
```

### Step 2: Write a Test

In `test/exampleRoute.test.js`:

```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../src/app');

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /api/greet', () => {
    it('should return a greeting message', (done) => {
        chai.request(app)
            .get('/api/greet')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').eql('Hello, World!');
                done();
            });
    });
});
```

This test sends a GET request to the `/api/greet` route and checks if the response status is 200 and the response body contains the expected message.

### Step 3: Run the Test

Now, run your test suite by executing:

```bash
npm test
```

If everything is set up correctly, you should see a passing test result.

## Using Sinon for Mocking and Stubbing

Sinon can be used to mock or stub certain behaviors. For example, you might want to mock a database call or external API request.

Here's an example of using Sinon to mock a function in `exampleRoute.js`:

```javascript
const sinon = require('sinon');
const { expect } = require('chai');
const someService = require('../src/services/someService');
const app = require('../src/app');

describe('GET /api/greet with sinon', () => {
    it('should return a mocked greeting', (done) => {
        const mock = sinon.stub(someService, 'getGreeting').returns('Hello, Sinon!');

        chai.request(app)
            .get('/api/greet')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').eql('Hello, Sinon!');
                mock.restore();
                done();
            });
    });
});
```

### Common Sinon Use Cases:
- **Stubbing functions**: Override behavior for testing purposes.
- **Mocking external APIs**: Simulate responses from external services.
- **Spying on functions**: Track calls to a function.

## Conclusion

With Mocha, Chai, and SinonJS, you can write comprehensive tests for your Node.js APIs. Mocha provides the framework, Chai helps with assertions, and Sinon enables advanced testing techniques like mocking and stubbing.

### Additional Resources

- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [SinonJS Documentation](https://sinonjs.org/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)


