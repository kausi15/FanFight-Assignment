const inquirer = require('inquirer');

/* The code below is a wallet system simulation for FanFight platform.
    Simulation levels are are :-
    -> create wallet
    -> give discount
    -> Register for game
*/

class Wallet {
    constructor(deposit_, bonus_, winning_) {
        this.deposit = Number(deposit_);
        this.bonus = Number(bonus_);
        this.winning = Number(winning_);
    }
    showBalance () {
            console.log("wallet balance is ", this.deposit + this.bonus + this.winning);
    }
    showBreakage () {
            console.log(" Deposit balance is", this.deposit);
            console.log(" Bonus balance is", this.bonus);
            console.log(" Winning balance is", this.winning);
    }
    feeDiscount (discount_, fees_) {
        let new_fee = Number(fees_) - ((Number(discount_)/100) * Number(fees_));
        console.log("Fees after discount is %s", new_fee);
        if (new_fee > (this.deposit + this.bonus + this.winning)) {
            return console.log("Enough balance not in the wallet.");
        }
        if (this.bonus >= new_fee) {
            this.bonus = this.bonus - new_fee;
            return console.log("Entry registered.");
        }
        else {
            new_fee = new_fee - this.bonus;
            this.bonus = 0;
        }
        if (this.deposit >= new_fee) {
            this.deposit = this.deposit - new_fee;
            return console.log("Entry registered.");
        }
        else {
            new_fee = new_fee - this.deposit;
            this.deposit = 0;
        }
        if (this.winning >= new_fee) {
            this.winning = this.winning - new_fee;
            return console.log("Entry registered.");
        }
    }
}

inquirer.prompt([
    {
        name: 'deposit_balance',
        message: 'Enter deposit balance value: ',
    },
    {
        name: 'winning_balance',
        message: 'Enter winning balance value: ',
    },
    {
        name: 'bonus_balance',
        message: 'Enter bonus balance value: ',
    },
    {
        name: 'fees_amount',
        message: 'Enter fee amount value: ',
    },
    {
        name: 'discount_percentage_value',
        message: 'Enter discount percentage value: ',
    }
]).then(answers => {
    console.log("******** Let's start ***********");
    console.log("Please enter the required values to start the simulation.");
    console.log("###### Creating wallet #######");
    let w1 = new Wallet(answers.deposit_balance,answers.bonus_balance,answers.winning_balance);
    w1.showBalance();
    console.log("Wallet balance breakage  ->");
    w1.showBreakage();
    console.log("##### wallet created ######## ");
    console.log(" ");
    console.log("#### Registering in game #####");
    w1.feeDiscount(answers.discount_percentage_value, answers.fees_amount);
    console.log("##### Wallet details ######");
    w1.showBalance();
    console.log("Wallet balance breakage  ->");
    w1.showBreakage();
    console.log(" ");
    console.log(" Thanks. Simulation ended.");
});