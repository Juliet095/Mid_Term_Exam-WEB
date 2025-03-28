# Mid_Term_Exam-WEB
##  SECTION A 


1. b . [1, 2, 3, 4]

2. c . Character 

3. b ."object" 

4. b. To modify each element and return a new array

5. b . 10

6. d. All of the above()

7. a. pop()

8. c. const


 
## SECTION B


# no. 1 Explain the difference between let, const, and var in JavaScript
  "let" is block scoped,  It can be reassigned but cannot be redeclared within the same scope. 
  "var" is function scoped,  It can be reassigned and redeclared within the same scope. 
  "const" is block scoped,  it cannot be reassigned or redeclared .

# n. 2 What are JavaScript objects, and how are they different from arrays?
   JavaScript objects are collections of key-value pairs where keys are unique identifiers (strings or symbols) and values can be of any data type. 
   Arrays, on the other hand, are ordered collections of values (indexed by numbers) and are typically used to store lists of similar items. 
   Objects are better suited for representing structured data, while arrays are ideal for ordered lists.

# no. 3 Explain the difference between == and === in JavaScript.
   Operator(==) compares only the values if they are the same or not  whereas operator(===) compares the datatype and the value if they are the same.

# n. 4 What is an event in JavaScript? Provide an example of how to handle a button click event.
   An event is an operation done in the browser typically trigured by the user.
    example.
#   html code
    <button id="button" >click me</button>
    <p id="message"></p>
# javascript code
    const  button = document.getElementById("button");
button.onclick = function () {
    document.getElementById("message").innerHTML = "You have clicked the button"
};

# n. 5 Describe the forEach and map methods in JavaScript. How are they similar, and how do they differ.
   Amap() is a method a vailable on  arrays that allows you to create a new array by applying a given function to each element of the original array. 
   Both "forEach" and "map" are array methods in JavaScript used to iterate over elements of an array.



