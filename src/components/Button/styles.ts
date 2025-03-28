import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ disabled }: { disabled: string }) => disabled ? '#999' : '#d73035'};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`;
