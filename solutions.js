// setAlarm 
{
    function setAlarm(employed, vacationing) {
    if (employed && !vacationing) {
      return true;
    } else {
      return false;
    }
  }
  console.log(setAlarm(true, true)); 
  console.log(setAlarm(false, false)); 
  console.log(setAlarm(false, true)); 
  console.log(setAlarm(true, false)); 

}

// Count Odd Numbers
{
    function oddNumberCount(num) {
        let count = 0;
        for (let i = 1; i < num; i += 2) {
          count++;
        }
        return count;
      }

      console.log(oddNumberCount(7)); 
      console.log(oddNumberCount(16)); 
      
}

// Disemvoweling Trolls
{
    function trollsBeGone(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (vowels.indexOf(char) === -1) {
      result += char;
    }
  }

  return result;
}

console.log(trollsBeGone("This website is for losers LOL")); 
   
}

// Bank Account Summary
{

    const bankInfo = {
        savings: 1000,
        checking: 2000,
        moneyMarket: -500,
        creditCard: -200
      };
      
      function bankAccountSummary(bank) {
        let total = 0;
        for (const account in bank) {
          total += bank[account];
        }
        return total;
      }
      
      const bankTotal = bankAccountSummary(bankInfo);
      
      function inTheRed(total) {
        return total < 0;
      }
      console.log(bankAccountSummary(bankInfo)); 
      console.log(inTheRed(bankTotal));
            
}