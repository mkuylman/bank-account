var accounts = [];

// Account Object
// balance
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount (account) {
	accounts.push(account);
	return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount (username) {
	var matchedAccount;
	
	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		} 
	});

	return matchedAccount;
}	

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

var marikasAccount = createAccount({
	username: 'mkuylman',
	balance: 0
});

deposit(marikasAccount, 100);
console.log(getBalance(marikasAccount));

withdraw(marikasAccount, 20);
console.log(getBalance(marikasAccount));

var existingAccount = getAccount('mkuylman');

console.log(getBalance(marikasAccount));

var courtneysAccount = createAccount({
	username: 'courtney1',
	balance: 3000
});

console.log(accounts); 

var existingCourtAccount = getAccount('courtney1');

console.log(existingCourtAccount);
