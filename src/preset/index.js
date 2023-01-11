export function previewAnnotations(entry = []) {
  return [...entry, require.resolve("./preview")]
}

export function managerEntries(entry = []) {
  return [...entry, require.resolve("./manager")]
}
