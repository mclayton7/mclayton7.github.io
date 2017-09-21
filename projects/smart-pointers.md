---
layout: project
type: project
publish: true

title: An Introduction to Smart Pointers
languages: [C++]
cover_image:

excerpt: "Learning how to leverage smart pointers for better memory management."
github:
sources:

author:
  name: Mac Clayton
  link: "http://macclayton.com"  
---

# Intro
[Smart Pointers](http://en.wikipedia.org/wiki/Smart_pointer) are a great way to keep track of [pointers]( http://en.wikipedia.org/wiki/Pointer_\(computer_programming\)) in large applications. Unlike traditional pointers, a smart pointer not only keeps an address that points to a block of memory, but it also keeps track of the number of references to the object. Another phrase for smart pointers is [Automatic Reference Counting](http://clang.llvm.org/docs/AutomaticReferenceCounting.html) which is used heavily in iOS development.

# Example
Below is an example of a smart pointer for templated types. This is a simple class that stores "data" as an integer.

### For practical applications, you would create a templated SmartPointer class or use std::shared_ptr as defined in the [C++11](http://en.wikipedia.org/wiki/C%2B%2B11) standard.

### Class SmartPointer
```cpp
#pragma once

template <class T>
class SmartPointer
{
public:
  SmartPointer(T* data);
  SmartPointer(const SmartPointer& other);
  ~SmartPointer();

  SmartPointer& operator=(const SmartPointer& other); 
  const T& operator*() const;  
  T& operator*();              
  const T* operator->() const;
  T* operator->();

private:
  T* data_;
    int* refCount_;
};

template <class T>
SmartPointer<T>::SmartPointer(T* data)
  : data_(data)
  , refCount_(new int(1))
{
}

template <class T>
SmartPointer<T>::SmartPointer(const SmartPointer& other)
  : data_(other.data_)
  , refCount_(other.refCount_)
{
  (*refCount_)++;
}

template <class T>
SmartPointer<T>::~SmartPointer()
{
  (*refCount_)--;
  if (*refCount_ == 0)
    { 
    delete data_;
    delete refCount_;
  }
}

template <typename T>
SmartPointer<T>& SmartPointer<T>::operator=(const SmartPointer<T>& other)
{
  if (&other == this)
  {
    return *this;
  }

  (*refCount_)--;
  if (*refCount_ == 0)
  {  
    delete data_;
    delete refCount_;
  }
  refCount_ = other.refCount_;
  data_ = other.data_;
  (*refCount_)++; 
  return *this;
}
 
template <typename T>
const T& SmartPointer<T>::operator*() const
{
  return *data_;
}

template <typename T>
T& SmartPointer<T>::operator*()
{
  return *data_;
}

template <typename T>
const T* SmartPointer<T>::operator->() const
{
  return data_;
}

template <typename T>
T* SmartPointer<T>::operator->()
{
  return data_;
}

```