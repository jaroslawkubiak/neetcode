const s = "caR";
const t = "rAc";

function anagram(s, t) {
  if (s.length !== t.length) return false;
  const arrs = s.toLowerCase().split("");
  const arrt = t.toLowerCase().split("");

  for (let i = 0; i < arrt.length; i++) {
    arrs.findIndex((char, index) => {
      if (char === arrt[i]) arrs.splice(index, 1);
    });
  }
  if (arrs.length === 0) return true;
  else return false;
}

console.log(anagram(s, t));
