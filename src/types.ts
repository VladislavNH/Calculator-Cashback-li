export interface Category {
    id: string;
    name: string;
    rate: number;
    categoryLimit: number;
    mcc: number[];
  }
  
  export interface CashbackState {
    byCategory: Record<string, number>;
    total: number;
  }