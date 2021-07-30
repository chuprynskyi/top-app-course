import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  // const [counter, setCounter] = useState<number>(0);

  // useEffect(() => {
  //   console.log('Counter ' + counter);
  //   return function cleanup() {
  //     console.log('Unmount');
  //   };
  // });

  // Так задавати умову хукам не можна, він не знаходиться на верхньому рівні
  // if (counter > 0) {
  //   useEffect(() => {
  //     console.log('Mounted');
  //   }, []);
  // }
  
  // Це правильно задана умова, хук знаходиться на верхньому рівні
  // useEffect(() => {
  //   if (counter > 0) {
  //     console.log('Mounted');
  //   }
  // });
  
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок </Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='S'>Lorem ipsum dolor</P>
      <P >Lorem ipsum dolor</P>
      <P size='L'>Lorem ipsum dolor</P>
      <Tag size='S'>Ghost</Tag>
      <Tag size='M' color='red'>Red</Tag>
      <Tag size='M' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number
}