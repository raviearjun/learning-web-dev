const myMath = {
    PI : 3.14159,
    square : function(num){
        return num * num;
    },
    multiply : function(a, b){
        return a * b;
    },
    divide : function(a, b){
        return a/b;
    },
    floor : function(a){
        return parseInt(a);
    },
    ceil : function(a){
        return parseInt(a+1);
    },
    round : function(a){
        if(a - parseInt(a) >= 0.5){
            return parseInt(a+1);
        }else{
            return parseInt(a);
        }
    }


}
console.log(myMath.floor(3.9)); // 3
console.log(myMath.round(3.5)); // 4`
// karena myMath adalah objek, maka method bisa diperlakukan layaknya key-value pair
console.log(myMath.PI); // 3.14159
console.log(myMath['ceil'](3.1)); // 4