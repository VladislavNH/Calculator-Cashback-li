import styles from './PurchaseForm.module.scss';

interface Props {
  amount: string;
  cat: string;
  options: { id: string; name: string }[];
  onAmountChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
  onCalculate: () => void;
}

export default function PurchaseForm({
  amount,
  cat,
  options,
  onAmountChange,
  onCategoryChange,
  onCalculate,
}: Props) {
  if (options.length === 0) return null;

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()}>
      <input
        className={styles.input}
        type="number"
        placeholder="Сумма ₽"
        value={amount}
        onChange={e => onAmountChange(e.target.value)}
      />

      <select
        className={styles.select}
        value={cat}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="" disabled>
          Выберите категорию
        </option>
        {options.map(c => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <button
        className={styles.button}
        type="button"
        onClick={onCalculate}
        disabled={!amount || !cat}
      >
        Рассчитать кешбэк
      </button>
    </form>
  );
}
