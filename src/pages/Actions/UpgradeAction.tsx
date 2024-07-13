import useUpgradeAction from '../../contexts/UpgradeAction/useUpgradeAction.ts';
import useALICE from '../../contexts/ALICE/useALICE.ts';
import useBonALICE from '../../contexts/BonALICE/useBonALICE.ts';
import { useMemo } from 'react';
import { FadeIn, MoveUpIn } from '../../animations';
import SelectButtonWithModal from '../../components/Common/SelectButtonWithModal.tsx';
import AmountInput from '../../components/Common/AmountInput.tsx';
import useLPToken from '../../contexts/LPToken/useLPToken.ts';
import Modal from '../../components/Common/Modal.tsx';
import { getCurrentChainId } from '../../constants/chains.ts';
import useUserProfile from '../../contexts/UserProfile/useUserProfile.ts';
import BonALICEModalBody from '../../components/Common/BonALICEModalBody.tsx';
import { useMuonNodeStaking } from '../../hooks/muonNodeStaking/useMuonNodeStaking.ts';
import { useALICEAllowance } from '../../hooks/alice/useALICEAllowance.ts';
// import { useLPTokenAllowance } from '../../hooks/lpToken/useLPTokenAllowance.ts';
import BoostingAmountInput from '../../components/Common/BoostingAmountInput.tsx';
import { useBooster } from '../../hooks/booster/useBooster.ts';
// import { usePancakePair } from '../../hooks/pancakePair/usePancakePair.ts';
import UpgradeAmountCalculation from './UpgradeAmountCalculation.tsx';
import strings from '../../constants/strings.ts';
import UpgradeAllowanceModalBody from './UpgradeAllowanceModalBody.tsx';

