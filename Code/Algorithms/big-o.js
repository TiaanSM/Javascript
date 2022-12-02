function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

summation(4); // 10 (1 + 2 + 3 + 4 = 10) 

// count the number of times a statement executes based on the input size.

// my program has 3 main statements to execute line 2,4,6

// line 2 executes once.
// line 4 executes four times.
// line 6 executes once.

// big-o is expressed in terms of its input
// as the size of the input increases, the time complexity also increases.



function sum(n) {
    return (n * (n + 1)) / 2;
}
// Time Complexity // 0(1) - constant

// irrespective of what the value of n is the return line of the function only executes once.