let BankAccount = require("../app/bankaccountlib.js");

 describe("Banking transactions on SavingsAccount: ", function() {
	let SavingsAccount = new BankAccount("Savings");
	it(" account should be a typeof 'object' and an instance of BankAccount", function() {
      expect(typeof SavingsAccount).toEqual(typeof {});
      expect(SavingsAccount instanceof BankAccount).toBeTruthy();
    });

    it(" account balance should be 600 after 600 is deposited", function() {
      SavingsAccount.deposit(600)
      expect(SavingsAccount.availablebalance()).toBe(600);
    });
    
    it(" account balance should be 570 after 30 is withdrawn", function() {
      SavingsAccount.withdraw(570);
      expect(SavingsAccount.availablebalance()).toBe(30);
    });

    it(" account balance should be 0 after 30 is withdrawn", function() {
      SavingsAccount.withdraw(30)
      expect(SavingsAccount.availablebalance()).toBe(0)      
    });


    it(" should return 'invalid operation' if negative value deposited", function() {
      expect(SavingsAccount.deposit(-34)).toBe("invalid operation")
      expect(SavingsAccount.availablebalance()).toBe(0)    
    });

    it(" should allow interest", function() {
      expect(SavingsAccount.enjoysInterest()).toBeTruthy()
    });

    it(" should disallow overdraft", function() {
      expect(SavingsAccount.overdraftAllowed()).toBeFalsy()    
    });

    it(" should limit withdrawal", function() {
      expect(SavingsAccount.withdrawalLimited()).toBeTruthy()
    });

});


describe("Banking transactions on CurrentAccount: ", function() {
  let CurrentAccount = new BankAccount("Current");
  it(" account should be a typeof 'object' and an instance of BankAccount", function() {
      expect(typeof CurrentAccount).toEqual(typeof {});
      expect(CurrentAccount instanceof BankAccount).toBeTruthy();
    });

    it(" account balance should be 6000 after 6000 is deposited", function() {
      CurrentAccount.deposit(6000)
      expect(CurrentAccount.availablebalance()).toBe(6000);
    });
    
    it(" account balance should be 1234 after 4766 is withdrawn", function() {
      CurrentAccount.withdraw(1234);
      expect(CurrentAccount.availablebalance()).toBe(4766);
    });

    it(" account balance should be 0 after 718 is withdrawn", function() {
      CurrentAccount.withdraw(718)
      expect(CurrentAccount.availablebalance()).toBe(4048)      
    });


    it(" should return 'invalid input' if negative value deposited", function() {
      expect(CurrentAccount.deposit(-34)).toBe("invalid operation")
      expect(CurrentAccount.availablebalance()).toBe(4048)    
    });

    it(" should allow interest", function() {
      expect(CurrentAccount.enjoysInterest()).toBeFalsy()
    });

    it(" should disallow overdraft", function() {
      expect(CurrentAccount.overdraftAllowed()).toBeTruthy()    
    });

    it(" should limit withdrawal", function() {
      expect(CurrentAccount.withdrawalLimited()).toBeFalsy()
    });

});
 
 