import {useEffect, useState} from 'react';
import {CoffeeType} from '../types/types';
import {coffeeTypes} from '../data/data';

export const useCoffeeDetails = (coffeeId: number) => {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const coffee = coffeeTypes.find(product => Number(product.id) === coffeeId);
    if (coffee) {
      setSelectedCoffee(coffee);
    } else {
      setError('Coffee not found');
    }
  }, [coffeeId]);

  return {selectedCoffee, error};
};
