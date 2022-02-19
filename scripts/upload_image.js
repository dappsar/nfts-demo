const path = require('path')
const pinFileToIPFS = require('./pinFileToIPFS')

const filePath = path.join(__dirname, '../assets/pulpito.gif')

pinFileToIPFS(filePath)
