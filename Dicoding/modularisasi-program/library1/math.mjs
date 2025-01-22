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
export default myMath;