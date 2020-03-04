import React from 'react';
import styled from 'styled-components';

const SocialBar = styled.aside`
  position: fixed;
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 8vh;
`;

function Social() {
  return (
    <SocialBar>
      <p>Git</p>
      <p>Git</p>
    </SocialBar>
  );
}

export default Social;
