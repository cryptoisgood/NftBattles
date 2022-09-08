import PlugConnect from '@psychedelic/plug-connect';
import React, { useState } from 'react';


const PlugWallet: React.FC = () => {
    const [host, setHost] = useRecoilState(hostAtom);

    async function afterConnected() {
        setConnected(true);
        const publicKey = await (window as any).ic.plug.agent.getPrincipal();
        if (publicKey.toString() === config.PLUG_ADMIN_PRINCIPAL) {
            setIsAdmin(true);
        }
    }


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