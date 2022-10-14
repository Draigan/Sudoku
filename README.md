# Sudoku
The elusive Sudoku generator! This project was a lot of fun. I first tried making a sudoku generator after about a month of programming. I failed miserably. The algo would get stuck and crash. This time I used a neat idea of having every square represent an array of the numbers 1-9. When a number is put into a square, it will remove that number from the arrays of the col row and section it is a part of.  It also must pick a random square with the lowest possible numbers.

The algo will fail 50% of the time. It is possible to solve 100% of the time but requires backtracking the path and trying a new path. For my purposes, I just checked if the sudoku was perfect or not and rerolled accordingly. 

This is my first time working with OOP. I find it neat and tidy and I had a lot of fun writing this. I enjoy the fact that I can create an entirely new instance of my sudoku so easily.  
