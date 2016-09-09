export default function (objects, key, value) {
  let list ={};
  for (let object of objects) {
    list[object[key]] = object[value]
  }

  return list;
}
