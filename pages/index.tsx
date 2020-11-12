import { FC, useState } from 'react';
import GlobalStyles from 'Styles';
import { getData, getCubicWeight } from 'Utilities/mixins';
import Header from 'Components/Header';
import Dropdown from 'Components/Dropdown';
import { StyledH2, StyledH4 } from 'Styles/Font.styles';
export interface Items {
  category: string;
  title: string;
  weight: number;
  size: {
    width: number;
    length: number;
    height: number;
  }
}

export interface CubicWeightResult { category: string, averageWeight: number | string }

interface HomeProps {
  items: Items[];
}

const Home: FC<HomeProps> = ({ items }) => {

  const [cubicWeight, setCubicWeight] = useState<CubicWeightResult>(getCubicWeight(items, 'Air Conditioners'));

  const handleSelection = (value: string) => {
    if (value.length === 0) return;
    setCubicWeight(getCubicWeight(items, value))
  }
  const options = [...new Set(items.map(({ category }) => category))]

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledH2 align="center">Calculate Average Cubic Weight</StyledH2>
      <Dropdown onChange={handleSelection} options={options} />
      <StyledH4 align="center">{cubicWeight?.category}: {cubicWeight.averageWeight} kg</StyledH4>
    </>
  )
}

export async function getStaticProps() {
  let results: Items[] | unknown[] = [];

  const fetchAll = async () => {
    const data = async (next?: string): Promise<void> => {
      const endpoint = next ? next : '/api/products/1'
      if (next === null) return
      const res = await getData(endpoint)
      results = [...results, ...res.objects]
      return data(res.next)
    }
    await data()
  }

  await fetchAll();
  return {
    props: {
      items: results,
    },
  }
}

export default Home