var fbnci = [0, 1];
var i = 2;

do {
   // Add the fibonacci sequence: add previous to one before previous
   fbnci[i] = fbnci [i-2] + fbnci[i-1];
   console.log(fbnci[i]);
   fbnci[i]++;
} 
while (fbnci[i] < 100);