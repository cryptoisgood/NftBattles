import * as React from "react";
import {Modal, Spinner} from "react-bootstrap";
import PlugConnect from '@psychedelic/plug-connect';
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
import Minter from "./minter";

import AdminConfig from "./admin-config";
import {isInit} from "./candymachine";
import Navb from "./navib";
import PlugWallet from "./plug-wallet";

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
                <>

                {connected &&
                    <Minter></Minter>
                }
                </>
            </div>
            <div className={"d-flex justify-content-center margin-top minter-dialog"}>
            <Modal
                show={loading}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Minting
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Modal.Body>
            </Modal>

            </div>
        </>
    );
}

export default App