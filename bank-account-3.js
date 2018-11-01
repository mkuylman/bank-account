var accounts = [];


function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;
	
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username ) {
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}	

function deposit (account, amount) {
	if (typeof amount === 'number') {
		account.balance += amount; 
	} else {
		console.log('deposit failed. amount is not a number');
	}
}

function withdraw (account, amount) {
	if (typeof amount === 'number') {
		account.balance -= amount;
	} else {
		console.log('deposit failed. amount is not a number');
	}
}

function getBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}


var marikaAccount = createAccount({
	username: 'Marika',
	balance: 0
})

deposit(marikaAccount, 130);
withdraw(marikaAccount, 'string');

var marika2 = getAccount('Marika');
var getMarikaBalance = getBalanceGetter(marika2);

console.log(getMarikaBalance());












