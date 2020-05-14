import { expect } from 'chai';
import * as http from 'http';
import supertest from 'supertest';

import 'config/env';
import app from 'app';

supertest(http.createServer(app.callback()));

describe('Sample describe', () => {
  it('Sample test', async () => {
    expect(2).to.equal(2);
  });
});
