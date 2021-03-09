function ThatChecksIfANumberIsPositiveOrNegative(numberOne, numberTwo){
if((numberOne < 0 && numberTwo > 0) || numberOne > 0 && numberTwo < 0){
return true
}

else{
return false
}

}
document.write(ThatChecksIfANumberIsPositiveOrNegative(2, 3))
document.write(ThatChecksIfANumberIsPositiveOrNegative(2, -3))
document.write(ThatChecksIfANumberIsPositiveOrNegative(-2, -3))
document.write(ThatChecksIfANumberIsPositiveOrNegative(-0.2, -3.2))