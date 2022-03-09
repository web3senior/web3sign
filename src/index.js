export default class {
    constructor() {
        this.initial()
    }

    // Is MetaMask added the global varialble?
    initial() {
        if (typeof window.ethereum === 'undefined')
            return {
                result: false,
                message: 'Not found any crypto wallet!'
            }
        window.ethereum.on('accountsChanged', (accounts) => {
            console.log('Time to reload UI.')
        })
    }

    // Make sure users are using MetaMask
    MustBeMetaMask() {
        if (!window.ethereum.isMetaMask)
            return {
                result: false,
                message: 'MetaMask is not installed!'
            }
        else
            return {
                result: true,
                message: window.ethereum.isMetaMask
            }
    }

    // Or connect
    async getAccount() {
        if (! await window.ethereum._metamask.isUnlocked())
            return {
                result: false,
                message: 'Unlock MetaMask and try again.'
            }
        return await window.ethereum.request({ method: 'eth_requestAccounts' })
    }
}