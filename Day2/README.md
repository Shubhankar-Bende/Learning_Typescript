##  ======= Topic 03: OPERATORS =========

# Key Learnings:
1. **Arithmetic Operators:**
    - Arithmetic operators are used for doing basic mathematic calculations. 
    - (+, -, *, /, %, **) are arithmetic operators.

2. **Comparison Operators:**
    - Used to compare two values. Returns a boolean value.
    - (<, ==, >, >=, <=, =) are comparison operators.
    - In Typescript, we should always prefer strict comparison operators (=== and !==) over loose ones (== and !=) to avoid unexpected type errors.
    - "==" checks only Values & "===" checks Values + Datatypes.

3. **Assignment Operators:**
    - Used to assign values to variables.
    - (+=, -=, *=, /=, %=) are assignment operators.
    - "a = a + b" is equivalent to "a += b".

4. **Logical Operators:**
    - Used to combine multiple conditions or invert booleans. Returns a boolean value.
    - (&&, ||, !) are logical operators.
    - Logical AND (&&) - Returns true only if both conditions are true
    - Logical OR (||) - Returns false only if both conditions are false
    - Logical NOT (!) - Returns opp. bollean value

5. **Increment and Decrement Operators:**
    - Increment operator (++) increases a value of variable by 1 and Decrement operator (--) decreases a value of variable by 1.
    - Pre (--a or ++a) - changes the value first and then uses it and in Post (a++ or a--) uses value first and then changes it.

6. **Ternary Operator:**
    - It is shortcut to write "if...else" statement. 
    - Syntax:-       `Condition  ?  expression_if_true   :   expression_if_false`

##  ======= Topic 04: CONDITIONAL STATEMENTS =========
# Key Learnings:

1. **if Statement:**
    - Statement in block will execute only when condition is true otherwise it will skipped.
    - Syntax:  `if (condition) {code to execute}`

2. **if...else Statement:** 
    - statements of if block will be executed if condition is true otherwise statements of else block will be executed.
    - Syntax:  `if (condition) {}  else {}`

3. **if...else if...else Statement:**
    - when we need multiple condition then this used.
    - Syntax:  `if (condition) {}  elseif {}  elseif {}`

4. **Nested if:**
    - In this 'if' statement is placed under another 'if' or 'else' block. This is used when 2nd condition entirely depends on 1st condition.
    - Syntax: `if (outer condition) { if (inner condition) {} }`

5. **Switch Case:**
    - when there are multiple conditions then instead of using if...else statement we use Switch case.
    - Syntax: 
    ```typescript
    Switch (expression) {
        Case Value1 : statements;
        break;
        .
        .
        .
        default : statements;
    }
    ```

##  ======= Topic 05: LOOPS =========
# Key Learnings:

1. **while Loop:**
    - Executes as long as condition is true, once at any point if condition gets false then only loop will stop.
    - while loop 1st checks condition and executes statement only when condition is true
    - Syntax:   `while (condition) {statements}`

2. **do while Loop:**
    - do while loop executes 1st and then checks condition i.e this loop will execute atleast once even when condition is false.
    - Syntax:  `do {} while (condition);`

3. **for loop:**
    - we use for loop when we know for how many max. time the block will be executed i.e no. of iterations are known already accordingly we set condition.
    - Syntax:    `for (initialisation ; condition ; increment/decrement) {}`

# Break Statment: 
    Break statement exits the loop immediately, once break is executed the loop terminates and code continues executing after the loop.

# Continue Statment:
    Continue statement is used when we want to ignore specific items in a collection while keeping the loop running for the remaining items.