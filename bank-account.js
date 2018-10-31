var account = {
	balance: 0
};

// create a function called deposit(account, amount)
function deposit (account, amount) {
	account.balance += amount; 
}

// create a function called withdraw(account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
}

// create a function called getBalance(account)
function getBalance (account) {
	return account.balance;
}



// deposit(account, 1200);

// console.log(getBalance(account));

// withdraw(account, 200);

// console.log(getBalance(account));
