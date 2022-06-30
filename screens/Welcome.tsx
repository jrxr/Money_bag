import React, { FunctionComponent } from 'react';
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from '../components/color';
import { Container } from '../components/shared';

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>

      </WelcomeContainer>
    </>
  )
};

export default Welcome;