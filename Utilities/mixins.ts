import { Items, CubicWeightResult } from 'pages';
import { API_ENDPOINT } from 'Utilities/constants';

interface CubicWeightValues {
  width: number;
  length: number;
  height: number;
}




export const getData = async (next: string) => await (await fetch(`${API_ENDPOINT}${next}`)).json();

export const calculateCubicWeight = ({ width, length, height }: CubicWeightValues): number => (width / 100) * (length / 100) * (height / 100) * 250;

export const getCubicWeight = (items: Items[], value: string): CubicWeightResult => {
  const item = items.filter((item) => item.category === value);
  let calculation = 0;
  item.map(({ size: { width, length, height } }: Items) => calculation = calculateCubicWeight({ width, length, height }))
  return { category: value, averageWeight: !isNaN(calculation) ? (calculation / item.length) : 'unkown' }

}