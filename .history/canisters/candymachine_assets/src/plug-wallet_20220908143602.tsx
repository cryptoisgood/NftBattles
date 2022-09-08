import PlugConnect from '@psychedelic/plug-connect';
import React, { useState } from 'react';
import { useRecoilState} from "recoil";
import {
    canisterAtom,
    hostAtom,
    connectedAtom
} from "./atoms";

const PlugWallet: React.FC = () => {
    const [host, setHost] = useRecoilState(hostAtom);
    const [canister, setCanister] = useRecoilState(canisterAtom);
    const [connected, setConnected] = useRecoilState(connectedAtom);

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