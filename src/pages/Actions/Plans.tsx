import { plans } from '../../data/constants.ts';
import { ActionsPlansCard } from './ActionsPlansCard.tsx';
import { useMuonNodeStaking } from '../../hooks/muonNodeStaking/useMuonNodeStaking.ts';
import { w3bNumberFromBigint, w3bNumberFromNumber } from '../../utils/web3.ts';
import { ActionType } from '../../types';
import useCreateAction from '../../contexts/CreateAction/useCreateAction.ts';
import { useMemo } from 'react';
import { useBooster } from '../../hooks/booster/useBooster.ts';
import { usePancakePair } from '../../hooks/pancakePair/usePancakePair.ts';
import useUpgradeAction from '../../contexts/UpgradeAction/useUpgradeAction.ts';
import useMergeAction from '../../contexts/MergeAction/useMergeAction.ts';

export const Plans = () => {
  const { valueOfBondedToken } = useMuonNodeStaking();

  const valueOfBondedTokenInW3BNumber = w3bNumberFromBigint(
    valueOfBondedToken || BigInt(0),
  );

  const { createAmount, createBoostAmount } = useCreateAction();
  const { boostCoefficient } = useBooster();
  const { USDCPrice } = usePancakePair();

  const createAmountInW3BNumber = useMemo(() => {
    return USDCPrice && boostCoefficient
      ? w3bNumberFromNumber(
          Math.round(
            (createBoostAmount.dsp *
              (Math.round(USDCPrice * 100) / 100) *
              boostCoefficient.dsp +
              createAmount.dsp) *
              100,
          ) / 100,
        )
      : w3bNumberFromNumber(0);
  }, [USDCPrice, boostCoefficient, createAmount, createBoostAmount]);

  const { upgradeAmount, upgradeBoostAmount, selectedUpgradeBonALICE } =
    useUpgradeAction();

  const upgradeAmountInW3BNumber = useMemo(() => {
    return USDCPrice && boostCoefficient && selectedUpgradeBonALICE
      ? w3bNumberFromNumber(
          Math.round(
            (upgradeBoostAmount.dsp *
              (Math.round(USDCPrice * 100) / 100) *
              boostCoefficient.dsp +
              upgradeAmount.dsp +
              selectedUpgradeBonALICE.nodePower) *
              100,
          ) / 100,
        )
      : w3bNumberFromNumber(0);
  }, [
    USDCPrice,
    boostCoefficient,
    selectedUpgradeBonALICE,
    upgradeAmount.dsp,
    upgradeBoostAmount.dsp,
  ]);

  const { selectedMergeBonALICEs } = useMergeAction();

  const mergeAmountInW3BNumber = useMemo(() => {
    return selectedMergeBonALICEs
      ? w3bNumberFromNumber(
          Math.round(
            selectedMergeBonALICEs.reduce(
              (acc, cur) => acc + cur.nodePower,
              0,
            ) * 100,
          ) / 100,
        )
      : w3bNumberFromNumber(0);
  }, [selectedMergeBonALICEs]);

  const isPlanActive = (minPower: number, maxPower: number) => {
    if (location.pathname === ActionType.CREATE) {
      return (
        createAmountInW3BNumber.dsp >= minPower &&
        createAmountInW3BNumber.dsp < maxPower
      );
    } else if (location.pathname === ActionType.UPGRADE) {
      return (
        upgradeAmountInW3BNumber.dsp >= minPower &&
        upgradeAmountInW3BNumber.dsp < maxPower
      );
    } else if (location.pathname === ActionType.MERGE) {
      return (
        mergeAmountInW3BNumber.dsp >= minPower &&
        mergeAmountInW3BNumber.dsp < maxPower
      );
    }
    return (
      valueOfBondedTokenInW3BNumber.dsp >= minPower &&
      valueOfBondedTokenInW3BNumber.dsp < maxPower
    );
  };

  const activePower = useMemo(() => {
    console.log(location.pathname);
    if (location.pathname === ActionType.CREATE) {
      return createAmountInW3BNumber.dsp;
    } else if (location.pathname === ActionType.UPGRADE) {
      return upgradeAmountInW3BNumber.dsp;
    } else if (location.pathname === ActionType.MERGE) {
      return mergeAmountInW3BNumber.dsp;
    }
    return valueOfBondedTokenInW3BNumber.dsp;
  }, [
    valueOfBondedTokenInW3BNumber,
    createAmountInW3BNumber,
    upgradeAmountInW3BNumber,
    mergeAmountInW3BNumber,
  ]);

  return (
    <div className="plans min-w-[470px] flex flex-col justify-between flex-grow">
      <ActionsPlansCard
        plan={plans[0]}
        className="w-full border-plan-1"
        animationDelay={0.1}
        animationDuration={0.3}
        active={isPlanActive(500, 5000)}
        activePower={activePower}
        color="text-plan-1"
      />
      <ActionsPlansCard
        plan={plans[1]}
        className="w-full border-plan-2"
        animationDelay={0.2}
        animationDuration={0.3}
        active={isPlanActive(5000, 25000)}
        activePower={activePower}
        color="text-plan-2"
      />
      <ActionsPlansCard
        plan={plans[2]}
        className="w-full border-plan-3"
        animationDelay={0.3}
        animationDuration={0.3}
        active={isPlanActive(25000, 50000)}
        activePower={activePower}
        color="text-[#84ca88]"
      />
      <ActionsPlansCard
        POA
        plan={plans[3]}
        className="w-full border-plan-3"
        animationDelay={0.4}
        animationDuration={0.3}
        active={isPlanActive(50000, 1000000)}
        activePower={activePower}
        color="text-plan-3"
      />
    </div>
  );
};
