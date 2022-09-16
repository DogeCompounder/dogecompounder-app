import React from 'react';

import Pools from 'features/vault/components/Pools/Pools';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import Airdrop from 'components/Disclaimer/Airdrop';

export default function HomePage() {
  return (
    <>
      <Disclaimer />
      <Airdrop />
      <Pools fromPage="home" />
    </>
  );
}
