// See: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect';

import { server } from '@test/mocks/server';

beforeAll(() => {
  server.listen(); // Enable the mocking.
});

afterEach(() => {
  server.resetHandlers(); // Reset any runtime handlers tests may use.
});

afterAll(() => {
  server.close(); // Clean up once the tests are done.
});
