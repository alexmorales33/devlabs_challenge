import {useState, useMemo} from 'react';
import {coffeeTypes} from '../data/data';

export const useFilteredCoffeeTypes = (initialSearchTerm: string = '') => {
  const [selectedProduct, setSelectedProduct] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [error, setError] = useState<string | null>(null);

  const filteredCoffeeTypes = useMemo(() => {
    try {
      let filteredTypes = coffeeTypes;

      if (selectedProduct !== 'All') {
        filteredTypes = filteredTypes.filter(
          coffee => coffee.type === selectedProduct,
        );
      }

      if (searchTerm) {
        filteredTypes = filteredTypes.filter(coffee =>
          coffee.type.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }

      if (error) setError(null);
      return filteredTypes;
    } catch (e) {
      setError('An error occurred while filtering coffee types.');
      return [];
    }
  }, [selectedProduct, searchTerm, error]);

  const handleProductSelection = (product: string) => {
    setSelectedProduct(product);
  };

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  return {
    selectedProduct,
    searchTerm,
    filteredCoffeeTypes,
    handleProductSelection,
    handleSearchChange,
    error,
  };
};
