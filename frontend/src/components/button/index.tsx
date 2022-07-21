import React from 'react';
import { Button as BaseButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
  return <BaseButton {...rest} />;
};

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.background};
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.background};
  }
`;
