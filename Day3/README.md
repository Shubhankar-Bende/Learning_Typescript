## Topic 06: FUNCTIONS

# Key Learnings:

1. **Named Function:**
   - A function declared with a explicit name (Eg. `function Country {}`)
   - Syntax:
     ```typescript
     function functionname(parameter): returnType {} 
     functionName();
     ```

2. **Anonymous Function:**
   - A function without any name instead it is assigned to a variable which acts as its name.
   - Syntax:
     ```typescript
     let variableName = function (parameters) {}; // here we have closed the statement by using ; because here in anonymous function we are assigning function value in a variable unlike a Named function where we dont assign anything to variable
     variableName();
     ```

3. **Arrow/Lambda Function:**
   - It was introduced in ES6, it is the concise syntax for writing anonymous function, it uses a fat arrow (`=>`) notation.
   - Arrow function preserves "lexical scope of this keyword" i.e in regular function this keyword changes dynamically based on where it is called or later where it is executed. But in Arrow function, this keyword never changes its identity, it always refers to where it was originally written in code (static).
   - Syntax:
     ```typescript
     let functionName = (parameter): returnType => {}
     ```

4. **Callback Function:**
   - It is a function which is passed as an argument to another function.
   - It execute after the execution of parent function.
   - In modern Playwright with TypeScript, we don't rely on traditional asynchronous callbacks (or deeply nested callback chains like `.then(() => ...)` from older JavaScript/Selenium code) because Playwright is built natively around Promises using `async` / `await`. However, Playwright does still use callback functions in specific structured places, such as inside `test('scenario name', async ({ page }) => { ... })` blocks, route interception, or custom assertions (`expect.poll`).
   - Syntax:
     ```typescript
     function FunctionName (parameter, callBackFunctionName : (callBackParameterName: type) => callBackReturnType) : FunctionReturnType {
         callBackFunctionName (callBackParameterName);  
     }
     ```

5. **Overloading Function:**
   - It allows us to define multiple versions of function with same name but different parameters or return types.
   - Steps require to follow:
     - Write a signature for function
     - implement a function (implemented function should satisfy all signature of function)
     - calling a function
   - Syntax:
     ```typescript
     // Overload function signaatures (No body {})
     function functionName (param1: type): returnTypeA;
     function functionName (param1: type, param2: type): returnTypeB;

     // Implementation
     function functionName (param1: type, param2?: type): returnTypeA | returnTypeB {}
     ```

# Parameters
- Function Parameters are declared inside the function and they act as placeholders (variable) for the input that function will recieve. The input to functional parameters (real value) is known as "Arguments".
  ```typescript
  function Country (x: string, y: string) {} // x, y         ---> functional parameters
  Country ("Asia", "India");                 // Asia, India   ---> arguments
- "Rest, Optional and Default Parameters" are types of parameters.
- Parameters helps us in write code once and run it multiple times with different inputs which enables different output/actions based on our inputs.

1. **Rest Parameters** - 
    a. Rest parameters allows a function to accept indefinite number of arguments and bundle them up into a single array i.e the type should always be an array (Eg. string[])
    b. Function can have only "one" rest parameter.
    c. Syntax: `` Prefix the last parameters with three dots (...args) ``

2. **Optional Parameters** - 
    a. This are optional to pass in arguments i.e user can choose whether to supply that argument. If not supplied, its runtime value inside the function becomes "undefined".
    b. Optional parameters should be defined after required parameters.
    c. Syntax: `` Add ? after a parameter (Eg. function (a:number, b?:string)) ``

3. **Default Parameters** - 
    a. When we pass a value for a parameter while initializing then its called default parameter. Value is automatically used if the caller omits the argument or explicitly passes undefined
    b. Using default parameters automatically makes that parameter optional, meaning you do not need to use the ? optional modifier.
    c. Default parameters should be placed at the end of our parameter list (after required parameters). If we place a default parameter before a required parameter, then we are forced to explicitly pass undefined to skip it and hit the default behavior.
    d. Syntax: `` While initializing use   = value ``

# Return Type -
    a. Return statement is used when we want to store a value into another variable apart from where it was declared.
    b. If we want to print a statement then return type is not required as printing statement happens irrespective of returntype.