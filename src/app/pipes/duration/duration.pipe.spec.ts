import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('schould parse 100min', () => {
    const pipe = new DurationPipe();
    const expected = '1h 40min';
    expect(pipe.transform(100)).toBe(expected);
  });
});
