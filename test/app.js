import Web3Sign from './../src/index.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', async () => {
        const web3sign = new Web3Sign()

        try {
            web3sign.getAccount().then((response) => {
                console.log(response)
                // More code here
            })
        
        } catch (e) {
            console.error(e)
        }
    })
})