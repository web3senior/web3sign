
export default class Web3Sign {
    static #WE = window.ethereum

    constructor() {
        this.initial()
    }

    // Is MetaMask added the global varialble?
    initial() {
        if (typeof Web3Sign.#WE === 'undefined')
            return {
                result: false,
                message: 'MetaMask is not installed!'
            }
        Web3Sign.#WE.on('accountsChanged', (accounts) => {
            console.log('Time to reload UI.')
        })
    }

    // Make sure users are using MetaMask
    MustBeMetaMask() {
        if (!Web3Sign.#WE.isMetaMask)
            return {
                result: false,
                message: 'MetaMask is not installed!'
            }
        else
            return {
                result: true,
                message: Web3Sign.#WE.isMetaMask
            }
    }

    // Or connect
    async getAccount() {
        if (! await Web3Sign.#WE._metamask.isUnlocked())
            return {
                result: false,
                message: 'Unlock MetaMask and try again.'
            }
        return await Web3Sign.#WE.request({ method: 'eth_requestAccounts' })
    }
}




















 //
        // ethereum.networkVersion
        // ethereum.selectedAddress
        // await ethereum.request({ method: 'eth_requestAccounts' });