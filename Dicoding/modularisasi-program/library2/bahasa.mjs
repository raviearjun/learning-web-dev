const bahasa = {
    toUpperCase : (str) => str.toUpperCase(),
    toLowerCase : (str) => str.toLowerCase(),
    capitalize : (str) => str[0].toUpperCase() + str.slice(1),
    reverse : (str) => str.split('').reverse().join(''),
    contains : (str, search) => str.includes(search),
    greeting : (name) => `Hello, ${name}`

}
export default bahasa;