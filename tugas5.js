let jari=30/2;
let tinggik=40;
let jarii=20/2;
let tinggit=50;
let jariii=15/2;
class lingkaran{
    constructor(r){
        this.jari=r;
    }
    luas(){
        return Math.PI * this.jari* this.jari;
    }
    keliling(){
        return Math.PI * this.jari * 2;
    }
}
class kerucut extends lingkaran{
    constructor(r,t){
        this.jarii=r;
        this.tinggik=t;
    }
    luasP(){
        return Math.PI* this.jarii * (this.jarii*20);
    }
    luasS(){
        return this.jarii * this.jarii;
    }
    volume(){
        return Math.PI * this.jarii * this.jarii * this.tinggik;
    }
}
class tabung extends lingkaran{
    constructor(r,t){
        this.tinggit=t;
        this.jariii=r;
    }
    volume(){
        return Math.PI * this.jariii * this.jariii * this.tinggit;
    }
}

let data = new lingkaran();
console.log("Luas Bola="+data.luas());
console.log("Keliling Bola="+data.keliling());
data = new kerucut();
data.luasP();
data.luasS();
data.volume();
data = new tabung();
data.volume();
