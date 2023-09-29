/**
 * @param {string[]} emails
 * @return {number}
 */

// best solution interms of time complexity
const numUniqueEmails = (emails) => {
  let hashMap = new Map();

  for (let email of emails) {
    let emailArr = email.split("@");
    let localName = emailArr[0].split("+")[0].replace(/\./g, "");
    let domainName = emailArr[1];
    let validEmail = localName + "@" + domainName;
    hashMap.set(validEmail, validEmail);
  }
  return hashMap.size;
};

// best solution interms of space complexity
const numUniqueEmails2 = (emails) => {
  const map = emails.map((emailStr) => {
    const plusIndex = emailStr.indexOf("+");
    const dogIndex = emailStr.indexOf("@");
    let noPlus;
    if (plusIndex === -1) {
      noPlus = emailStr.slice(0, dogIndex);
    } else {
      noPlus = emailStr.slice(0, plusIndex);
    }

    return noPlus.replace(/\./g, "") + emailStr.slice(dogIndex);
  });

  return new Set(map).size;
};

let emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

console.log(numUniqueEmails2(emails));

/**
 * 
Here's the time and space complexity analysis of solution 1:

1. **Time Complexity**:

   - The code iterates through each email in the `emails` array once. This loop takes O(n) time, where "n" is the number of emails in the input array.

   - Inside the loop, the following operations are performed:
     - Splitting the email by "@" takes lienar time.
     - Splitting the local name and domain name and replacing characters using regular expressions (`split`, `replace`, etc.) are all linear operations in terms of the length of the strings involved.

   - Therefore, the overall time complexity of the code is O(n * m), where "n" is the number of emails and "m" is the maximum length of an email address.

2. **Space Complexity**:

   - The function uses a `Map` data structure to store unique email addresses. In the worst case scenario, where all emails are unique, the `Map` could potentially store all emails from the input array. This would result in a space usage proportional to the number of emails, or O(n) space.

   - The variables `hashMap`, `emailArr`, `localName`, `domainName`, and `validEmail` take up a constant amount of space. They do not scale with the size of the input.

   Overall, the space complexity of the code is O(n), where "n" is the number of emails in the input array.

In summary, the code has a time complexity of O(n * m) and a space complexity of O(n), where "n" is the number of emails and "m" is the maximum length of an email address. The code efficiently identifies unique email addresses using a `Map` data structure.

 */
