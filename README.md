# Web3Sign
The purpose of this tiny class is to enabling user interactions and experience on Ethereum-based web sites.

# Description
The advent of Web3 and the complexity of published libraries and the lack of transparent documentation in this area have made it difficult for newcomers to the Web3 world, including the web3js and Etherjs libraries.
On the other hand, in some projects, Web3 features are used only for **authentication**, such as login and registration pages.
All in all, this class contains several classes that you can use in your project easily.

# Features
- Checking the global varaibles on browsers (`window.ethereum`)
- Force users to use MetaMask & Checking MetaMask that is it lock or not
- Send sign request and get users accounts


# How to use
        import Web3Sign from './utility/web3sign';
        const web3sign = new Web3Sign()
        
        try {
            web3sign.getAccount().then((response) => {
                console.log(response)
                // More code here
            })
        
        } catch (e) {
            console.error(e)
        }