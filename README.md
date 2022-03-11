[![GitHub issues](https://img.shields.io/github/issues/web3senior/web3sign)](https://github.com/web3senior/web3sign/issues)
[![GitHub forks](https://img.shields.io/github/forks/web3senior/web3sign)](https://github.com/web3senior/web3sign/network)
[![GitHub stars](https://img.shields.io/github/stars/web3senior/web3sign)](https://github.com/web3senior/web3sign/stargazers)
[![GitHub license](https://img.shields.io/github/license/web3senior/web3sign)](https://github.com/web3senior/web3sign)
![GitHub commit checks state](https://img.shields.io/github/checks-status/badges/shields/91b108d4b7359b2f8794a4614c11cb1157dc9fff)
![GitHub last commit](https://img.shields.io/github/last-commit/web3senior/web3sign)
[![](https://data.jsdelivr.com/v1/package/npm/@openrelay/web3-sign-element/badge)](https://www.jsdelivr.com/package/npm/@openrelay/web3-sign-element)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fweb3senior)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fweb3senior%2Fweb3sign)
# Web3Sign
The purpose of this tiny class is to enable user interactions and experience on Ethereum-based websites.

## Description
The advent of Web3 and the complexity of published libraries and the lack of transparent documentation in this area have made it difficult for newcomers to the Web3 world, including the web3js and Etherjs libraries.
On the other hand, in some projects, Web3 features are used only for **authentication**, such as login and registration pages.
All in all, this class contains several classes that you can use in your project easily.

## Features
- Checking the global variables on browsers (`window.ethereum`)
- Force users to use MetaMask & Checking MetaMask that is it lock or not
- Send sign request and get users' accounts


## How to use
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

## Output
![Output of web3sign, web3](https://ipfs.io/ipfs/QmNPvCy8rb7mXigMrRYZwoBje7swSWkb2FB41xNRszXbu9?filename=web3sign-cosnole.png "Console")
