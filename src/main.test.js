import api from './main.js';

describe('Core Test Lib', () => {
  it('json should match json', () => {
    expect(api.res).toBe('ok')
  });
});