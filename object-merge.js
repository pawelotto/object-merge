const objectMerge = (...objects) => {
  return objects.reduce((prev, next) => {
    Object.keys(prev).forEach(key => {
      next[key] = { ...next[key], ...prev[key] }
    })
    return next
  })
}
