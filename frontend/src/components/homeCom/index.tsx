import { useState } from "react";
import { useAppSelector } from "store/store";
import { switchNetwork } from "store/redux/slices/wallet3Connect/web3ConnectSlice";
import { networkObj } from "../data";
import { ContractUtility } from "utility/contract-utility";
import { MainTable } from "components/common";
import { ConnectModal } from "components/common/modal";
import { Navbar } from "components/common";
import { Form } from "pages";
import { Button, Modal } from "antd";

const HomeCom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { web3, account, chainId } = useAppSelector(
    (state) => state.web3Connect
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const {convertedPrice} = PriceConvertorHook({ amount: 1, id: "2" })

  return (
    <div>
      <Navbar />
      <button onClick={showModal}>Connect</button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={500}
      >
        <ConnectModal />
      </Modal>
      {web3 ? (
        <select
          value={ContractUtility.getProtocol(chainId)}
          onChange={(e) => switchNetwork(web3, e.target.value)}
        >
          {networkObj.map((network, i) => {
            return (
              <option key={i} value={network.value}>
                {network.name}
              </option>
            );
          })}
        </select>
      ) : (
        ""
      )}
      <p>account: {account}</p>

      <Form />
      <MainTable />
    </div>
  );
};

export default HomeCom;
