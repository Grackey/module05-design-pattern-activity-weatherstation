# Answers to Additional Questions

### Compare the output of your new program to the output you got by running the original version. Are the lines printed in the same order? Why or why not?

The lines are printed in a different order. Because each time update is called, the line is printed, the order now depends on when the observer subsribed to weatherdata. The first subscriber will appear first, with later ones appearing later.

### Can you modify the code so that the various XXXDisplay classes are all implementations of the same interface? Why might or might not this be a good idea?

Having all the displays implemeting the same interface has both advantages and disadvantages. An advantage is being able to use this listener design pattern, which is good for handling large amounts of requests. However, because of the nature of interfaces, it can lack flexiblity. Some classes may not have behavoirs that accuratly align with the interface, so forcing all classes to implement that can result in poorly implemented methods for the sake of satisfying the interface conditions.