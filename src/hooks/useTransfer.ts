import { useCallback, useMemo } from 'react';
import { writeContract } from '@wagmi/core';
import BONALICE_API from '../abis/BonALICE.json';
import { BONALICE_ADDRESS } from '../constants/addresses.ts';
import { getCurrentChainId } from '../constants/chains.ts';

const useTransfer = (
  from: `0x${string}` | undefined,
  to: string,
  tokenId: number,
) => {
  const args = useMemo(() => {
    if (!from || !to || !tokenId) return [];

    // args: [from (address), to (address), tokenId (uint256)]
    return [from, to, tokenId];
  }, [from, to, tokenId]);

  const transfer = useCallback(async () => {
    const { hash } = await writeContract({
      abi: BONALICE_API,
      address: BONALICE_ADDRESS[getCurrentChainId()],
      functionName: 'safeTransferFrom',
      args: args,
    });

    return hash;
  }, [args]);

  return { transfer };
};

export default useTransfer;