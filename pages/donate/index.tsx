import React from "react";
import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaChevronLeft } from "react-icons/fa";
import { Modal } from "../../components";
import useWallet from "../../contexts/wallet";
import { Button } from "../../components";

import { Transaction } from '@martifylabs/mesh'

const donationAddress = "addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va"

const amounts: string[] = ["₳1000", "₳500", "₳100", "CUSTOM"];
// const amounts: number[] = [10000000000, 5000000000, 1000, "CUSTOM"];

const Donate: NextPage = () => {
  const [amount, setAmount] = React.useState<string>("");
  const [amountSent, setAmountSent] = React.useState<string>("");
  const [image, setImage] = React.useState<number | null>(null);
  const [modal, setModal] = React.useState<boolean>(false);
  const router = useRouter();

  // const handleDonate = () => {
  //   if (amount) {
  //     router.push("/donate/confirm");
  //   }
  // };

  const { walletConnected, wallet } = useWallet();
    const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleDonate = async (send_amt: string) => {
        if (walletConnected) {
            setLoading(true)
            const network = await wallet.getNetworkId()
            if (network == 1) {
                alert("this dapp only works on Cardano Testnet")
            }
            else {
                const tx = new Transaction({ initiator: wallet }).sendLovelace(
                    donationAddress,
                    send_amt
                );
                try {
                    const unsignedTx = await tx.build();
                    const signedTx = await wallet.signTx(unsignedTx);
                    const txHash = await wallet.submitTx(signedTx);
                    let actual_amt = "0";
                    setSuccessfulTxHash(txHash)
                    if(send_amt === "1000000000"){
                      actual_amt = "1000"
                    } else if (send_amt === "500000000"){
                      actual_amt = "500"
                    } else if (send_amt === "100000000"){
                      actual_amt = "100"
                    }
                    setAmountSent(actual_amt)
                    // router.push("/donate/confirm");
                } catch (error: any) {
                    if (error.info) {
                        alert(error.info)
                    }
                    else {
                        console.log(error)
                    }
                }
            }
            setLoading(false)
        }
        else {
            alert("please connect a wallet")
        }
    }


    const handleSent = () => {
        router.push("/?from=donation")
    };

  return (
    <>
      <Head>
        <title>Donate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-32 md:h-48">
        <Image src="/static/images/banner.png" alt="" width="1500" height="500" />
      </div>
      <main className="container w-full py-4 space-y-8">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="btn btn-ghost text-primary text-xl md:text-3xl"
          >
            <FaChevronLeft />
          </button>
          <div className="flex-grow">
            <h1 className="text-xl md:text-4xl text-dark2 text-center font-bold">
              Donate to Kagumo High School
            </h1>
          </div>
        </div>
        <div className="space-y-8 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl text-black">
            Select Donation Amount
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center justify-center">
          <button
                onClick={() => {
                  handleDonate("1000000000")
                }}
                className={`btn w-36 btn-primary`}
              >
                ₳1000
              </button>
              <button
                onClick={() => {
                  handleDonate("500000000")
                }}
                className={`btn w-36 btn-primary`}
              >
                ₳500
              </button>
              <button
                onClick={() => {
                  handleDonate("100000000")
                }}
                className={`btn w-36 btn-primary`}
              >
                ₳100
              </button>
              </div>
              <div>
                {successfulTxHash ? (
                <>
                  <p>Tx Status</p>
                  <p>
                            TxHash: {successfulTxHash}
                        </p>
                        <p>Amount Sent: {amountSent}</p>
                        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 justify-items-center justify-center">
                        <Button
            onCick={handleSent}
            loading={loading}
            loadingIndicator="processing..."
            className="capitalize btn btn-primary w-36"
          >
            Done
          </Button>
          </div>
                </>) : ('')}
                
                {loading ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <>
                       
                    </>
                )}
            </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center justify-center">
            {amounts.map((amt: string, index: number) => (
              <button
                onClick={() => {
                  setAmount(amt);
                  setImage(index + 1);
                }}
                className={`btn w-36 ${
                  amount === amt ? "btn-primary" : "bg-gray-200 btn-ghost"
                }`}
              >
                {amt}
              </button>
            ))}
          </div>
          {amount && (
            <div className="space-y-2 flex flex-col items-center">
              <Image
                onClick={() => setModal(true)}
                src={`/static/images/${image ? image : 1}.jpeg`}
                alt="NFT"
                width={50}
                height={50}
                className="rounded-md cursor-pointer "
              />
              <p>
                Click to view the exclusive NFT you will receive with your
                donation
              </p>
            </div>
          )} */}
          {/* <button
            onClick={handleDonate}
            className="capitalize btn btn-primary w-36"
          >
            donate
          </button> */}
        </div>
      </main>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        className="w-full md:w-60 h-60 shadow-2xl"
      >
        <h1>Hello</h1>
        <Image
          src={`/static/images/${image ? image : 1}.jpeg`}
          alt="NFT"
          width={50}
          height={50}
          className="rounded-md cursor-pointer"
        />
      </Modal>
    </>
  );
};

export default Donate;
