grade = 95;

if the 90 <= grade < 100
print A+

if the 80 <= grade < 90
print B+

if the 70 <= grade < 80
print C+

if the 60 <= grade < 70
print D

if the 50 <= grade < 60
print E

if the 0 <= grade < 50
print F

if(grade < 100 && grade >=90) {console.log("A+")}

else { if (grade < 90 && grade >=80) console.log("B+")
else { if (grade < 80 && grade >=70) console.log("C+")
else { if (grade < 70 && grade >=60) console.log("D")
else { if (grade < 60 && grade >=50) console.log("E")
else console.log("F")
}
}
}
}
console.log("Bye!")