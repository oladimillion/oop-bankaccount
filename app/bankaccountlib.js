class BankAccount{
  constructor(AccountType){
    this.balance = 0;
    this.isSavingsAcc = AccountType === "Savings" ? true : false;
  }

  testBeforeWithdraw(amount, balance){
    if(amount > balance || amount < 0 || balance === 0){
        return false;
    }
    else return true;
  }
  
  testBeforeDeposit(amount){
    if(amount <= 0){
      return false;
    }
    else{
      return true;
    }
  }

  enjoysInterest(){return this.isSavingsAcc;}
  overdraftAllowed(){return !this.isSavingsAcc;}
  withdrawalLimited(){return this.isSavingsAcc;}

  withdraw(amount){
    if(this.testBeforeWithdraw(amount, this.balance)) {
      this.balance -= amount;
    }
    else return "invalid operation";
  }

  deposit(amount){
    if(this.testBeforeDeposit(amount)){
      this.balance += amount;
    }
    else return "invalid operation";
  }
    
  availablebalance(){
    return this.balance;
  }
}

module.exports = BankAccount;
