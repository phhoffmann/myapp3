import styles from './componente1.module.css';

interface IComponente1 {
  title: string;
  title2: string;
  title3?: number;
  children: React.ReactNode;
  onClickButton: (param: string) => void;
  onClickButton2?: () => void;
}

const Componente1 = ({
  title,
  title2,
  title3,
  children,
  onClickButton,
  onClickButton2,
}: IComponente1) => {
  const handleBtnClick = () => {
    onClickButton('teste');
  };

  const handleBtnClick2 = () => {
      onClickButton2?.();
  };

  return (
    <div>
      {children}
      <h1 className={styles.componente1}>{title}</h1>
      <h2>{title2}</h2>
      <h3>{title3}</h3>
      <button onClick={handleBtnClick}> Clique aqui </button>
      <button onClick={handleBtnClick2}> Botão 2 </button>
    </div>
  );
};

export default Componente1;
