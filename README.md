## What is the difference between var, let, and const?

** There are lots of differce between var, let, and const firstly i wanna talk about golobal and block scope -

In golobal scope let var and const all you can acsess from anywhere but in block scope the var is only accessible and let and const cannot access in the bolck scope but in fucntion or local scope you cannot access with any like var , let and const anything donst work. 

In hoisted var is a bad practice to write codes beacuse if you made a mistake with var it dont give any error it gives undefined so it is very problem to find the error but in let and const it is also hoisted but they in TDZ zone temporal dead zone it gives error and show the line where you made the mistake.

In the var we can create same variable name so it is very confusing to exate variable but in let and const we cannot create the same variable.

In the let and var we can update the the variable value but in the const it can't happen.


## What is the spread operator (...)?

** spread operator means the sprading the value of an array and object values. If we take a object or array use the spread and crate an shallow copy of those object and array and after spreading array and object if we change the value of the clone object and array that not impact on the main one.

## What is the difference between map(), filter(), and forEach()?

** Map method means it goes every eliment of a given array and apply funtion like of looping. After that it returns a new array with the updated values. The original array does not change.

For Each method work like map it also goes evary eliment of the given array and work like loop but it does not return a new array it only performs the operation on each element the original array does not change.

Filter methord work like map and for each method but it requires a condition if the condition is right than it gives a value from given array other value not showing in the array but it not change the given array.

## What is an arrow function?

If we want to write a function we need write the function( )like this and use for varius thing varius way like give the peramiter in it and so on .But  in the arrow funtion we can do the same work in sorter time like in arrow function we use this in variable and give a ( ) and arrow and after if we have peramiter write the function word and if it is one line work it dosnt need wite retrun and it dont need the curly bracket{} like other function.

