##  ======= Topic 01: VARIABLES =========

# Key Learnings:
1. **variables:**
in TS there are 3 variables - var, let, const

2. **Scope:** 
    a.  `var` - Functional scope means we can declare anywhere within a function only and nt outside it. It can be used inside loop st. also inside that function.

    b. `let + const` - Block scope can be declared anywhere inside a function bt can be accessed only in block where it is declared (eg. inside if block, etc.)

3. **Declaration:**
    `let + var` can be declared without init. `const` strictly requires initialization.

4. **Re-Initialization:**
    `var + let` can be reinitialised but `const` cannot.

5. **Re-Declaration:**
    `var` can be redeclared but `let + const` cannot be redeclared

6. **Hositing:**
    It can trying to access a variable without declaring it.
    `var` can be access without declaring bt will give undefined as o/p. `let + const` cannot be access without declaring will throw exception error.


##  ======= Topic 02: DATATYPES =========
# Key Learnings:
1. `number, string, boolean` - are main datatypes in TS. 
    a. number type supports decimal & whole numbers
    b. string can be used using '' or "" or `` in TS

2. `any` - 
    It supports all datatypes.  If we do not know what data type an element will return then we should use `unknown` instead of any. (The unknown type is the safest alternative to any in TS)

3. `Union` - it is used when we are using multiple datatype for single variable 
    [Eg. const number | string | boolean = 22.34]

4. `null & undefined` - are used when value is absent

5. `void` - written with functions when that function doesn't returns any value

6. `bigInt` - 
    works with extremely large whole numbers that are too big for the standard number data type to handle safely. It can hold numbers as large as your computer's memory allows. 
    [Eg. let anotherLargeNumber: bigint = BigInt("9007199254740991");]
    [Eg. let largeNumber: bigint = 9007199254740991n;]

7. `typeof` - helps to give which datatype used
    [Eg. console.log(typeof a);]