var firstSideOfTriangle1 = 5;
var secondSideOfTriangle2 = 6;
var thirdSideOfATriangle3 = 7;

var theAreaOfTriangle = (firstSideOfTriangle1 + secondSideOfTriangle2 + thirdSideOfATriangle3) /2;
console.log(firstSideOfTriangle1);
var areaOfTriangle =  Math.sqrt(theAreaOfTriangle*((theAreaOfTriangle - firstSideOfTriangle1) *
                                (theAreaOfTriangle - secondSideOfTriangle2) *
                                (theAreaOfTriangle - thirdSideOfATriangle3)));
document.write(areaOfTriangle);
