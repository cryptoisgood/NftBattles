#!/bin/bash


dfx canister install dip20 \
	--argument="(
        \"data:image/jpeg;base64,$(base64 DIP20-logo.png)\",
        \"DIP20 Token\",
        \"TKN\",
        8:nat8,
        10000000000000000:nat,
        principal \"qn4yi-5bmj3-4xqzh-knt34-wfrhw-srz26-p463o-tn6ih-mm3vv-2smqt-6ae\", 
        0,
        principal \"qn4yi-5bmj3-4xqzh-knt34-wfrhw-srz26-p463o-tn6ih-mm3vv-2smqt-6ae\", 
        0
        )" 