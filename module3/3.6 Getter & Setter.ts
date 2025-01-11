{
    // Getter & Setter

    class BankAccount {
        public id: number; //modifiers are public by default
        public name: string;
        private _balance: number; //private modifier
        // we should use underscore to define private property
        
        // protected _balance: number; //if we need to use in child then we should use protected
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // Setter

        set deposit(amount: number){
            this._balance = this._balance + amount;
        }


        // public addDeposit(amount: number) {
        

        // Getter
        get balance(){
            return this._balance;
        }
        // getBalance(){
        //     return this._balance;
        // }
    }

    const account1 = new BankAccount(11, "account1", 5000);
    // account1.balance = 0; //when we use private modifiers we cant change directly
    
    // account1.addDeposit(300); // we need to call function
    account1.deposit = 500;

    const myBalance = account1.balance; //we can use as property
    console.log(myBalance);













}
