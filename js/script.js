var marks = prompt('Enter your marks :');

if(marks<0){
    console.log('INVALID');
}else if(marks<33){
    console.log('REST IN PEACE..')
}else if(marks>=33 && marks<=39){
    console.log('Your grade is D')
}else if(marks>=40 && marks<=49){
    console.log('Your grade is C')
}else if(marks>=50 && marks<=59){
    console.log('Your grade is B')
}else if(marks>=60 && marks<=69){
    console.log('Your grade is A-')
}else if(marks>=70 && marks<=79){
    console.log('Your grade is A')
}else if(marks>=80 && marks<=100){
    console.log('Your grade is A+')
}else{
    console.log('INVALID')
}