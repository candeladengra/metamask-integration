import web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

export const connector = new InjectedConnector({
    supportedChainIds: [1] //ethereum network id
})

export const getLibrary = (provider) => {
    const library = new web3(provider)
    return library
}