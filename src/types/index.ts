export interface Wallet {
  wallet_key: string;
  wallet_name: string;
  lightning_address: string;
  balance: number;
}

export interface WalletInfo {
  wallet_name: string;
  lightning_address: string;
  available_balance: number;
}