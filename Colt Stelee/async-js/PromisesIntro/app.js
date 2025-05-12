// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })


// fakeRequestCallback('books.com', 
//     function(response){
//         console.log('IT WORKED (callback)!!!')
//         console.log(response)
//     },
//     function(err){
//         console.log('OH NO, ERROR (callback)!!!')
//         console.log(err)
//     }
// )


// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })

// fakeRequestCallback("google.com", function (data){
//     console.log("IT WORKED (callback)!!!")
//     console.log(data)
// }, function (err){
//     console.log("OH NO, ERROR (callback)!!!")
//     console.log(err)
// })

// const request = fakeRequestPromise("google.com")
// request
//     // kalau promise berhasil, maka kita bisa menangkapnya dengan .then
//     .then((data) => {
//         console.log("IT WORKED (promise)!!!")
//         console.log(data)
//     })
//     // kalau promise ditolak, maka kita bisa menangkapnya dengan .catch
//     .catch((err) => {
//         console.log("OH NO, ERROR (promise)!!!")
//         console.log(err)
//     })

// fakeRequestPromise("google.com/page1")
//     .then((data) => {
//         console.log("IT WORKED (promise)!!!")
//         console.log(data)
//         fakeRequestPromise("google.com/page2")
//             .then((data) => {
//                 console.log("IT WORKED (promise)!!!")
//                 console.log(data)
//                 fakeRequestPromise("google.com/page3")
//                     .then((data) => {
//                         console.log("IT WORKED (promise)!!!")
//                         console.log(data)
//                     })
//                     .catch((err) => {
//                         console.log("OH NO, ERROR (promise)!!!")
//                         console.log(err)
//                     })
//             })
//             .catch((err) => {
//                 console.log("OH NO, ERROR (promise)!!!")
//                 console.log(err)
//             })
//         }
//     )

// Better way to handle multiple promises without nesting
fakeRequestPromise("google.com/page1")
    .then((data) => {
        console.log("It worked (promise)!!!")
        console.log(data)
        return fakeRequestPromise("google.com/page2")
    })
    .then((data) => {
        console.log("It worked (promise)!!!")
        console.log(data)
        return fakeRequestPromise("google.com/page3")
    })
    .then((data) => {
        console.log("It worked (promise)!!!")
        console.log(data)
    })
    .catch((err) => {
        console.log("Oh no, error (promise)!!!")
        console.log(err)
    })
 