export const RenderUpgradeBody = () => {
  const {
    isUpgradeModalOpen,
    openUpgradeModal,
    closeUpgradeModal,
    handleUpgradeModalItemClicked,
    isSelectedUpgradeBonALICE,
    selectedUpgradeBonALICE,
    upgradeAmount,
    handleUpgradeAmountChange,
    handleUpgradeBoostAmountChange,
    upgradeBoostAmount,
    handleUpgradeBonALICEClicked,
    isMetamaskLoading,
    isTransactionLoading,
    handleApproveLPTokenClicked,
    handleApproveALICEClicked,
    isAllowanceModalOpen,
    closeAllowanceModal,
  } = useUpgradeAction();

  const { ALICEBalance } = useALICE();
  const { bonALICEs, LPTokenAllowanceForBooster } = useBonALICE();

  const { allowanceForBooster: aliceAllowanceForBooster } = useALICEAllowance();
  // const { allowanceForMuonNodeStaking: lpTokenAllowanceForMuon } =
  //   useLPTokenAllowance();

  const { LPTokenBalance } = useLPToken();
  const { chainId, handleSwitchNetwork } = useUserProfile();

  const { nodeBonALICE } = useMuonNodeStaking();

  const showApproveALICE = useMemo(() => {
    if (!aliceAllowanceForBooster) return false;

    return aliceAllowanceForBooster.big < upgradeAmount.big;
  }, [aliceAllowanceForBooster, upgradeAmount]);

  const showApproveLPToken = useMemo(() => {
    if (LPTokenAllowanceForBooster)
      return LPTokenAllowanceForBooster.big < upgradeBoostAmount.big;
    return false;
  }, [LPTokenAllowanceForBooster, upgradeBoostAmount]);

  const { boostCoefficient } = useBooster();

  const isUpgradeBonALICEButtonDisabled = useMemo(() => {
    return (
      !selectedUpgradeBonALICE ||
      !upgradeAmount ||
      !upgradeAmount.hStr ||
      upgradeAmount.big === BigInt(0) ||
      !ALICEBalance ||
      !ALICEBalance.hStr ||
      upgradeAmount.big > ALICEBalance.big
    );
  }, [selectedUpgradeBonALICE, upgradeAmount, ALICEBalance]);

  return (
    <>
      <FadeIn duration={0.1} delay={0.1} className="mb-4">
        <SelectButtonWithModal
          title={`Select ${strings.nft}`}
          onClick={() => openUpgradeModal()}
          isModalOpen={isUpgradeModalOpen}
          closeModalHandler={() => closeUpgradeModal()}
          modalTitle={
            // [...nodeBonALICE, ...bonALICEs].length > 0
            [...nodeBonALICE].length > 0
              ? `Select ${strings.nft}`
              : `No ${strings.nft} to Upgrade`
          }
          selectedItems={
            selectedUpgradeBonALICE ? [selectedUpgradeBonALICE] : []
          }
          removeItem={(item) => handleUpgradeModalItemClicked(item)}
        >
          <BonALICEModalBody
            // bonALICEs={[...nodeBonALICE, ...bonALICEs]}
            bonALICEs={[...nodeBonALICE]}
            handleUpgradeModalItemClicked={handleUpgradeModalItemClicked}
            isSelectedUpgradeBonALICE={isSelectedUpgradeBonALICE}
          />
        </SelectButtonWithModal>
      </FadeIn>
      <FadeIn duration={0.1} delay={0.1}>
        <AmountInput
          withLink
          rightText={strings.token}
          balance={ALICEBalance}
          value={upgradeAmount}
          onValueChanged={handleUpgradeAmountChange}
          disabled={!selectedUpgradeBonALICE}
          boostCoefficient={boostCoefficient}
        />
      </FadeIn>
      <FadeIn className="hidden" duration={0.1} delay={0.1}>
        <BoostingAmountInput
          withLink
          rightText={'USDC'}
          balance={LPTokenBalance}
          value={upgradeBoostAmount}
          // max={maxAmountToBoost}
          boostCoefficient={boostCoefficient}
          onValueChanged={handleUpgradeBoostAmountChange}
          // disabled={!maxAmountToBoost || maxAmountToBoost.big === BigInt(0)}
        />
      </FadeIn>

      {selectedUpgradeBonALICE && (
        <MoveUpIn y={-10} className="mb-6 mt-4" duration={0.1} delay={0.3}>
          <span className="flex justify-between max-md:text-sm text-gray10 mb-1 md:mb-2">
            <p className="font-light">Current ${strings.nft} amount:</p>
            <p className="font-medium">{selectedUpgradeBonALICE.nodePower}</p>
          </span>
          <UpgradeAmountCalculation />
        </MoveUpIn>
      )}
      <FadeIn
        duration={0.1}
        delay={0.1}
        className="mt-auto max-md:w-[80vw] md:mx-auto !w-full"
      >
        {(ALICEBalance && upgradeAmount.dsp > ALICEBalance.dsp) ||
        (LPTokenBalance && upgradeBoostAmount.dsp > LPTokenBalance.dsp) ? (
          <button
            className="btn btn--action min-w-full md:min-w-[360px] mx-auto !py-4"
            disabled
          >
            Insufficient Funds
          </button>
        ) : chainId !== getCurrentChainId() ? (
          <button
            onClick={() => handleSwitchNetwork(getCurrentChainId())}
            className="btn btn--action min-w-full md:min-w-[360px] mx-auto !py-4"
          >
            Switch Network
          </button>
        ) : isMetamaskLoading || isTransactionLoading ? (
          <button
            className="btn btn--action min-w-full md:min-w-[360px] mx-auto !py-4"
            disabled
          >
            {isMetamaskLoading
              ? 'Waiting for Metamask...'
              : 'Waiting for Tx...'}
          </button>
        ) : showApproveALICE ? (
          <button
            onClick={() => handleApproveALICEClicked()}
            className="btn btn--action min-w-full md:min-w-[360px] mx-auto !py-4"
            disabled={isUpgradeBonALICEButtonDisabled}
          >
            Approve{' '}
            {ALICEBalance && upgradeAmount.big < ALICEBalance.big
              ? upgradeAmount.hStr + ` ${strings.nft}`
              : `All ${strings.token}`}
          </button>
        ) : showApproveLPToken ? (
          <button
            onClick={() => handleApproveLPTokenClicked()}
            className="btn btn--action min-w-full md:min-w-[360px] mx-auto !py-4"
            disabled={isUpgradeBonALICEButtonDisabled}
          >
            Approve{' '}
            {LPTokenBalance && upgradeBoostAmount.big < LPTokenBalance.big
              ? upgradeBoostAmount.hStr + ' USDC'
              : 'All USDC'}
          </button>
        ) : (
          <button
            onClick={() => handleUpgradeBonALICEClicked()}
            disabled={isUpgradeBonALICEButtonDisabled}
            className="btn btn--action min-w-full md:min-w-[360px] mx-auto !py-4"
          >
            Boost Bonded {strings.token}
          </button>
        )}
      </FadeIn>
      <Modal
        size="sm"
        isOpen={isAllowanceModalOpen}
        closeModalHandler={closeAllowanceModal}
      >
        <UpgradeAllowanceModalBody />
      </Modal>
    </>
  );
};
