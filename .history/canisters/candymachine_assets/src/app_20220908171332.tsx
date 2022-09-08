import * as React from "react";
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom';
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
} from "./lib/atoms";

import AdminConfig from "./components/admin-config";
import {isInit} from "./lib/candymachine";
import Navb from "./components/navib";
import PageTitle from "./components/page-title";
import {
    RecoilRoot
} from 'recoil';
import Mint from "./pages/mint";
import Town from "./pages/town";
import Status from "./pages/status";

const App: React.FC = () => {

    // const [initiated, setIsInitiated] = useRecoilState(isInitiatedAtom);
    // const [loading, setLoading] = useRecoilState(loadingAtom);
    // const [connected] = useRecoilState(connectedAtom);
    // const [canister, setCanister] = useRecoilState(canisterAtom);
    // const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);
    // const [host, setHost] = useRecoilState(hostAtom);
    // const [minted, setMinted] = useRecoilState(mintedAtom);

    // const isDevelopment = process.env.NODE_ENV !== "production";
    // if (isDevelopment) {
    //     console.log("started in dev");
    //     setHost("http://127.0.0.1:8000/");
    // }

    // useEffect(() => {
    //     setCanister([nftCanister, candyMachineCanister]);
    //     checkInit().then();
    // }, []);

    // async function checkInit() {
    //     console.log("checked if initiated")
    //     const isInitiated = await isInit();
    //     console.log(isInitiated);
    //     if (isInitiated) {
    //         setIsInitiated(true);
    //     }
    // }


    return (
        <>
            <div className={"title-align viewp"}>
                {/* {isAdmin &&
                    <AdminConfig></AdminConfig>
                } */}
                <Navb></Navb>
                <PageTitle/>
                <Routes>
                    <Route
                        path='mint'
                        element={<Mint />}
                        />
                    <Route
                        path='town'
                        element={<Town />}
                        />
                    <Route
                        path='status'
                        element={<Status />}
                        />
                    <Route
                        path='*'
                        element={<Home />}
                        />
                </Routes>
            </div>
        </>
    );
}

export default App