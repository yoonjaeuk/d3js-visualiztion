// generate some data
const arr = [];
const cats = ['c1', 'c2', 'c3'];
for (let i = 0; i < 100; ++i) {
  arr.push({
    a: Math.random() * 10,
    d: 'Row ' + i,
    cat: cats[Math.floor(Math.random() * 3)],
    cat2: cats[Math.floor(Math.random() * 3)],
  });
}
const lineup = LineUpJS.asLineUp(document.body, arr);
/*var d;

function makeRank() {
  var rank = {};
  for (var i = 0; i < d.length; i++) {
    rank[d[i].title] = i;
  }
  return rank;
}*/
