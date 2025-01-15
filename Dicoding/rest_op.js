function ascending_sorting(...deret){
    console.log(deret);
    deret.sort((a,b) => a-b);
    console.log(deret);
}
ascending_sorting(1, 4, 5, 2, 8, 7, 3, 6);

function descending_sorting(first, second,...deret){
    console.log("ini adalah deret tanpa first dan second ",deret);
    deret = [first, second, ...deret];
    console.log(deret);
    deret.sort((a,b) => b-a);
    console.log(deret);
}
descending_sorting(1, 4, 5, 2, 8, 7, 3, 6);

