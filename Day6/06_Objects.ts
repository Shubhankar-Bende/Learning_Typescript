
// 1. INLINE TYPE OBJECT
// Shape is defined directly on the variable for a quick test payload
const quickBalanceCheck: { accountNo: string; includeMiniStatement: boolean } = {
  accountNo: "ACC-99887766",
  includeMiniStatement: true
};

console.log("1. Inline Type Object:", quickBalanceCheck.accountNo, quickBalanceCheck.includeMiniStatement);


// 2. 'object' TYPE
// Accepts non-primitive values, without exposing specific property types
const auditContext: object = {
  channel: "WEB",
  env: "QA"
};

console.log("2. 'object' Type:", typeof auditContext, auditContext);

// 3. TYPE ALIAS ('type')
// Reusable blueprint for structured banking test data
type TransferDetails = {
  readonly transactionId: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  remarks?: string;
};

const sampleTransfer: TransferDetails = {
  transactionId: "TXN-2026-001",
  fromAccount: "ACC-99887766",
  toAccount: "ACC-11223344",
  amount: 5000
};

console.log("3. Type Alias Object:", sampleTransfer.transactionId, "Amount:", sampleTransfer.amount);

// 4. USING CLASS ('class')
// Combines properties and methods; instantiated with 'new'
class SavingsAccount {
  readonly accountNo: string;
  holderName: string;
  private balance: number;

  constructor(accountNo: string, holderName: string, initialBalance: number) {
    this.accountNo = accountNo;
    this.holderName = holderName;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const accountObj = new SavingsAccount("ACC-99887766", "Rohan Kulkarni", 25000);
accountObj.deposit(sampleTransfer.amount);

console.log("4. Class Object:", accountObj.holderName, "| Updated Balance:", accountObj.getBalance());