import type { NextPage } from 'next';
import Componente1 from '../components/componente1';

const Home: NextPage = () => {
  
  const handleClick = (param: string) => {
    alert(param);
  };

  return (
    <Componente1
      title='Titulo 1'
      title2='Titulo 2'
      title3={3}
      onClickButton={handleClick}
    >
      <h1>Outro Titulo</h1>
    </Componente1>
  );
};

export default Home;
