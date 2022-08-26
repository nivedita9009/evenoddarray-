var array =[1,2,3,4,5,6,8,10,14,16,17,18,24,68,435,78,3223,8789,455,232];
var even_number=[];
var odd_number=[];
 for(i=0; i< array.length; i++)
 {
    if(array[i]%2==0)
    {
        even_number.push(array[i]);

    }
    else
    {
        odd_number.push(array[i]);
    }
 }
 console.log(even_number);
 console.log(odd_number);