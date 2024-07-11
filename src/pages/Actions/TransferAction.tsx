import useTransferAction from '../../contexts/TransferAction/useTransferAction.ts';
import useBonALICE from '../../contexts/BonALICE/useBonALICE.ts';
// import { useMemo } from 'react';
import { FadeIn } from '../../animations';
import SelectButtonWithModal from '../../components/Common/SelectButtonWithModal.tsx';
import AddressInput from '../../components/Common/AddressInput.tsx';
import BonALICEModalBody from '../../components/Common/BonALICEModalBody.tsx';
import strings from '../../constants/strings.ts';
import { useMemo, useState } from 'react';
import { waitForTransaction } from 'wagmi/actions';
import toast from 'react-hot-toast';

const RenderTransferBody = () => {
  const {
    isTransferModalOpen,
    openTransferModal,
    closeTransferModal,
    handleTransferModalItemClicked,
    selectedTransferBonALICE,
    handleTransferAddressChange,
    transferAddress,
    isSelectedTransferBonALICE,
    transfer,
    unselectTransferModalSelectedBonALICE,
  } = useTransferAction();
  const { bonALICEs } = useBonALICE();
  const [transferLoading, setTransferLoading] = useState<boolean>(false);
  const isTransferBonALICEButtonDisabled = useMemo(() => {
    return !selectedTransferBonALICE || !transferAddress;
  }, [transferAddress, selectedTransferBonALICE]);

  const handleTransfer = async () => {
    try {
      setTransferLoading(true);
      const hash: any = await transfer();
      const data = waitForTransaction({ hash: hash });
      await toast.promise(data, {
        loading: 'Waiting for transfer',
        success: 'Transfer complete',
        error: 'Transfer failed',
      });
      unselectTransferModalSelectedBonALICE();
      setTransferLoading(false);
    } catch {
      setTransferLoading(false);
    }
  };
  return (
    <>
      <FadeIn duration={0.1} delay={0.1} className="mb-4">
        <SelectButtonWithModal
          title={`Select ${strings.nft}`}
          onClick={() => openTransferModal()}
          isModalOpen={isTransferModalOpen}
          closeModalHandler={() => closeTransferModal()}
          modalTitle={`Select ${strings.nft}`}
          removeItem={() => {}}
          selectedItems={
            selectedTransferBonALICE ? [selectedTransferBonALICE] : []
          }
        >
          <BonALICEModalBody
            bonALICEs={bonALICEs}
            handleUpgradeModalItemClicked={handleTransferModalItemClicked}
            isSelectedUpgradeBonALICE={isSelectedTransferBonALICE}
          />
        </SelectButtonWithModal>
      </FadeIn>
      <FadeIn duration={0.1} delay={0.1}>
        <AddressInput
          title={'To Address'}
          placeholder={'Enter address'}
          value={transferAddress}
          onValueChanged={handleTransferAddressChange}
        />
      </FadeIn>

      <FadeIn
        duration={0.1}
        delay={0.1}
        className="mt-auto max-md:mt-10 max-md:w-[80vw] md:mx-auto !w-full"
      >
        <button
          onClick={() => {
            !isTransferBonALICEButtonDisabled && handleTransfer();
          }}
          disabled={isTransferBonALICEButtonDisabled}
          className="btn !w-full"
        >
          {transferLoading ? 'Transfer...' : 'Transfer'}
        </button>
      </FadeIn>
    </>
  );
};

export default RenderTransferBody;
