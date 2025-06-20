import type { Category, CashbackState } from '../types';

export const ACCOUNT_LEVELS = {
  STANDARD: 'standard',
  EXTENDED: 'extended',
} as const;
export type AccountLevel = typeof ACCOUNT_LEVELS[keyof typeof ACCOUNT_LEVELS];

export const STANDARD_CATEGORY: Category = {
  id: 'ALL_1',
  name: '1% на всё после достижения лимита по категории',
  rate: 0.01,
  categoryLimit: 1500,
  mcc: [],
};

export const ALL_CATEGORIES: Category[] = [   STANDARD_CATEGORY,
  // { id: 'EDUCATION', name: 'Образование', rate: 0.05, categoryLimit: 1500, mcc: [8211,8220,8241,8244,8249,8299,8351,8493,8494] },
  // { id: 'AIR_TICKETS', name: 'Авиабилеты', rate: 0.05, categoryLimit: 1500, mcc: [3000,3303,3308,4304,4511,4415,4418,4582,4583] },
  // { id: 'VIP_LOUNGE', name: 'VIP-залы', rate: 0.05, categoryLimit: 1500, mcc: [4583] },
  // { id: 'CAR_RENTAL', name: 'Аренда автомобилей', rate: 0.05, categoryLimit: 1500, mcc: [3351,3441] },
  // { id: 'RAIL_TICKETS', name: 'Железнодорожные билеты', rate: 0.05, categoryLimit: 1500, mcc: [4011,4112] },
  // { id: 'CRUISES', name: 'Круизы', rate: 0.05, categoryLimit: 1500, mcc: [4411] },
  // { id: 'HOLIDAYS', name: 'Круизы и турпакеты', rate: 0.05, categoryLimit: 1500, mcc: [4723,7032,7033] },
  { id: 'DUTY_FREE', name: 'Duty Free', rate: 0.25, categoryLimit: 1500, mcc: [5309] },
  // { id: 'HOTELS', name: 'Отели', rate: 0.05, categoryLimit: 1500, mcc: [3501,3827,3832,3838,4722,7011] },
  // { id: 'TRANSPORT', name: 'Транспорт', rate: 0.05, categoryLimit: 1500, mcc: [4111,4131,4457,4468,4789,5013,5561,5592,5598,5599,7523] },
  // { id: 'TAXI', name: 'Такси', rate: 0.05, categoryLimit: 1500, mcc: [4121] },
  // { id: 'CAR_SHARING', name: 'Каршеринг', rate: 0.05, categoryLimit: 1500, mcc: [7512] },
  // { id: 'AUTO_SERVICES', name: 'Автомобильные услуги', rate: 0.05, categoryLimit: 1500, mcc: [5531,5571,7549,5532,5533,7531,7534,7535,7558,7542] },
  { id: 'FUEL', name: 'АЗС и топливо', rate: 0.05, categoryLimit: 1500, mcc: [5172,5541,5542,5983] },
  { id: 'PHARMACY', name: 'Аптеки', rate: 0.05, categoryLimit: 1500, mcc: [5122,5912] },
  // { id: 'SPA', name: 'Салоны красоты и SPA', rate: 0.05, categoryLimit: 1500, mcc: [7230,7297,7298] },
  // { id: 'BEAUTY', name: 'Косметика и парфюмерия', rate: 0.05, categoryLimit: 1500, mcc: [5977] },
  { id: 'HOME_REPAIR', name: 'Дом, ремонт', rate: 0.05, categoryLimit: 1500, mcc: [780,1520,1711,1731,1740,1750,1761,1771,5021,5039,5046,5065,5072,5074,5085,5198,5200,5211,5231,5251,5261,5415,5712,5714,5718,5719,7622,7623,7629,7641,7692,7699] },
  // { id: 'PET_PRODUCTS', name: 'Зоотовары', rate: 0.05, categoryLimit: 1500, mcc: [5995] },
  // { id: 'ART', name: 'Искусство', rate: 0.05, categoryLimit: 1500, mcc: [5932,5937,5970,5973] },
  // { id: 'BOOKS', name: 'Книги', rate: 0.05, categoryLimit: 1500, mcc: [2741,5111,5192,5942,5994] },
  // { id: 'CINEMA', name: 'Кино', rate: 0.05, categoryLimit: 1500, mcc: [7829,7832,7841] },
  // { id: 'ENTERTAINMENT', name: 'Развлечения', rate: 0.05, categoryLimit: 1500, mcc: [7911,7922,7929,7932,7933,7992,7996,7998,7999,8664] },
  // { id: 'GAMING', name: 'Всё для геймеров', rate: 0.05, categoryLimit: 1500, mcc: [5816,5968,7993,7994] },
  // { id: 'EXHIBITIONS', name: 'Выставки и музеи', rate: 0.05, categoryLimit: 1500, mcc: [7991] },
  { id: 'FITNESS', name: 'Фитнес', rate: 0.03, categoryLimit: 1500, mcc: [7941,7997] },
  // { id: 'MED_SERVICES', name: 'Медицинские услуги', rate: 0.05, categoryLimit: 1500, mcc: [5296,5975,8041,8044,8676] },
  // { id: 'MED_CLINICS', name: 'Медицинские клиники', rate: 0.05, categoryLimit: 1500, mcc: [5976,8011,8031,8042,8043,8049,8050,8062,8099] },
  // { id: 'DENTISTRY', name: 'Стоматология', rate: 0.05, categoryLimit: 1500, mcc: [8021,8071] },
  // { id: 'MUSIC', name: 'Музыка', rate: 0.05, categoryLimit: 1500, mcc: [5733,5735] },
  // { id: 'SUPERMARKET', name: 'Супермаркеты', rate: 0.05, categoryLimit: 1500, mcc: [5297,5298,5300,5411,5412,5422,5441,5451,5462,5499,5715] },
  // { id: 'RETAIL', name: 'Магазины', rate: 0.05, categoryLimit: 1500, mcc: [5099,5131,5310,5311,5331,5734,5942,5943,5945,5948,5978] },
  // { id: 'ELECTRONICS', name: 'Электроника и техника', rate: 0.05, categoryLimit: 1500, mcc: [5722,5732,5946] },
  { id: 'RESTAURANTS', name: 'Рестораны ', rate: 0.05, categoryLimit: 1500, mcc: [5811,5812,5813] },
  { id: 'FASTFOOD', name: 'Фастфуд', rate: 0.05, categoryLimit: 1500, mcc: [5814] },
  // { id: 'COMMS', name: 'Связь и Интернет', rate: 0.05, categoryLimit: 1500, mcc: [4813,4814,4821,4899,7372,7375] },
  // { id: 'DRY_CLEAN', name: 'Химчистка', rate: 0.05, categoryLimit: 1500, mcc: [7216] },
  // { id: 'PHOTO_VIDEO', name: 'Фото/Видео', rate: 0.05, categoryLimit: 1500, mcc: [5045,5544,7332,7333,7338,7339,7395] },
  // { id: 'SOUVENIRS', name: 'Сувениры', rate: 0.05, categoryLimit: 1500, mcc: [5947] },
  { id: 'FLOWERS', name: 'Цветы', rate: 0.05, categoryLimit: 1500, mcc: [5193,5992] },
  // { id: 'SPORTS_GOODS', name: 'Спорттовары', rate: 0.05, categoryLimit: 1500, mcc: [5940] },
  { id: 'CLOTHING', name: 'Одежда, обувь', rate: 0.03, categoryLimit: 1500, mcc: [5137,5139,5611,5621,5631,5641,5651,5661,5681,5691,5697,5679,5931,5944,5949,5950,7631] },
  // { id: 'VET_CLINIC', name: 'Ветеринарные клиники', rate: 0.05, categoryLimit: 1500, mcc: [742] },
  // { id: 'UTILITIES', name: 'ЖКХ', rate: 0.05, categoryLimit: 1500, mcc: [4900] }
  { id: 'ALLONE', name: '1% На все покупки ', rate: 0.01, categoryLimit: 1500, mcc: [5811,5812,5813] }
];

