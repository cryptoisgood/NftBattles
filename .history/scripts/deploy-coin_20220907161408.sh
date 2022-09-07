#!/bin/bash

if [[ -z $1 ]];
then
    printf "💎 DIP-20 Deploy Script:\n\n   usage: deploy <local|ic|other> [reinstall]\n\n"
    exit 1;
fi

NETWORK=$1

dfx canister install token --network $NETWORK token \
	--argument="(
        \"data:image/jpeg;base64,$(base64 DIP20-logo.png)\",
        \"DIP20 Token\",
        \"TKN\",
        8:nat8,
        10000000000000000:nat,
        principal qn4yi-5bmj3-4xqzh-knt34-wfrhw-srz26-p463o-tn6ih-mm3vv-2smqt-6ae, 
        0
        )" \
    $MODE