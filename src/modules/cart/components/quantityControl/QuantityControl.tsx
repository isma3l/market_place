import * as styles from './quantityContro.module.scss';

type Props = {
  total: number;
  onInc: () => void;
  onDec: () => void;
};

export const QuantityControl = ({ total, onInc, onDec }: Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.container__control} onClick={onDec}>
        -
      </button>
      <span className={styles.container__amount}>{total}</span>
      <button className={styles.container__control} onClick={onInc}>
        +
      </button>
    </div>
  );
};
