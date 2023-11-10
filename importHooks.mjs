export async function resolve (specifier, context, nextResolve) {
  if (specifier?.startsWith?.('node:')) return nextResolve(specifier, { ...context, parentURL: import.meta.url })
  return nextResolve(specifier)
}
