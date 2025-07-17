function createBankAccount(name, initialBalance = 0) {
    return {
        name: name,
        balance: initialBalance,
        deposit: function(amount) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        },
        withdraw: function(amount) {
            if (amount > this.balance) {
                return `Insufficient funds. Cannot withdraw ${amount}. Current balance is ${this.balance}.`;
            } else {
                this.balance -= amount;
                console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
            }
        },
        checkBalance: function() {
            return `Current balance is ${this.balance}.`;
        }
    };
}

// Simple in-memory accounts store using createBankAccount from bank.js
        const accounts = {};

        document.getElementById('createAccountForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('newName').value.trim();
            const resultDiv = document.getElementById('createResult');
            if (!name) {
                resultDiv.textContent = "Please enter a valid name.";
                resultDiv.className = "result error";
                return;
            }
            if (accounts[name]) {
                resultDiv.textContent = "Account already exists.";
                resultDiv.className = "result error";
                return;
            }
            // Use factory function from bank.js
            accounts[name] = createBankAccount(name, 0);
            resultDiv.textContent = `Account for "${name}" created. Initial balance: $0`;
            resultDiv.className = "result";
            document.getElementById('newName').value = '';
        });

        document.getElementById('checkBalanceForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('checkName').value.trim();
            const resultDiv = document.getElementById('balanceResult');
            if (!name) {
                resultDiv.textContent = "Please enter a valid account name.";
                resultDiv.className = "result error";
                return;
            }
            if (name in accounts === false) {
                resultDiv.textContent = "Account not found.";
                resultDiv.className = "result error";
                return;
            }
            // Use method from factory function
            resultDiv.textContent = accounts[name].checkBalance();
            resultDiv.className = "result";
            document.getElementById('checkName').value = '';
        });



