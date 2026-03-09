## What is the difference between var, let, and const?

** There are lots of differce between var, let, and const firstly i wanna talk about golobal and block scope -

In golobal scope let var and const all you can acsess from anywhere but in block scope the var is only accessible and let and const cannot access in the bolck scope but in fucntion or local scope you cannot access with any like var , let and const anything donst work. 

In hoisted var is a bad practice to write codes beacuse if you made a mistake with var it dont give any error it gives undefined so it is very problem to find the error but in let and const it is also hoisted but they in TDZ zone temporal dead zone it gives error and show the line where you made the mistake.

In the var we can create same variable name so it is very confusing to exate variable but in let and const we cannot create the same variable.

In the let and var we can update the the variable value but in the const it can't happen.

