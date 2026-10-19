/**
 * Returns how many milliseconds the estimate exceeds available capacity, or 0
 * when within capacity or when available capacity is unknown.
 */
export const getOverCapacityMs = (
  estimateRemainingMs: number,
  availableMs: number | null,
): number => {
  if (availableMs === null || !isFinite(availableMs)) {
    return 0;
  }
  return Math.max(0, estimateRemainingMs - availableMs);
};
