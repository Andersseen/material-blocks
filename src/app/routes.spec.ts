import { getComponentLoader } from './routes';

describe('getComponentLoader', () => {
  it('should return a loader function for valid codes', async () => {
    const loader = getComponentLoader('home');
    expect(typeof loader).toBe('function');
    const mod = await loader();
    expect(mod).toBeTruthy();
  });

  it('should throw an error for unknown codes', () => {
    expect(() => getComponentLoader('unknown')).toThrowError(
      'No component loader found for path: unknown'
    );
  });
});
