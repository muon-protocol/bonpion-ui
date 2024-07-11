import { useCallback, useMemo } from 'react';
import { writeContract } from '@wagmi/core';
import BONALICE_ABI from '../abis/PION/Mainnet/NFT.ts';
import { BONALICE_ADDRESS } from '../constants/addresses.ts';
import { getCurrentChainId } from '../constants/chains.ts';
import { Address } from 'viem';

const useTransfer = (
  from: Address | undefined,
  to: Address,
  tokenId: number,
) => {
  const args: any = useMemo(() => {
    return [from!, to, tokenId];
  }, [from, to, tokenId]);

  const transfer = useCallback(async () => {
    const { hash } = await writeContract({
      abi: BONALICE_ABI,
      address: BONALICE_ADDRESS[getCurrentChainId()],
      functionName: 'safeTransferFrom',
      args: args,
    });
    return hash;
  }, [args]);

  return { transfer };
};

export default useTransfer;
