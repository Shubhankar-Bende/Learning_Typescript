
console.log("====Multiline string====");
const receipt: string = `
Transaction Receipt : ParaBank   
Acc Holder : shubhankar bende
Acc No. : 99887766
IFSC : PARA01234
Transfer Amount: ₹ 25,500.75
Status : transaction successful
Reference ID : TXN-88412`;

console.log(receipt);


console.log("\n====String Immutable====");
const originalStatus: string = "pending";
originalStatus.toUpperCase();                                       // this does not modify originalstatus
console.log("Immutability Check (Unchanged):", originalStatus);     // o/p - "pending"

const updatedStatus: string = originalStatus.toUpperCase();         // assigns new string
console.log("Immutability Check (New String):", updatedStatus);     // o/p - "PENDING"


console.log("\n====Trimming====");
const BalanceText: string = "   ₹ 1,50,000.00   ";
console.log("trim functionality : " , `"${BalanceText.trim()}"`);           // o/p - "₹ 1,50,000.00"
console.log("trimStart functionality : ", `"${BalanceText.trimStart()}"`);    // o/p - "₹ 1,50,000.00   "
console.log("trimEnd functionality : ", `"${BalanceText.trimEnd()}"`);        // o/p - "   ₹ 1,50,000.00"


console.log("\n====Case Conversion====");
const customerName: string = "shubhankar bende";
const customerEmail: string = "SHUBHANKAR.BENDE@PARABANK.COM";

console.log("Uppercase Name :", customerName.toUpperCase());                // o/p - "SHUBHANKAR BENDE"
console.log("Lowercase Email:", customerEmail.toLowerCase());               // o/p - "shubhankar.bende@parabank.com"


console.log("\n====Length & character access====");
const ifscCode: string = "PARA01234";
console.log("IFSC Length :", ifscCode.length);
console.log("First Char :", ifscCode.charAt(0));
console.log("Last Char :", ifscCode.at(-1));   


console.log("\n====Searching & Validation====");
const apiEndpoint: string = "https://api.parabank.com/v1/accounts/transfer.json";
const refId: string = "TXN-88412-5464-TXN";

console.log("Is HTTPS? :", apiEndpoint.startsWith("https"));   
console.log("Is JSON endpoint? :", apiEndpoint.endsWith(".json"));       
console.log("Has 'accounts'? :", apiEndpoint.includes("accounts"));     
console.log("First 'TXN' index :", refId.indexOf("TXN"));                 
console.log("Last 'TXN' index :", refId.lastIndexOf("TXN"));            


console.log("\n====Extracting substrings====");
const accountNo: string = "ACC-99887766";
const accPrefix: string = accountNo.substring(0, 3);         // Using .substring() to get prefix
const lastDigit: string = accountNo.slice(-4);              // Using .slice() with negative index to mask account number
const maskedAcc: string = `XXXX-XXXX-${lastDigit}`;

console.log("Account Prefix :", accPrefix);
console.log("Masked Account No :", maskedAcc);


console.log("\n====Padding====");
const branchSeq: string = "42";
const paddedCode: string = branchSeq.padStart(5, "0");    // .padStart(targetLength, padString) adds characters to the left
const paddedTag: string = "NEFT".padEnd(8, "-");          // .padEnd(targetLength, padString) adds characters to the right

console.log("Formatted Branch :", paddedCode);
console.log("Formatted Tag :", paddedTag);


console.log("\n====Replacing & Splitting====");
const transferAmt: string = "₹ 25,500.75";
const numericAmt: number = parseFloat(transferAmt
    .replace("₹", "")
    .replaceAll(",", ""));
console.log("Parsed Amt :", numericAmt);

const ledgerCsvRow: string = "TXN-88412,DEBIT,25500.75,SUCCESS";
const ledgerFields: string[] = ledgerCsvRow.split(",");           // Split transaction log CSV row into individual fields
console.log("Parsed CSV Fields  :", ledgerFields); 


console.log("\n====Combining & Repeating====");
const banner: string = "#".repeat(10);
const summary: string = "Transaction ".concat(ledgerFields[0], " -> ", ledgerFields[3]);

console.log(banner);
console.log(summary);
console.log(banner);