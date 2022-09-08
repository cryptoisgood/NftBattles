import PlugConnect from '@psychedelic/plug-connect';
import React, { useState } from 'react';


const PlugWallet: React.FC = () => {


return (
<>
    <PlugConnect
    dark
    whitelist={canister}
    host={host}
    onConnectCallback={afterConnected}
/>
</>
);
}
export default PlugWallet