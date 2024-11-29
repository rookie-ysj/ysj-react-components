import styled from 'styled-components';
import { ButtonType } from './type';

const backgroundColor: Record<ButtonType, string> = {
  'default': '',
  'primary': 'blue',
  'success': 'green',
  'warning': '#',
  'danger': '#',
  'info': '#',
}

export const StyledButton = styled.button<{
  $type: ButtonType,
  $disabled: boolean
  $round: boolean
}>`
    background-color: ${props => backgroundColor[props.$type]};
    cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
    border-radius: ${props => props.$round ? '20px' : '4px'};
`