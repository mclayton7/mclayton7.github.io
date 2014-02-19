---
title: RSA Cryptography
layout: default
---

RSA Cryptography In C++  
================
[ Github Source](https://github.com/mclayton7/RSA)
  
   

The [RSA Algorithm](http://en.wikipedia.org/wiki/RSA_(algorithm\) ) was developed in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman (hence the initials RSA). While MIT was granted a U.S. Patent for the algorithm in 1983, it has since been released into public domain.  
            
The Algorithm:
-------------------
Key Generation:  
1. Choose two distinct prime numbers, *p* and *q*.  
2. Compute *n = p\*q*  
3. Compute *φ(n) = φ(p)φ(q) = (p − 1)(q − 1)* where φ(n) is the [Totient Function](http://en.wikipedia.org/wiki/Euler%27s_totient_function)  
4. Choose an integer *e* such that 1 < *e* < φ(n) and gcd(*e*, φ(n)) = 1. In other words, *e* and φ(n) are coprime.  
5. Solve for *d*, where *d* is: *d = e−1*  
6. *e* is now the Public Key, and *d* is now the Private Key

Using C++
-------------
While this algorithm can be confusing to implement in C++, we can use a helpful library called [*GMP (GNU Multiple Precision Arithmetic Library)*](https://gmplib.org/).  Specifically, we'll use the following classes and functions to help us:  
+ `mpz_class(t)` - A class that allows us to handle large integers  
+ `mpz_mod(r, n, d)` - Performs the modulo operation  by setting `r` to `n mod d`.  
+  `mpz_gcd(rop, op1, op2)` - Sets `rop` to the greatest common divisor of `op1` and `op2`.  
+  `mpz_invert(rop, op1, op2)` - Computes the inverse of `op1 mod op2` and puts the result in `rop`.  












