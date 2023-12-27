import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${props =>
    props.type === 'PRIMARY'
      ? useTheme().COLORS.GREEN_700
      : useTheme().COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${() => useTheme().COLORS.WHITE};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
`;
