import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {
  setLevel,
  setChosen,
  setAmount,
  setCat,
  calculate,
  hideModal,
} from './features/appSlice';
import {
  ACCOUNT_LEVELS,
  STANDARD_CATEGORY,
  getAvailableCategories,
  calculateCashback,
  findCategoryByMcc,
} from './utils/cashback';
import styles from './App.module.scss';
import CategoriesSelector from './components/CategoriesSelector/CategoriesSelector';
import MccSearch from './components/MccSearch/MccSearch';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';
import CashbackStats from './components/CashbackStats/CashbackStats';
import Modal from './components/Modal/Modal';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { level, chosen, state, amount, cat, cashRes, showModal } =
    useSelector((s: RootState) => s.app);

  const categories = useMemo(() => getAvailableCategories(level), [level]);

  const handleLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = e.target.value as typeof ACCOUNT_LEVELS[keyof typeof ACCOUNT_LEVELS];
    dispatch(setLevel(newLevel));


   dispatch(setChosen([]));

      dispatch(setCat(STANDARD_CATEGORY.id));
  };

  const handleMccFound = (mcc: number) => {
    if (level === ACCOUNT_LEVELS.STANDARD) {
      alert('Перейдите на повышенный уровень для MCC-поиска');
      return;
    }
    const found = findCategoryByMcc(mcc, categories);
    if (!found) {
      alert(`MCC ${mcc} не найден`);
      return;
    }
    dispatch(setChosen([...chosen.filter(id => id !== found.id), found.id]));
    dispatch(setCat(found.id));
  };

  const handleCalculate = () => {
    const category = categories.find(c => c.id === cat);
    if (!category) {
      alert('Выберите категорию');
      return;
    }
    const { cashback, newState } = calculateCashback(
      Number(amount),
      category,
      state
    );
    dispatch(calculate({ cashback, newState }));
  };


  return (
    <div className={styles.appWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Калькулятор кешбэка</h1>

        <div className={styles.row}>
          <label>Уровень кешбэка клиента</label>
          <select value={level} onChange={handleLevel}>
            <option value={ACCOUNT_LEVELS.STANDARD}>Стандартный</option>
            <option value={ACCOUNT_LEVELS.EXTENDED}>Повышенный</option>
          </select>
        </div>



        <CategoriesSelector
          categories={categories}
          chosen={chosen}
          onToggle={id =>
            dispatch(
              setChosen(
                chosen.includes(id)
                  ? chosen.filter(x => x !== id)
                  : chosen.length < 4
                  ? [...chosen, id]
                  : chosen
              )
            )
          }
        />

        <MccSearch onFound={handleMccFound} />
        <PurchaseForm
  amount={amount}
  cat={cat}
  options={categories.filter(c => chosen.includes(c.id))}
  onAmountChange={v => dispatch(setAmount(v))}
  onCategoryChange={v => dispatch(setCat(v))}
  onCalculate={handleCalculate}
/>
        <CashbackStats
          byCategory={state.byCategory}
          total={state.total}
          categories={categories}
        />
      </div>
      {showModal && (
        <Modal onClose={() => dispatch(hideModal())}>
          <h3>Кешбэк</h3>
          <p style={{ fontSize: '2rem', color: 'var(--ozon-accent)' }}>
            +{cashRes} ₽
          </p>
        </Modal>
      )}
    </div>
  );
}
