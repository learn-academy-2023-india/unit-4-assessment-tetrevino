// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
// describe("fib", () => {
//  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequnce", () => {
//     const fibonacciLength1 = 6
//     expect(fib(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])

//     const fibonacciLength2 = 10
//     expect(fib(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// // Expected output: 
   
    
 
// })})

// // b) Create the function that makes the test pass.

// const fib = (num) => {
//     const sequence = [1,1]

//     for(i=2; i < num; i++) {
//         const nextNum = sequence[i-1] + sequence[i-2]
//         sequence.push(nextNum)
//     }
//     return sequence
// }

// Pseudo code: I had to AI this one, and view other code, but it makes sense in hindsight. Any two numbers add togther to create the next iteration in the sequence. We start the iteration at the [2] index and then add the first two numbers to give us 3. That value is then appeneded to the end of the array sequence. The number we pass is the length of the array at the end. 



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// describe("calculateVotes", () => {
//     it("calculates the difference between upvotes and downvotes", () => { 
//     const votes1 = { upVotes: 13, downVotes: 2 }
//     // Expected output: 11
//     expect(calculateVotes(votes1)).toEqual(11)

//     const votes2 = { upVotes: 2, downVotes: 33 }
//     // Expected output: -31
//     expect(calculateVotes(votes2)).toEqual(-31)
//     })
// })




// // b) Create the function that makes the test pass.

// const  calculateVotes = (votes) => {
    
//         return votes.upVotes - votes.downVotes
   
      
// }
// // Pseudo code: The test calls for a difference in votes, particularly, upvotes to downvotes. I figured an if statement that added votes, then an else statement which removed votes. But blackbox and others said just to remove a vote from the upvote to simulate the difference.

