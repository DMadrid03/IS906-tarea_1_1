//?Ejercicio 4 

class CuentaBancaria{
    public titular: string;
    private saldo: number;

    constructor(titular: string){
        this.saldo = 0;
        this.titular = titular;
    }

    depositar(monto:number): void{
        if(monto > 0){
            this.saldo += monto;
            console.log(`Depósito por ${monto} realizado correctamente, saldo actual: ${this.saldo}`);
        }else{
            console.log("Error, el monto a depositar debe ser mayor que cero");
        }
    }
    retirar(monto:number): void{
        if(monto > 0){
            if( monto <= this.saldo){                
                this.saldo -= monto;
                console.log(`Retiro por ${monto} realizado correctamente, saldo actual: ${this.saldo}`);
            }
            else
                console.log(`Saldo insuficiente para realizar el retiro por ${monto} `);
        }else{
            console.log("Error, el monto a retirar debe ser mayor que cero");
        }
    }
    consultarSaldo():void {
        console.log(`El saldo actual es: ${this.saldo}`);
    }
}

const cuenta1 = new CuentaBancaria("Daniel Madrid")

cuenta1.depositar(-5);
cuenta1.depositar(100)
cuenta1.depositar(10)
cuenta1.retirar(200)
cuenta1.retirar(60)
cuenta1.consultarSaldo()