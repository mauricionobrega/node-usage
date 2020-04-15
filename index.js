const MAX = 1000000000000;
const ARRAY = [];

for (var i = 0; i <= MAX; i++) {
  const VALUE = `${i}/${MAX}`;
  const OBJECT = new Object(VALUE);
  console.log(OBJECT);
  ARRAY.push(OBJECT);
}
