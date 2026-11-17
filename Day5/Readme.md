# ============== Topic 08: STRING & STRING METHODS ==============

## Key Learnings:

1. **String:**
   - Strings are immutable primitive data types used to represent textual data. 
   - TypeScript supports single quotes (''), double quotes ("") and backticks (``) i.e template literals.

2. **.length() Method:**
    - Counts and returns the total number of characters in a string, including spaces.
    - Syntax: `string.length`

3. **.charAt() Method:**
    - Finds and returns the single character located at a specific index position (counting starts from 0).
    - Syntax: `string.charAt(index: number)`

4. **.at() Method:**
    - Returns the character at a given index. Unlike .charAt(), it allows negative numbers to count backward from the end of the string.
    - Syntax: `string.at(index: number)`

5. **.indexOf() Method:**
    - Searches for a substring and returns the starting index position of its first occurrence. Returns -1 if the text is not found.
    - Syntax: `string.indexOf(searchValue: string, fromIndex?: number)`

6. **.toUpperCase() Method:**
    - Converts every letter in the string into capital letters.
    - Syntax: `string.toUpperCase()`

7. **.toLowerCase() Method:**
    - Converts every letter in the string into lowercase letters.
    - Syntax: `string.toLowerCase()`

8. **.substring() Method:**
    - Extracts a portion of text from a string between two specified index positions (startIndex and endIndex) and returns it as a new string, without modifying the original string.
        - Start Index: Included in the result (counting starts at 0).
        - End Index: Optional. Excluded from the result (it stops just before this index). If omitted, it extracts everything to the end of the string.
    - Syntax: `string.substring(startIndex: number, endIndex?: number): string`

9. **.includes() Method:**
    - Checks whether a specific word or character exists inside the string. Returns true if found, otherwise false.
    - Syntax: `string.includes(searchString: string, position?: number)`

10. **.startsWith() Method:**
    - Checks if the string begins with the exact characters you specify. Returns true or false.
    - Syntax: `string.startsWith(searchString: string, position?: number)`

11. **.endsWith() Method:**
    - Checks if the string finishes with the exact characters you specify. Returns true or false.
    - Syntax: `string.endsWith(searchString: string, length?: number)`

12. **.lastIndexOf() Method:**
    - Searches for a substring and returns the starting index position of its last occurrence. Returns -1 if not found.
    - Syntax: `string.lastIndexOf(searchValue: string, fromIndex?: number)`

13. **.trim() Method:**
    - Removes all extra blank spaces, tabs, and line breaks from both the beginning and the end of a string.
    - Syntax: `string.trim()`

14. **.trimStart() Method:**
    - Removes extra spaces only from the beginning (left side) of a string.
    - Syntax: `string.trimStart()`

15. **.trimEnd() Method:**
    - Removes extra spaces only from the end (right side) of a string.
    - Syntax: `string.trimEnd()`

16. **.replace()  Method:**
    - Finds the first matching word or pattern in a string and replaces it with new text.
    - Syntax: `string.replace(searchValue: string | RegExp, replaceValue: string)`

17. **.replaceAll()  Method:**
    - Finds every matching occurrence of a word or character in a string and replaces all of them with new text.
    - Syntax: `string.replaceAll(searchValue: string | RegExp, replaceValue: string)`

18. **.split() Method:**
    - Breaks a string into smaller pieces wherever a specific separator appears, and puts all those pieces into an Array.
    - Syntax: `string.split(separator: string | RegExp, limit?: number)`

19. **.concat() Method:**
    - Joins two or more strings together into one single string.
    - Syntax: `string.concat(...strings: string[])`

## String Immutability - 
    String immutability means that once a string is created in memory, its characters cannot be changed, added to, or removed directly. Any operation or method that appears to modify a string (like .toUpperCase(), .replace(), or .trim()) actually creates and returns a brand-new string in memory, leaving the original string completely untouched.

## Multiline Strings -
    A multiline string is a string that spans across multiple lines without needing escape characters like \n or string concatenation (+). In TypeScript, multiline strings are created using backticks (`) (Template Literals).