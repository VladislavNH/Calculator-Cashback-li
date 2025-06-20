import { useState } from 'react';
import styles from './MccSearch.module.scss';

interface Props { onFound: (mcc: number) => void; }

export default function MccSearch({ onFound }: Props) {
  const [code, setCode] = useState('');
  const handleSearch = () => {
    const mcc = parseInt(code, 10);
    if (!isNaN(mcc)) onFound(mcc);
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="number"
        placeholder="Найти категорию по MCC"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button className={styles.button} onClick={handleSearch}>Найти</button>
    </div>
  );
}