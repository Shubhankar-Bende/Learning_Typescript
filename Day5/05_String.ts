
// 1. MULTILINE STRINGS (Template Literals)
const rawReceipt: string = `
   Transaction Receipt - ParaBank Corp   
   Account Holder : shubhankar bende
   Account Number : ACC-99887766
   IFSC Code      : PARA0001234
   Transfer Amount: ₹ 25,500.75
   Status         : transaction successful
   Reference ID   : TXN-2026-88412-TXN
`;

console.log("--- RAW BANK RECEIPT ---");
console.log(rawReceipt);

// 2. STRING IMMUTABILITY
const originalStatus: string = "pending";
originalStatus.toUpperCase(); // Does NOT modify originalStatus
console.log("Immutability Check (Unchanged):", originalStatus); // "pending"

const updatedStatus: string = originalStatus.toUpperCase(); // Must assign new string
console.log("Immutability Check (New String):", updatedStatus); // "PENDING"

// 3. TRIMMING WHITESPACE (.trim, .trimStart, .trimEnd)
const dirtyBalanceText: string = "   ₹ 1,50,000.00   ";
console.log("trim()      :", `"${dirtyBalanceText.trim()}"`);      // "₹ 1,50,000.00"
console.log("trimStart() :", `"${dirtyBalanceText.trimStart()}"`); // "₹ 1,50,000.00   "
console.log("trimEnd()   :", `"${dirtyBalanceText.trimEnd()}"`);   // "   ₹ 1,50,000.00"

// 4. CASE CONVERSION (.toUpperCase, .toLowerCase)
const customerName: string = "shubhankar bende";
const customerEmail: string = "SHUBHANKAR.BENDE@PARABANK.COM";

console.log("Uppercase Name :", customerName.toUpperCase());  // "SHUBHANKAR BENDE"
console.log("Lowercase Email:", customerEmail.toLowerCase()); // "shubhankar.bende@parabank.com"

// 5. LENGTH & CHARACTER ACCESS (.length, .charAt, .at)
const ifscCode: string = "PARA0001234";
console.log("IFSC Length    :", ifscCode.length);    // 11
console.log("First Char     :", ifscCode.charAt(0)); // "P"
console.log("Last Char      :", ifscCode.at(-1));    // "4"

// 6. SEARCHING & VALIDATION (.includes, .startsWith, .endsWith, .indexOf, .lastIndexOf)
const apiEndpoint: string = "https://api.parabank.com/v1/accounts/transfer.json";
const refId: string = "TXN-2026-88412-TXN";

console.log("Is HTTPS?          :", apiEndpoint.startsWith("https"));      // true
console.log("Is JSON Endpoint?  :", apiEndpoint.endsWith(".json"));        // true
console.log("Has 'accounts'?    :", apiEndpoint.includes("accounts"));     // true
console.log("First 'TXN' index  :", refId.indexOf("TXN"));                 // 0
console.log("Last 'TXN' index   :", refId.lastIndexOf("TXN"));             // 15

// 7. EXTRACTING SUBSTRINGS (.slice, .substring)
const accountNo: string = "ACC-99887766";

// Using .substring() to get prefix
const accountPrefix: string = accountNo.substring(0, 3); // "ACC"

// Using .slice() with negative index to mask account number for UI validation
const lastFourDigits: string = accountNo.slice(-4);      // "7766"
const maskedAccount: string = `XXXX-XXXX-${lastFourDigits}`;

console.log("Account Prefix     :", accountPrefix); // "ACC"
console.log("Masked Account No  :", maskedAccount); // "XXXX-XXXX-7766"

// 8. PADDING (.padStart, .padEnd)
const branchSeq: string = "42";
const paddedBranchCode: string = branchSeq.padStart(5, "0"); // "00042"
const paddedTag: string = "NEFT".padEnd(8, "-");             // "NEFT----"

console.log("Formatted Branch   :", paddedBranchCode); // "00042"
console.log("Formatted Tag      :", paddedTag);        // "NEFT----"

// 9. REPLACING & SPLITTING (.replace, .replaceAll, .split)
const transferAmountStr: string = "₹ 25,500.75";

// Clean currency string into a numeric value for balance assertion
const numericAmount: number = parseFloat(
  transferAmountStr
    .replace("₹", "")
    .replaceAll(",", "")
    .trim()
);
console.log("Parsed Numeric Amt :", numericAmount); // 25500.75

// Split transaction log CSV row into individual fields
const ledgerCsvRow: string = "TXN-2026-88412,DEBIT,25500.75,SUCCESS";
const ledgerFields: string[] = ledgerCsvRow.split(",");
console.log("Parsed CSV Fields  :", ledgerFields); // ["TXN-2026-88412", "DEBIT", "25500.75", "SUCCESS"]

// 10. COMBINING & REPEATING (.concat, .repeat)
const bankBanner: string = "=".repeat(40);
const summaryLine: string = "Transaction ".concat(ledgerFields[0], " -> ", ledgerFields[3]);

console.log(bankBanner);
console.log(summaryLine); // "Transaction TXN-2026-88412 -> SUCCESS"
console.log(bankBanner);