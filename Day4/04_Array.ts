
// Arrays use case in banking transaction

let customerNames: string[] = ["Aarav", "Rutuja", "Vaibhav"];
let accountBalances: number[] = [15000, 45000, 1200, 89000];

console.log(`First Customer: ${customerNames[0]}`);                             // Using array elements using index
console.log(`Second Balance: Rs. ${accountBalances[1]}`);                       // Array indexing always start with 0


console.log("===============================================");
let customerRecord: [number, string, boolean] = [1009281, "Priyanka", true];    // Tuples are fixed length and fixed type array

console.log(`Account ID: ${customerRecord[0]}`);
console.log(`Holder Name: ${customerRecord[1]}`);
console.log(`Is Active: ${customerRecord[2]}`);


console.log("===============================================");
// Push, Pop, Shift, Unshift Methods
let recentTransaction: number[] = [500, 1200, 300];

recentTransaction.push(7500);                                                  // push() - adds element at the end of array
console.log("After push(7500):", recentTransaction);

let removeLast = recentTransaction.pop();                                      // pop() - removes the last element from the array
console.log(`After pop [Removed: ${removeLast}]:`, recentTransaction);

recentTransaction.unshift(100);                                                // unshift() - adds element at start of the array
console.log("After unshift:", recentTransaction);

let removeFirst = recentTransaction.shift();                                  // shift() - removes the first element from array
console.log(`After shift [Removed: ${removeFirst}]:`, recentTransaction);


console.log("===============================================");
// Slice & Splice Methods
let transactionHistory: number[] = [100, 250, 500, 1000, 5000];

let latestTransaction = transactionHistory.slice(2, 4);                        // slice() - copies a portion of array without modifying the original array
console.log("Original history:", transactionHistory);
console.log("Sliced transaction (index 2 to 3):", latestTransaction);

transactionHistory.splice(1, 1, 300);                                          //  here i removed 1 element at index 1 (i.e 250) and inserted 300 in its place
console.log("After splice - replaced 250 with 300:", transactionHistory);


console.log("===============================================");
// Map, Filter, Reduce Methods
let depositAmount: number[] = [1000, 5000, 10000, 500];

let bonusDeposits = depositAmount.map((amount: number) => amount * 1.05);       // here im adding festival bonus to each deposit
console.log("Original Deposits:", depositAmount);
console.log("Deposits with 5% Festival Bonus:", bonusDeposits);

let highValueDeposits = depositAmount.filter((amount: number) => amount >= 2000);   // here filtering deposits is >= 2000
console.log("High Value Deposits >= 2000:", highValueDeposits);

let totalDeposits = depositAmount.reduce((accumulator: number, current: number) => accumulator + current, 0);       // here used reduce() for getting total sum of all deposits
console.log(`Total Sum of Deposits: Rs. ${totalDeposits}`);


console.log("===============================================");
// forEach, find, includes, some, every Methods
let loanStatuz: string[] = ["Approved", "Pending", "Rejected", "Approved"];

console.log("Iterating using forEach:");                                            // forEach() - executes a function once for each array element
loanStatuz.forEach((status: string, index: number) => {
    console.log(`Row ${index}: Loan status ${status}`);});

let firstApproved = loanStatuz.find((status: string) => status === "Approved");     // forEach() - executes a function once for each array element
console.log(`Check first Approved status: ${firstApproved}`);

let hasRejected = loanStatuz.includes("Rejected");                                  // includes() - checks if array includes a specific value and returns boolean
console.log(`Check list include Rejected: ${hasRejected}`);

let hasPending = loanStatuz.some((status: string) => status === "Pending");         // some() - checks if atleast one element matches the condition
console.log(`Check any Pending loans: ${hasPending}`);

let allApproved = loanStatuz.every((status: string) => status === "Approved");      // every() - checks if all elements matches the condition
console.log(`Checks all loans Approved: ${allApproved}`);


console.log("===============================================");
// Flat, Sort & Join Methods

let nestedTransactions: (number | number[])[] = [100, 200, [300, 400], 500];        // flat() - flattens nested arrays into a single-level array
let flatTransactions = nestedTransactions.flat();
console.log("Flattened Transactions:", flatTransactions);

let unsortedAmounts: number[] = [5000, 100, 2500, 400, 12000];                      // sort () - sorts array element 
let sortedAmounts = unsortedAmounts.sort((a, b) => a - b);                          // here i used ascending sort
console.log("Ascending Sort:", sortedAmounts);

let accountAlerts: string[] = ["Low Balance", "Wrong UPI Pin", "Account Locked"];   // join() - joins all elements of an array into a single string
let alertMessageString = accountAlerts.join(" | ");
console.log(`Joined Alert String: "${alertMessageString}"`);