
// INLINE TYPE OBJECT
const balanceCheck: { accountNo: string; statement: boolean } = {
  accountNo: "ACC-99887766",
  statement: true
};

console.log("Inline Type Object:", balanceCheck.accountNo, balanceCheck.statement);


// OBJECT TYPE
const audit: object = {
  channel: "WEB",
  env: "QA"
};

console.log("Object Type:", typeof audit, audit);


// TYPE ALIAS
type transferDetails = {
  readonly transactionId: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  remarks?: string;
};

const transfer: transferDetails = {
  transactionId: "TXN-2026-001",
  fromAccount: "ACC-99887766",
  toAccount: "ACC-11223344",
  amount: 5000
};

console.log("Type Alias:", transfer.transactionId, "Amount:", transfer.amount);


// USING CLASS
class savingsAcc {
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

const accountObj = new savingsAcc("ACC-99887766", "Rohan Kulkarni", 25000);
accountObj.deposit(transfer.amount);

console.log("Class Object:", accountObj.holderName, "Updated Balance:", accountObj.getBalance());