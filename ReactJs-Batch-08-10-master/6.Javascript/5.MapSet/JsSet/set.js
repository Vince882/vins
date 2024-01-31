/* Set Methods */

/*

new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
values()	Returns an iterator with all the values in a Set
size	Returns the number of elements in a Set

*/

{
  const x = new Set([10,20,30]);
  console.log(x);
  console.log(x.size);
}

{
  const x = new Set();
  
  x.add("a");
  x.add("b");
  x.add("c");

  console.log(x);
  console.log(x.size);
}

{
  const newset = new Set();
  
  const a = "a";
  const b = "b";
  const c = "d";
  
  newset.add(a);
  newset.add(b);
  newset.add(c);

  console.log(newset);
  console.log(newset.size);
}

{
  const x = new Set(["a" , "b" , "c"]);
  
  x.delete("a");

  console.log(x);
  console.log(x.size);
}

{
  const x = new Set(["a" , "b" , "c"]);
  
  let y = x.has("d");

  console.log(y);
}

{
  const x = new Set(["a" , "b" , "c"]);
  
  let y = x.values();

  console.log(y);
}