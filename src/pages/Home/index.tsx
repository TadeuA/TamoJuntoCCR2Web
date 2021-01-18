import React from 'react';
import { Card, IconCompany, WorkWithUnCard } from '../../components/molecules';
import { Input, Textarea } from '../../components/atoms';
import { Cards } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Cards>
        <Card />
        <Card />
        <Card />
      </Cards>
      <IconCompany /> <WorkWithUnCard />
      <Input title="Nome" name="name" />
      <Textarea title="Nome" name="name" />
    </>
  );
};

export default Home;
