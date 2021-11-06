require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign story recipe sadness combine install pave army genuine'; 
let testAccounts = [
"0x6267fcec61e45507f1e3fb45f31a6b07a9a04a3d943134158a482bbab530c61d",
"0x5db3958e5005b27225282d117aa09665e15947862e9ba99d795b6d26fce6a14a",
"0x84a74c4a479464a6018b719ce17419b529420a414aee8f404508290ef77a8ec8",
"0xfec69e0b9eff052c46bbcf19e78e05c8f499b8c5fa2e37c91f84d3dee647c126",
"0xffb58e66dec0ad58002f486ff0c14cc5b762c6509cbd3988ef361d2942f3ce58",
"0x1fb81eb5e1a16558f5fdc10a18514ecaf5462e52a75bff09f7b92e3af08deccb",
"0x600417e81148bcec0666fa902e010a600b2dbf7b494f793e29a1e7986092ea17",
"0x48989155a5ee23d47b2a2d988bca85fb963e0496e56c405f978fe578934397d6",
"0x749feb9a57b7f5324af3bf0744f7abe56855395b28b5dbabff776c457e5af258",
"0xa7ca4e87cbc7cc98ee7baa9e81e2efcfd489e0da3efed731ccb2cf4042f1acdb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

