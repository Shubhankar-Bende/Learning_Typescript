// Named Function to check loan applicability
function customerLoanEligibility (customerAge:number, employeeStatus:string, customerCreditScore:number): string {

    if (customerAge >= 18 && employeeStatus === "Employed" && customerCreditScore >= 700) {
        return "Customer is eligible for loan application";
    }

    if (customerAge >= 18 && employeeStatus === "Employed" && customerCreditScore >= 600 && customerCreditScore < 700) {
        return "Agent needs to manually review the application"
    }

    const failures: string[] = [];                                                             // it logs which parameter failed

    if (customerAge < 18) {
        failures.push(`Recieved Age: "${customerAge}" but required age is '18'`);              // .push is an array method for adding elements at end of array
    }

    if (employeeStatus !== "Employed") {
        failures.push(`Received Employee Status: "${employeeStatus}" but required status should be 'Employed'`);
    }

    if (customerCreditScore < 600) {
        failures.push(`Recieved Credit Score: "${customerCreditScore}" but credit score must be atleast '600'`);
    }

        return `Customer is not eligible for loan application - Reasons: \n[${failures.join("\n")}]`;           // .join method is used here for better formating
}

let loanStatus = customerLoanEligibility (23, "Employed", 710);
console.log(loanStatus);


// Default Parameter > to check dynamic saving interest and Optional Parameter > for coupon code logic
console.log("===============================================");
function calculateTotalAmount (principalAmount:number, interestRate:number = 0.065, couponCode?: string | number): number {

    if (couponCode === "Diwali10" && principalAmount > 50000) {
        const decreaseInterest = interestRate - (interestRate * 0.10);
        console.log(`Principal Amount: ${principalAmount}`);
        console.log(`Interest Rate: ${interestRate}`);
        console.log(`Coupon Code: ${couponCode}`); 
        const totalPayableAmount = principalAmount + (principalAmount * interestRate);
        console.log(`Total Loan Payable Amount: ${totalPayableAmount}\n`);
        return principalAmount + (principalAmount * decreaseInterest);
    }

    console.log(`Principal Amount: ${principalAmount}`);
    console.log(`Interest Rate: ${interestRate}`);
    console.log(`Coupon Code: ${couponCode}`); 
    const totalPayableAmount = principalAmount + (principalAmount * interestRate);
    console.log(`Total Loan Payable Amount: ${totalPayableAmount}\n`);
    return totalPayableAmount;
}

if (loanStatus === "Customer is eligible for loan application") {            // calculateTotalAmount function conditionally called
    calculateTotalAmount (43000);                                            // default interest rate considered
    calculateTotalAmount (52000);                    
    calculateTotalAmount (68000, undefined, "Diwali10");                     // here we passed undefined because i want to consider interest rate based on our code logic
    calculateTotalAmount (81000, 0.10, "Diwali50");                          // explicitly passed interest rate so TS will considered this new rate & not default one
}


// Rest Parameter > for checking customer bank transaction & total amount spent
console.log("===============================================");
function customerTransactions (customerAccountNumber:number, ...accountTransactions:number[]): string {

    let amountSpent:number = 0;
    let highAmount:number = 0;

    for (let i:number = 0; i < accountTransactions.length; i++) {                   // for loop - used for account transaction indexing
        amountSpent = amountSpent + accountTransactions[i];

        if (accountTransactions[i] >=  10000) {                                     // here we are checking how many transactions customer does upon specific limit
        highAmount++                                                        
        }

    }
        
    console.log(`Account Number: "${customerAccountNumber}" did "${accountTransactions.length}" transactions having sum of Rs. ${amountSpent} and high value transaction found "${highAmount}"\n`);
    return `Account: ${customerAccountNumber} | Count: ${accountTransactions.length} | Total: Rs.${amountSpent} | High Value: ${highAmount}`;
}

customerTransactions (1234567, 5200, 5000, 34000, 28000);
customerTransactions (7867868767, 200, 500, 8000, 12000);
customerTransactions (56756757);                                                       // when we pass nothing then default values will be shown
//customerTransactions (1234567, 5200, 5000, 34000, 28000);                           // function has no memory to store past things due to which here i have passed duplicate account number and got fresh output for this even when it was passed earlier 


// Overloading Function and Arrow Function
console.log("===============================================");
function loanDisbursement (principalAmount: number, processingFees:number):number;
function loanDisbursement (otherDeduction:number):number;

function loanDisbursement (amount:number, processingFees?:number):number {

    
}
