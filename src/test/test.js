const test = require('tape');
const supertest = require('supertest');
const router = require('../server/router');

test('Testing tape', (t) => {
  const expected = '';
  const accuual = '';
  t.equal(accuual, expected, 'Should return empty string');
  t.end();
});


test('Testing homeHandler', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, result) => {
      t.error(error);
      t.equal(result.statusCode, 200, 'Status code should be 200');
      t.end();
    });
});

test('Testing publicHandler ', (t) => {
  supertest(router)
    .get('/index.html')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, result) => {
      t.error(error);
      t.equal(result.statusCode, 200, 'Status code should be 200');
      t.end();
    });
});

/*
test('Testing searchRecipesHandler ', (t) => {
  supertest(router)
    .get('/search?value=burger')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((error, result) => {
      t.error(error);
      t.equal(result.statusCode, 200, 'Status code should be 200');
      t.end();
    });
});


test('Testing getRecipeHandler ', (t) => {
  supertest(router)
    .get('/getRecipe?id=46906')
    .expect(200, { 'Content-Type': /json/ })
    .end((error, result) => {
      t.error(error);
      t.equal(result.statusCode, 200, 'Status code should be 200');
      t.end();
    });
});
*/
