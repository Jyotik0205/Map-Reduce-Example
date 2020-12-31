//Election simulation using Map Reduce
//Data coming from 7 states with electoral collage and party won 
//To Show: Total Electoral collage won by party
 
const initialmap = new Map([[3, "Rep"], [2, "Dem"], [5, "Dem"], [4, "Dem"], [2, "Rep"],[3,"Dem"]]);

const processedMap = Array.from(initialmap.entries())
    .map(([key, value]) => [value, key])
    .reduce((acc, [key, value]) => acc.set(key, value + (acc.get(key) || 0)), new Map());

console.log('---------- initial Map ----------');
for (const [key, value] of initialmap.entries()) {
    console.log(`key: ${key}, value: ${value}`);
}

console.log('---------- Processed Map ----------');
for (const [key, value] of processedMap.entries()) {
    console.log(`key: ${key}, value: ${value}`);
}