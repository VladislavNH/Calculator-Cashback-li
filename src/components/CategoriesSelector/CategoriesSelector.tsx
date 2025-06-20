import styles from './CategoriesSelector.module.scss';

interface Category {
  id: string;
  name: string;
  rate: number;
}

interface Props {
  categories: Category[];
  chosen: string[];
  onToggle: (id: string) => void;
}

export default function CategoriesSelector({ categories, chosen, onToggle }: Props) {
  return (
    <div>
      <h4>Выбор категорий (до 4×)</h4>
      <div className={styles.grid}>
        {categories
          .filter(c => c.id !== 'ALL_1')
          .map(c => {
            const isChecked = chosen.includes(c.id);
            const inputId = `cat-${c.id}`;
            return (
              <div
                key={c.id}
                className={`${styles.card} ${isChecked ? styles.checked : ''}`}
                onClick={() => onToggle(c.id)}
              >
                <input
                  id={inputId}
                  type="checkbox"
                  checked={isChecked}
                  readOnly
                  className={styles.checkbox}
                />
                <span className={styles.name}>{c.name}</span>
                <span className={styles.rateBadge}>
                  {Math.round(c.rate * 100)}%
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
