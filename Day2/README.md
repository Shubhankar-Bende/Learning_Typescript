##  ======= Topic 03: OPERATORS =========

# Key Learnings:
1. **Arithmetic Operators:**
    Arithmetic operators are used for doing basic mathematic calculations. 
    a. (+, -, *, /, %, **) are arithmetic operators.

2. **Comparison Operators:**
    a. Used to compare two values. Returns a boolean value.
    b. (<, ==, >, >=, <=, =) are comparison operators.
    c. In Typescript, we should always prefer strict comparison operators (=== and !==) over loose ones (== and !=) to avoid unexpected type errors.
    d. "==" checks only Values & "===" checks Values + Datatypes.

3. **Assignment Operators:**
    a. Used to assign values to variables.
    b. (+=, -=, *=, /=, %=) are assignment operators.
    c. "a = a + b" is equivalent to "a += b".

4. **Logical Operators:**
    a. Used to combine multiple conditions or invert booleans. Returns a boolean value.
    b. (&&, ||, !) are logical operators.
    c. Logical AND (&&) - Returns true only if both conditions are true
    d. Logical OR (||) - Returns false only if both conditions are false
    e. Logical NOT (!) - Returns opp. bollean value

5. **Increment and Decrement Operators:**
    a. Increment operator (++) increases a value of variable by 1 and Decrement operator (--) decreases a value of variable by 1.
    b. Pre (--a or ++a) - changes the value first and then uses it and in Post (a++ or a--) uses value first and then changes it.

6. **Ternary Operator:**
    a. It is shortcut to write "if...else" statement. 
    b. Syntax:-       Condition  ?  expression_if_true   :   expression_if_false

##  ======= Topic 04: CONDITIONAL STATEMENTS =========
# Key Learnings:
1. if Statement:
    a. Statement in block will execute only when condition is true otherwise it will skipped.
    b. Syntax:  if (condition) {code to execute}

2. if...else Statement: 
    a. statements of if block will be executed if condition is true otherwise statements of else block will be executed.
    b. Syntax:  if (condition) {}  else {}

3. if...else if...else Statement:
    a. when we need multiple condition then this used.
    b. Syntax:  if (condition) {}  elseif {}  elseif {}

4. Nested if:
    a. In this 'if' statement is placed under another 'if' or 'else' block. This is used when 2nd condition entirely depends on 1st condition.
    b. Syntax: if (outer condition) { if (inner condition) {} }

5. Switch Case:
    a. when there are multiple conditions then instead of using if...else statement we use Switch case.
    b. Syntax: 
    Switch (expression) {
        Case Value1 : statements;
        break;
        .
        .
        .
        default : statements;
    }

##  ======= Topic 05: LOOPS =========
# Key Learnings:
1. while Loop:
    a. Executes as long as condition is true, once at any point if condition gets false then only loop will stop.
    b. while loop 1st checks condition and executes statement only when condition is true
    c. Syntax:   while (condition) {statements}

2. do while Loop:
    a. do while loop executes 1st and then checks condition i.e this loop will execute atleast once even when condition is false.
    b. Syntax:  do {} while (condition);

3. for loop:
    a. we use for loop when we know for how many max. time the block will be executed i.e no. of iterations are known already accordingly we set condition.
    b. Syntax:    for (initialisation ; condition ; increment/decrement) {}

# Break Statment: 
    Break statement exits the loop immediately, once break is executed the loop terminates and code continues executing after the loop.

# Continue Statment:
    Continue statement is used when we want to ignore specific items in a collection while keeping the loop running for the remaining items.