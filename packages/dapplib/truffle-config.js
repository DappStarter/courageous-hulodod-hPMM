require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant half problem bridge silent'; 
let testAccounts = [
"0x2cc6ff97de6ed8315e5f7ae01318f51ca33d77e19a1b7de66eb7f98e6aaef8c1",
"0xc72edcef658ec527d59f83480cd96f03150380d4c3e55a154dd34b6db99f4238",
"0xe7199a0e797075e4640bb793db220c3dab6f1257932b0a468462bb670e4ae830",
"0x02e2d634edcfc0dc58cf3d8c81be96fb7a1abb34ba626ba46b057c45f09003de",
"0xa146cf86a105f6a870fe6018b142c54d272ed2b62d1e4c20dbb23ff74c43ad35",
"0x52d861a02e8126a1c74ddf9641d25c5ce6336166ee8e7a69a4c05a4e05ef84af",
"0xeb7c96cb7e8d9bc01c74905bff33096f1d362f36bf4d9669393a19fbbd5a2e94",
"0x027d76475e7376dd8bcf5e11b7b686bd37cbe12a5411c66e912a4c26be7b5efe",
"0xfd4d4d8f1ad28fbd6b679f9ed6ac51969207c28402d0e2645238486604de2fa7",
"0x05479dd91451d54e1de67bdbb9ee5b68b760ddd6969546440aecb96e8051b026"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


