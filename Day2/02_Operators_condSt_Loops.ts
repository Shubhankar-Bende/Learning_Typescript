
/**
 * ============================================================================
 * DAY 2: OPERATORS, CONTROL FLOW & LOOPS IN TYPESCRIPT
 * ============================================================================
 * Domain Example: Banking Loan Processing System
 * 
 * Overview:
 * 1. Financial Calculation (Operators & Conditional Statements)
 *    - Calculates processing fees based on account status (if-else)
 *    - Evaluates loan risk level using a ternary operator (? :)
 * 
 * 2. Repayment Schedule Breakdown (For Loop)
 *    - loan tenure to track monthly balance deductions (-=)
 * 
 * 3. Credit Verification (While Loop)
 *    - retry attempts for fetching dummy credit reports
 * 
 * 4. Eligibility (Nested If-Else & Logical Operators)
 *    - Enforces age and financial rules using logical AND (&&) and OR (||).
 * 
 * 5. Authentication (Do-While Loop)
 *    - Executes OTP verification retries
 * 
 * 6. Alternative Product Routing (Switch-Case & Break)
 *    - Routes non-eligible applicants to secondary options (Gold Loan, Bank FD)
 * ============================================================================
 */


let hasBankAccount:boolean = false;                                                         // checking if customer has savings account in bank in which apply loan
const loanAmount:number = 50000;
let interestRate:number = 0.14;
const loanTenure:number = 12;

let processingFees:number;                                                                  // will chk processing fees based on whether customer has account or nt
if (hasBankAccount) 
    {
        processingFees = 0;
    }
else {
        processingFees = 0.02 * loanAmount;
    }

let totalAmountPayable:number = (loanAmount * interestRate) + loanAmount + processingFees;   
const monthlyEMI:number = totalAmountPayable/loanTenure;                                   

console.log(`Loan Amount: Rs. ${loanAmount}`); 
console.log(`Processing Fees: Rs. ${processingFees}`); 
console.log(`Interest Rate: ${interestRate}%`);
console.log(`Loan Tenure: ${loanTenure} months`);
console.log(`Total Loan Amount Payable: Rs. ${totalAmountPayable}`); 
console.log(`Monthly Loan EMI: Rs. ${monthlyEMI.toFixed(2)}`);                               //.toFixed(2) formats the no. into string with 2 decimal places 

const loanRisk:string = loanAmount < 25000 ?  "Low Risk" : "High Risk";                      //Ternary operator used to chk loan risk
console.log(`Loan is of: ${loanRisk}`);


console.log("-------------------------------------------------------");
console.log("Following is amount payable structure");
let remainingLoanAmount:number = totalAmountPayable;                                         //for loop used to calculate remain loan amount to be paid
console.log(`EMI paid 0 & Remaining loan amount: Rs. ${remainingLoanAmount.toFixed(2)}`);
for (let emiMonth:number = 1; emiMonth <= loanTenure; emiMonth++) {
        remainingLoanAmount -= monthlyEMI;
        if (remainingLoanAmount < 0) {
            remainingLoanAmount = 0;
        }
        console.log(`EMI paid ${emiMonth} & Remaining loan amount: Rs. ${remainingLoanAmount.toFixed(2)}`);
}

console.log("-------------------------------------------------------");
console.log("Checking credit report of customer");
let creditStatus:string = "Failed";                                                         // while loop used for checking report
let creditStatusAttempt:number = 1;
while (creditStatus !== "Success" && creditStatusAttempt <= 3 ) {                       
        console.log(`Credit report for loan application not fetched yet - Retrying ${creditStatusAttempt}`);
        ++creditStatusAttempt;
        if (creditStatusAttempt == 3) {
            creditStatus = "Success";
            console.log('Credit report for loan application fetched successfully');
        }
}

console.log("-------------------------------------------------------");
let customerCreditScore:number = 702;
let customerSalary:number = 80000;
let customerAge:number = 19;
console.log(`Customer Credit Score: ${customerCreditScore}`);
console.log(`Customer Salary: ${customerSalary}`); 

let loanEligible:boolean;                                                                    //loan eligible or not conditions added
let alternateLoan:string = "BankFD";
if (customerAge > 18 && (customerCreditScore >= 700 || customerSalary >= 10000))
{
    if(loanAmount <= 4 * customerSalary) {                                                   // Nested if logic used for loan condition
        loanEligible = true;
        console.log("Loan amount can be granted successfully");

        let otpVerified:boolean = false;
        let otpRetries:number = 1;
        console.log("Authentication is required");
        do{                                                                                  //do while loop used for authentication logic
            console.log(`Retrying Otp - ${otpRetries}`);
            if (otpRetries === 3) {
                otpVerified = true;
                console.log('Otp verified and Authentication completed');
            }
            ++otpRetries;
        }
        while(!otpVerified);
    }
    else {
        console.log("Loan amount cannot be granted")
    }
}
else {                                                                                       //Switch st. used if loan fails
    console.log("Below alternative loan option is available");
    switch (alternateLoan) {
        case ("GoldLoan") : console.log(`Eligible for loan with - Gold_Loan`);
        break;
        case ("BankFD") : console.log(`Eligible for loan with - Bank_FD`);
        break;                                                                              // break st. used to stop further execution
        default : console.log ("Alternate loan eligibility not found");
        }
}