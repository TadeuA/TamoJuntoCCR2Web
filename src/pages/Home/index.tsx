import React from 'react';
import { Card, IconCompany, WorkWithUnCard } from '../../components/molecules';
import { Input, Textarea } from '../../components/atoms';

const Home: React.FC = () => {
  return (
    <>
      <Card /> <IconCompany /> <WorkWithUnCard />
      <Input title="Nome" name="name" />
      <Textarea title="Nome" name="name" />
    </>
  );
};

export default Home;
