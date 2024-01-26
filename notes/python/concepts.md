# Concepts: Deep Dive

#### [Python is...]({#about-python})

### About Python 

**Python** language is: 
- dynamic typed: at runtime: objects have a type
    - static typed: variables have a type
- strongly typed: type of a value won't change unexpectedly
    - changing a type requires explicit conversion
- general: supports diff programming styles (.e.g imperative, declarative (e.g., functional), and object-oriented)
- duck typing: duck test: *"If it walks like a duck and it quacks like a duck, then it must be a duck"*
    - to determine whether an object can be used for a particular purpose
    - object given a specific type if it has al the type's methods and properties -> 
        [Visualize Code](https://pythontutor.com/render.html#code=class%20Duck%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20def%20swim%28self%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20print%28'Duck%20swimming'%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20def%20fly%28self%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20print%28'Duck%20flying'%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%0Aclass%20Whale%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20def%20swim%28self%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20print%28'Whale%20swimming'%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%0Afor%20animal%20in%20%5BDuck%28%29,%20Whale%28%29%5D%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20animal.swim%28%29%0A%20%20%20%20%20%20%20%20%20%20%20%20animal.fly%28%29&cumulative=false&curInstr=17&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)
        ``` python
        class Duck:
            def swim(self):
                print('Duck swimming')
            
            def fly(self):
                print('Duck flying')
            

        class Whale:
            def swim(self):
                print('Whale swimming')
            

        for animal in [Duck(), Whale()]:
            animal.swim()
            animal.fly()

        
        # Duck swimming
        # Duck flying
        # Whale swimming
        # AttributeError: 'Whale' object has no attribute 'fly' 
        # whale is not a duck bec it can't fly
        ```
- **Everything is an object!**
- gradual typing: is a type system in which some variables and expressions may be given types and the correctness of the typing is checked at compile time (which is static typing) and some expressions may be left untyped and eventual type errors are reported at runtime (which is dynamic typing)
    - can choose either type paradigm (dynamic or static)
    - not requiring static typing to be use [wikipedia](https://en.wikipedia.org/wiki/Gradual_typing)