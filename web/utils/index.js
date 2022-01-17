export const queryObectToString = (queryobj, key, newValue) => {
  if(Object.keys(queryobj).length === 0 && !key && !newValue){
    return ''
  }else {
    let newQueryObject = {...queryobj}
    if(key && newValue){
      newQueryObject = {...queryobj, [key]: newValue}
    }
    return Object.keys(newQueryObject)
    .map((key, idx, arr) =>  idx+1 != arr.length ? `${key}=${newQueryObject[key]}&` : `${key}=${newQueryObject[key]}`)
    .join('')
  }
 }