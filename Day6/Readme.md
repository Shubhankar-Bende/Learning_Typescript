# ============== Topic 09: OBJECTS ==============

## Key Learnings:

# Objects:
  - In TypeScript, an Object is used to store related data together in the form of key-value pairs.

# Ways to create Objects in TypeScript -

1. **Inline Type Object:**
    - Here, we define the structure (property names and their data types) directly inside the variable declaration itself.
    - Best for small, one-time test data or quick helper objects that we don't need to reuse in other files.
    - Syntax:
        ```typescript
        const variableName: { key1: type1; key2: type2 } = {
            key1: value1,
            key2: value2
        };
        ```

2. **Using the object Type:**
    - Object is a built-in generic type in TypeScript. It tells TypeScript that the variable can hold any non-primitive value (like an object, array or function) but not a string, number, or boolean.
    - Because the object type does not know which keys are inside and Typescript will throw an error if we try to access a property directly using dot notation.
    - Syntax:
        ```typescript
        const variableName: object = { key: value };
        ```

3. **Using Type Alias:**
    - A type alias lets us create our own custom template for an object. Once created, we can reuse that same type across multiple test files.
    - ? makes a property optional.
    - readonly prevents anyone from changing that property's value later.
    - Syntax:
        ```typescript
        type TypeName = {
          readonly id: string;
          name: string;
          remarks?: string;
        };
        ```

4. **Using Classes:**
    - A class is a complete blueprint that holds both data (properties) and actions (methods/functions). 
    - We create an actual object from a class using the new keyword.
    - Syntax:
      ```typescript
      class ClassName {
      property: type;
      constructor(param: type) {
      this.property = param;
      }
      methodName(): returnType {

      }
      }
      const obj = new ClassName(value);
      ```




