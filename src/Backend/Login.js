const bcrypt = require('bcryptjs')
const myFunction = async () => {
    const password = '12345'
    const hashPedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashPedPassword)
    const isMatch = await bcrypt.compare('12345',hashPedPassword)
    console.log(isMatch)
}