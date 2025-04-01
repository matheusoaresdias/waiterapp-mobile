import Constants from 'expo-constants';
import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';

import { Product, Image, Details, Separator } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={{
              uri: `${Constants.expoConfig?.extra?.IMAGE_URI}/${product.imagePath}`,
            }}
          />

          <Details>
            <Text weight={600}>{product.name}</Text>
            <Text
              size={14}
              color="#666"
              style={{ marginVertical: 8 }}
            >
              {product.description}
            </Text>
            <Text size={14} weight={600} color="#666">{formatCurrency(product.price)}</Text>
          </Details>
        </Product>
      )}
    />
  );
}
