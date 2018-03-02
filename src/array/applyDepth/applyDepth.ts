export function applyDepth(objects, parentProperty, idProperty = 'id', depthProperty = 'depth') {

  const keyed = {};
  objects.forEach(function (object) {
    if (!object[parentProperty])
      object[depthProperty] = 0;

    keyed[object[idProperty]] = object;
  });
  Object.keys(keyed).forEach(key => {
    Object.keys(keyed).forEach(key => {
      if (!keyed[key][depthProperty]) {
        if (keyed[key][parentProperty]) {
          keyed[key][depthProperty] = keyed[keyed[key][parentProperty]][depthProperty] + 1;
        }
      }
    })
  });

  return keyed;
}
