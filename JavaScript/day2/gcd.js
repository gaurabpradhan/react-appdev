let h=15;
let b=6;
let gcd;
for(let i=1; i<=b; i++){
    if(h%i==0 && b%i==0){
        gcd=i;
    }
}
console.log("gcd =",gcd);