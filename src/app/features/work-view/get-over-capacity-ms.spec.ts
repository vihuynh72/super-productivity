import { getOverCapacityMs } from './get-over-capacity-ms';

const hours = (n: number): number => n * 60 * 60 * 1000;

describe('getOverCapacityMs', () => {
  it('returns 0 when estimate is under capacity', () => {
    expect(getOverCapacityMs(hours(6), hours(8))).toBe(0);
  });

  it('returns 0 when estimate equals available capacity', () => {
    expect(getOverCapacityMs(hours(8), hours(8))).toBe(0);
  });

  it('returns the excess when estimate exceeds capacity', () => {
    expect(getOverCapacityMs(hours(9), hours(8))).toBe(hours(1));
  });

  it('returns 0 when availableMs is null', () => {
    expect(getOverCapacityMs(hours(9), null)).toBe(0);
  });

  it('returns 0 when availableMs is not finite (Infinity)', () => {
    expect(getOverCapacityMs(hours(9), Infinity)).toBe(0);
  });

  it('returns 0 when estimate is zero', () => {
    expect(getOverCapacityMs(0, hours(8))).toBe(0);
  });
});
