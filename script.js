function stringChop(str, size) {
  // Check for null or empty input
  if (str === null || size <= 0) return [];

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // ✅ convert to number
alert(JSON.stringify(stringChop(str, size)));
