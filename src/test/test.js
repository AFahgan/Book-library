/* eslint-disable no-undef */
const buildTest = require('../database/config/build');
const connection = require('../database/config/connection');

const getbooks = require('../database/queries/getbookDB');
const addBook = require('../database/queries/addbookDB');

beforeEach(() => buildTest());
afterAll(() => connection.end());
test('test get books', () => getbooks()
  .then((book) => {
    expect(book.name).toBe();
  }));

test('test adding a book', () => addBook('ibrahim', 'hank green', 'penguin', 'img', '7898', '2001')
  .then((book) => {
    expect(book.publisher).toBe('penguin');
  }));
