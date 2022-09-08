import * as React from "react";
import {canisterId as nftCanister} from "../../declarations/candymachine_dip721";
import {canisterId as candyMachineCanister} from "../../declarations/candymachine";
import { useRecoilState} from "recoil";
import {useEffect} from "react";
import {
    canisterAtom,
    connectedAtom,
    hostAtom,
    isAdminAtom,
    isInitiatedAtom,
    loadingAtom,
    mintedAtom
} from "./atoms";

import AdminConfig from "./admin-config";
import {isInit} from "./candymachine";
import Navb from "./navib";
import PageTitle from "./page-title";
import {
    RecoilRoot
} from 'recoil';
import {HashRouter} from "react-router-dom";

const App: React.FC = () => {

    const [initiated, setIsInitiated] = useRecoilState(isInitiatedAtom);
    const [loading, setLoading] = useRecoilState(loadingAtom);
    const [connected] = useRecoilState(connectedAtom);
    const [canister, setCanister] = useRecoilState(canisterAtom);
    const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);
    const [host, setHost] = useRecoilState(hostAtom);
    const [minted, setMinted] = useRecoilState(mintedAtom);

    const isDevelopment = process.env.NODE_ENV !== "production";
    if (isDevelopment) {
        console.log("started in dev");
        setHost("http://127.0.0.1:8000/");
    }

    useEffect(() => {
        setCanister([nftCanister, candyMachineCanister]);
        checkInit().then();
    }, []);

    async function checkInit() {
        console.log("checked if initiated")
        const isInitiated = await isInit();
        console.log(isInitiated);
        if (isInitiated) {
            setIsInitiated(true);
        }
    }


    return (
        <>
            <div className={"title-align viewp"}>
                {isAdmin &&
                    <AdminConfig></AdminConfig>
                }
                <Navb></Navb>
                <PageTitle/>
            </div>
        </>
    );
}

export default App