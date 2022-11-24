/**
 * @jest-environment jsdom
 * */

import itemsCounter from '../modules/itemCounter.js';

describe('Testing items counter', () => {
  const link = document.createElement('p');
  const data = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      idMeal: '52959',
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
      idMeal: '52819',
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
      idMeal: '52944',
    },
    {
      strMeal: 'Fish fofos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
      idMeal: '53043',
    },
    {
      strMeal: 'Fish pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
      idMeal: '52802',
    },
    {
      strMeal: 'Fish Stew with Rouille',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg',
      idMeal: '52918',
    },
    {
      strMeal: 'Garides Saganaki',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg',
      idMeal: '52764',
    },
    {
      strMeal: 'Grilled Portuguese sardines',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg',
      idMeal: '53041',
    },
    {
      strMeal: 'Honey Teriyaki Salmon',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
      idMeal: '52773',
    },
    {
      strMeal: 'Kedgeree',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg',
      idMeal: '52887',
    },
    {
      strMeal: 'Kung Po Prawns',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1525873040.jpg',
      idMeal: '52946',
    },
    {
      strMeal: 'Laksa King Prawn Noodles',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg',
      idMeal: '52821',
    },
    {
      strMeal: 'Mediterranean Pasta Salad',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      idMeal: '52777',
    },
    {
      strMeal: 'Mee goreng mamak',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg',
      idMeal: '53048',
    },
    {
      strMeal: 'Nasi lemak',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg',
      idMeal: '53051',
    },
    {
      strMeal: 'Portuguese fish stew (Caldeirada de peixe)',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',
      idMeal: '53045',
    },
    {
      strMeal: 'Recheado Masala Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
      idMeal: '52809',
    },
  ];

  const count = itemsCounter(data, link);

  test('Number of items are 17', () => {
    expect(count).toBe(17);
  });
});
