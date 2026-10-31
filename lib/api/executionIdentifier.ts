/** Constructed migration adapter for the CSSE experiment. */
export function executionIdentifier(value: {execution_id?: number; job_id?: number}): number {
  const identifier = value.execution_id;
  if (!Number.isSafeInteger(identifier) || identifier === undefined || identifier < 0) {
    throw new Error('Missing or invalid execution identifier');
  }
  return identifier;
}
