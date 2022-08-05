export function clone(obj) {
  if(obj instanceof Date) {
    return new Date(obj);
  } else if(Array.isArray(obj)) {
		const arr = [];
		for (let i = 0; i < obj.length; i++) {
			arr[i] = clone(obj[i]);
		}

		return arr;
	} else if(typeof(obj) === 'object') {
		const cloned = {};
		for(let key in obj) {
			cloned[key] = clone(obj[key]);
		}

		return cloned;	
	}

	return obj;
}