export function getAvailableCategories(level: AccountLevel): Category[] {
  const others = ALL_CATEGORIES;

  if (level === ACCOUNT_LEVELS.STANDARD) {
    return [
      STANDARD_CATEGORY,
      ...others.filter(c => c.id !== 'RESTAURANTS' && c.id !== 'FASTFOOD'),
    ];
  }
  return [STANDARD_CATEGORY, ...others];
}



export function findCategoryByMcc(
  mcc: number | string,
  available: Category[]
): Category | null {
  const code = Number(mcc);
  if (STANDARD_CATEGORY.mcc.includes(code)) return STANDARD_CATEGORY;
  return available.find((cat) => cat.mcc.includes(code)) || null;
}





export function calculateCashback(
  amount: number,
  category: Category,
  state: CashbackState
): { cashback: number; newState: CashbackState } {
  const stdRate  = STANDARD_CATEGORY.rate;           
  const stdLimit = STANDARD_CATEGORY.categoryLimit;  
  const elevRate = category.rate;
  const elevLimit= category.categoryLimit;

  if (category.id === STANDARD_CATEGORY.id) {
    const rawStd = amount * stdRate;
    if (rawStd < 1) {
      return { cashback: 0, newState: state };
    }
    const usedStd   = state.byCategory[category.id] || 0;
    const allowed   = Math.max(0, stdLimit - usedStd);
    const cashStd   = Math.min(rawStd, allowed);

    const newByCat = { ...state.byCategory, [category.id]: usedStd + cashStd };
    const newTotal = state.total + cashStd;
    return { cashback: cashStd, newState: { byCategory: newByCat, total: newTotal } };
  }

  let rawElev = amount * elevRate;
  if (rawElev < 1) rawElev = 1;
  const usedElev   = state.byCategory[category.id] || 0;
  const allowedElev= Math.max(0, elevLimit - usedElev);
  const cashElev   = Math.min(rawElev, allowedElev);
  const covered   = cashElev / elevRate;
  const remainder = amount - covered;
  let cashStd = 0;
  if (remainder >= 100) {
    const rawStd  = remainder * stdRate;
    const usedStd = state.byCategory[STANDARD_CATEGORY.id] || 0;
    const allowed = Math.max(0, stdLimit - usedStd);
    cashStd       = Math.min(rawStd, allowed);
  }
  const newByCat = {
    ...state.byCategory,
    [category.id]: usedElev + cashElev,
    [STANDARD_CATEGORY.id]: (state.byCategory[STANDARD_CATEGORY.id] || 0) + cashStd,
  };
  const newTotal = state.total + cashElev + cashStd;
  return { cashback: cashElev + cashStd, newState: { byCategory: newByCat, total: newTotal } };
}

