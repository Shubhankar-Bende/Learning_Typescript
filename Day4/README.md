
# ============== Topic 07: ARRAY & ARRAY METHODS ==============

## Key Learnings:

1. **Array:**
    - An ordered collection of items stored sequentially under a single variable name.
    - Array indexing always starts from 0.
    - Syntax:   
        ```typescript
        let arrayName: type[] = [item1, item2];
        let arrayName: Array<type> = [item1, item2];
        arrayName[index];
        ```

2. **Tuple:**
    - A special type of array with a fixed length and fixed data types at specific index positions.
    - Syntax:
        ```typescript
        let tupleName: [type1, type2, type3] = [val1, val2, val3];
        tupleName[index];
        ```

3. **Mutating Methods (push, pop, shift, unshift):**
    - Methods that modify the original array directly by adding or removing elements.
        - .push(): Adds element(s) to the end
        - .pop(): Removes the last element
        - .unshift(): Adds element(s) to the start
        - .shift(): Removes the first element
    - Syntax:
        ```typescript
        array.push(element);
        array.pop();
        array.unshift(element);
        array.shift();
        ```

4. **Slice Method:**
    - Copies a portion of an array into a new array without modifying the original array. The end index is non-inclusive.
    - Syntax:
        ```typescript
        array.slice(startIndex, endIndex);
        ```

5. **Splice Method:**
    - Modifies the original array by removing, replacing or inserting elements at a specific index.
    - Syntax:
        ```typescript
        array.splice(startIndex, deleteCount, item1, item2);
        ```

6. **Map Method:**
    - Creates a brand new array by calling a provided function on every single element in the original array.
    - Syntax:
        ```typescript
        array.map((element: type, index: number) => { return newValue; });
        ```

7. **Filter Method:**
    - Creates a brand new array containing only the elements that pass the test condition implemented by the callback function.
    - Syntax:
        ```typescript
        array.filter((element: type, index: number) => condition);
        ```

8. **Reduce Method:**
    - Reduces the entire array down to a single accumulated value.
    - Syntax:
        ```typescript
        array.reduce((accumulator: type, current: type) => updatedAccumulator, initialValue);
        ```

9. **ForEach Method:**
    - Executes a provided function once for each array element. Does not return a new array.
    - Syntax:
        ```typescript
        array.forEach((element: type, index: number) => { /* statements */ });
        ```

10. **Find Method:**
    - Returns the very first element that satisfies the given condition or undefined if nothing matches.
    - Syntax:
        ```typescript
        array.find((element: type) => condition);
        ```

11. **Includes Method:**
    - Checks whether an array includes a specific value among its entries, returning a boolean.
    - Syntax:
        ```typescript
        array.includes(searchElement);
        ```

12. **Some & Every Methods:**
    - .some(): Checks if at least one element passes the condition (returns boolean).
    - .every(): Checks if all elements pass the condition (returns boolean).
    - Syntax:
        ```typescript
        array.some((element: type) => condition);
        array.every((element: type) => condition);
        ```

13. **Flat Method:**
    - Flattens nested sub-arrays into a single-level array up to a specified depth.
    - Syntax:
        ```typescript
        array.flat(depth);
        ```

14. **Sort Method:**
    - Sorts the elements of an array in place. For numbers, a comparison function is required for numerical sorting.
    - Syntax:
        ```typescript
        array.sort((a: type, b: type) => comparisonResult);
        ```

15. **Join Method:**
    - Concatenates all elements of an array into a single string separated by a custom separator string.
    - Syntax:
        ```typescript
        array.join(separatorString);
        ```