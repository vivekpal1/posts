# Solana Payment System Setup Guide

This guide will help you set up the real Solana payment system using Privy wallet integration.

## 🔧 Environment Configuration

Create a `.env` file in your project root with the following variables:

```env
# Privy Configuration (Required)
PUBLIC_PRIVY_APP_ID=your_privy_app_id_here

# Solana Configuration (Required)
PUBLIC_SOLANA_NETWORK=devnet
PUBLIC_RECIPIENT_WALLET=your_solana_wallet_address_here

# Optional: Custom RPC endpoints
PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
PUBLIC_SOLANA_RPC_URL_MAINNET=https://api.mainnet-beta.solana.com
```

## 📋 Step-by-Step Setup

### 1. Get Your Privy App ID

1. Go to [Privy Dashboard](https://dashboard.privy.io/)
2. Create an account or log in
3. Create a new app or select an existing one
4. Copy the **App ID** from your dashboard
5. Add it to your `.env` file as `PUBLIC_PRIVY_APP_ID`

Example: `PUBLIC_PRIVY_APP_ID=clp7x8nux05ol108wzdrgczop`

### 2. Configure Your Solana Wallet

1. Set up a Solana wallet (Phantom, Solflare, Backpack, etc.)
2. Copy your wallet address
3. Add it to your `.env` file as `PUBLIC_RECIPIENT_WALLET`

Example: `PUBLIC_RECIPIENT_WALLET=vivgdu332GMEk3FaupQa92gQjYd9LX6TMgjMVsLaCu4`

### 3. Choose Network

For **testing** (recommended to start):
```env
PUBLIC_SOLANA_NETWORK=devnet
```

For **production**:
```env
PUBLIC_SOLANA_NETWORK=mainnet-beta
```

### 4. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 5. Start Development Server

```bash
npm run dev
```

## 🧪 Testing the Payment System

### On Devnet (Recommended for Testing)

1. Set `PUBLIC_SOLANA_NETWORK=devnet` in your `.env`
2. Get free devnet SOL from [Solana Faucet](https://faucet.solana.com/)
3. Connect your wallet on the wiki page
4. Test the payment flow with devnet SOL

### On Mainnet (Production)

1. Set `PUBLIC_SOLANA_NETWORK=mainnet-beta` in your `.env`
2. Ensure your wallet has sufficient SOL for payments
3. Test thoroughly on devnet first!

## 🎯 How It Works

### Payment Flow

1. **User visits premium content** → Payment gate is shown
2. **User clicks "Connect Wallet"** → Privy modal opens
3. **User connects Solana wallet** → Phantom, Solflare, etc.
4. **User confirms payment** → Real Solana transaction is created
5. **Transaction is signed and sent** → Blockchain confirmation
6. **Payment proof is stored** → LocalStorage with transaction signature
7. **Content is unlocked** → User gets lifetime access

### Technical Architecture

- **Frontend**: React components with Privy SDK
- **Wallet Integration**: Privy handles wallet connections
- **Blockchain**: Direct Solana web3.js integration
- **Payment Verification**: Transaction signatures as proof
- **Access Control**: Client-side with blockchain verification

## 💰 Payment Configuration

### Default Settings

- **Amount**: 0.5 SOL
- **Recipient**: Set via `PUBLIC_RECIPIENT_WALLET`
- **Network**: Set via `PUBLIC_SOLANA_NETWORK`

### Customizing Payment Amount

Edit the default amount in `src/components/payment/PaymentGate.tsx`:

```tsx
requiredPayment = {
  amount: 0.5, // Change this value
  currency: 'SOL',
  recipientAddress: 'your_wallet_address'
}
```

## 🔒 Security Features

### Blockchain Security
- All payments are real Solana blockchain transactions
- Transaction signatures provide cryptographic proof
- Cannot be faked or manipulated

### Wallet Security
- Privy handles secure wallet connections
- Users maintain control of their private keys
- No custodial wallet requirements

### Access Control
- Payment proofs stored with transaction signatures
- Lifetime access once payment is confirmed
- Decentralized verification system

## 🛠️ Troubleshooting

### Common Issues

#### "Payment System Not Configured"
- Check that `PUBLIC_PRIVY_APP_ID` is set correctly
- Ensure the App ID is valid and not the placeholder value

#### "No Solana wallet connected"
- User needs a Solana wallet browser extension
- Supported wallets: Phantom, Solflare, Backpack, etc.

#### "Insufficient balance"
- User needs SOL in their wallet
- For devnet: Use [Solana Faucet](https://faucet.solana.com/)
- For mainnet: Purchase SOL from an exchange

#### "Transaction failed"
- Check network congestion
- Verify wallet has enough SOL for transaction + fees
- Try again after a few moments

### Debug Mode

Add console logging by setting:
```javascript
console.log('Payment debug mode enabled');
```

## 🌐 Network Information

### Devnet
- **Purpose**: Testing and development
- **Free SOL**: Available from faucet
- **RPC**: `https://api.devnet.solana.com`
- **Explorer**: `https://explorer.solana.com/?cluster=devnet`

### Mainnet
- **Purpose**: Production use
- **Real SOL**: Must purchase from exchanges
- **RPC**: `https://api.mainnet-beta.solana.com`
- **Explorer**: `https://explorer.solana.com/`

## 📱 Supported Wallets

The system supports all major Solana wallets:

- **Phantom** (Most popular)
- **Solflare** 
- **Backpack**
- **Glow**
- **Slope** (Deprecated but may still work)
- **Any wallet that supports Solana web3.js**

## 🚀 Going Live

### Pre-Launch Checklist

- [ ] Tested thoroughly on devnet
- [ ] Verified Privy App ID is correct
- [ ] Confirmed recipient wallet address
- [ ] Set network to `mainnet-beta`
- [ ] Tested with small amounts first
- [ ] Documented payment amount for users

### Environment Variables for Production

```env
PUBLIC_PRIVY_APP_ID=your_production_privy_app_id
PUBLIC_SOLANA_NETWORK=mainnet-beta
PUBLIC_RECIPIENT_WALLET=your_production_wallet_address
```

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Verify all environment variables are set
3. Test on devnet first
4. Check Solana network status
5. Refer to [Privy Documentation](https://docs.privy.io/)
6. Check [Solana Documentation](https://docs.solana.com/)

## 🔗 Useful Links

- [Privy Dashboard](https://dashboard.privy.io/)
- [Solana Faucet (Devnet)](https://faucet.solana.com/)
- [Solana Explorer](https://explorer.solana.com/)
- [Phantom Wallet](https://phantom.app/)
- [Solflare Wallet](https://solflare.com/)

---

✅ **Your Solana payment system is now ready!** Users can make real blockchain payments to access premium content. 