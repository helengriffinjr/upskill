# Python Basics

### Name Assignment (Variables & Constants)
- **names**, **variables** can bind any obj value, obj types using assignment `=` operator 
- **constant** names/variables assign only once
    - keep visible to all functions and classes in the program
    - use `Snake_Case` convention to remind myself not to re-assign/re-bound or change value/type
### Functions
- explicitly `return` a value or object 
- functions w/out `return` keyword implicitly return `None`
### Comments
- use `#` to write a comment
- python don't support multi-line comment marks
### Docstrings
- a statement that summarize a function or object purpose
- they are optional, but if used must be 1st statement of function body
``` python
def myFunc(blah, blahBlah):
    """ This statement should explains the reason for this function to exist.

    keyword arguments:
    blah -- something...
    blahBlah -- ...etc
    """
    if blah == 'omg' and blahBlah == 'still talking':
        return ignoreThem

  ```