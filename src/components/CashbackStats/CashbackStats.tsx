import styles from './CashbackStats.module.scss';

interface Category {
  id: string;
  name: string;
  rate: number;
}

interface Props {
  byCategory: Record<string, number>;
  total: number;
  categories: Category[];
}

export default function CashbackStats({ byCategory, total, categories }: Props) {
  const items = Object.entries(byCategory).map(([catId, sum]) => {
    const cat = categories.find(c => c.id === catId);
    return cat
      ? { id: catId, name: cat.name, rate: cat.rate, sum }
      : null;
  }).filter(Boolean) as { id: string; name: string; rate: number; sum: number }[];

  return (
    <div className={styles.stats}>
      <h4>Статистика за месяц</h4>
      {items.length > 0 ? (
        <ul className={styles.list}>
          {items.map(item => (
            <li key={item.id} className={styles.item}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.rate}>
                {Math.round(item.rate * 100)}%
              </span>
              <span className={styles.sum}>
                {item.sum.toFixed(0)} ₽
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Кешбэк пока не начислен</p>
      )}
      <p className={styles.total}>Всего начислено: {total.toFixed(0)} ₽</p>
    </div>
  );
}
