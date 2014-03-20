---
layout: project
type: project
publish: false

title: An Introduction to Smart Pointers
languages: [C++]
cover_image:

excerpt: "Learning how to leverage smart pointers for better memory management."

github: "https://github.com/mclayton7/PathExplorationQt4"

sources: ["http://en.wikipedia.org/wiki/Dijkstra%27s_algorithm", "http://users.ece.gatech.edu/~riley/ece3090"]

author:
  name: Mac Clayton
  link: "http://macclayton.com"  
---

#Intro
[Smart Pointers](http://en.wikipedia.org/wiki/Smart_pointer) are a great way to keep track of [pointers]( http://en.wikipedia.org/wiki/Pointer_\(computer_programming\)) in large applications. Unlike traditional pointers, a smart pointer not only keeps an address that points to a block of memory, but it also keeps track of the number of references to the object. Another phrase for smart pointers is [Automatic Reference Counting](http://clang.llvm.org/docs/AutomaticReferenceCounting.html) which is used heavily in iOS development.

#Example
Below is an example of a smart pointer for objects of class A. This is a simple class that stores "data" as an integer.

###Note: For practical applications, you would create a templated SmartPointer class or use std::unique_ptr as definied in [C++11](http://en.wikipedia.org/wiki/C%2B%2B11)

###Class SmartPointer
<pre class="line-numbers"><code class="language-c++">class SmartPointer
{
public:
  SmartPointer(A*);
  SmartPointer(const SmartPointer&); // Copy Constructor
  ~SmartPointer();                   // Destructor
  SmartPointer& operator=(const SmartPointer& rhs); // Assignment Operator

private:
  A* sharedPtr; // Pointer to the object in memory that gets shared
  int*  refCount;   // Number of references that exist
  int lth;          // Length of shared memeory

}</code></pre>

###Class A
<pre class="line-numbers"><code class="language-c++">class A
{
public:
  A(int a0);  // Default Constructor
  ~A();       // Default Destructor

public:
  int data;   // Data stored
};

// Constructor
A::A(int a0)
 : a(a0)
{
  std::cout << "Hello from A Constructor" << std::endl;
}

// Destructor
A::~A()
{
  delete data;
  std::cout << "Hello from A Destructor" << std::endl;
}
</code></pre>