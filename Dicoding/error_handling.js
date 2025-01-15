// throw error
let price = 100;
let paid = 50;

// if(paid<price){
//     throw new Error('uang anda kurang');
// }
// console.log('uang anda cukup');

// try catch
// try{
//     let price = 100;
//     let paid = 50;

//     if(paid<price){
//         throw new Error('uang anda kurang');
//     }
//     console.log('uang anda cukup');
// }catch(error){
//     console.log(error);
//}

//finally
try{
    let price = 100;
    let paid = 50;

    if(paid<price){
        throw new Error('uang anda kurang');
    }
    console.log('uang anda cukup');
}catch(error){
    console.log(error);    
}finally{
    console.log('terima kasih');
}