import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../animations';
import strings from '../../constants/strings.ts';
import routes from '../../routes';
// import useNodeBonALICE from '../../hooks/useNodeBonALICE.ts';
// import { useEffect } from 'react';

const GetStarted = () => {
  // const { stakerAddressInfo } = useNodeBonALICE();

  // useEffect(() => {
  //   if (stakerAddressInfo?.active) {
  //     window.open('/dashboard/', '_self');
  //   }
  // }, [stakerAddressInfo]);

  return (
    <div className="page__bg">
      <div className="page page--get-started">
        <FadeIn duration={0.3}>
          <p className="text-[19px] md:text-2xl font-light mb-6">
            You can obtain {strings.nft} in two ways: either create a new one
            independently or claim it as a reward if you're part of the MUON
            pioneers
          </p>
          <p className="text-lg md:text-xl font-semibold md:font-light mb-4 mr-auto">
            You're a pioneer if you:
          </p>
          <span className="flex flex-col md:flex-row w-full gap-3 justify-stretch mb-12">
            <span className="get-started__pioneer-option">
              Joined the Presale
            </span>
            {/*<span className="get-started__pioneer-option">*/}
            {/*  Joined the Deus Presale*/}
            {/*</span>*/}
            <span className="get-started__pioneer-option">
              Operated an {strings.token} Node
            </span>
          </span>
          <span className="get-started__actions">
            <NewBonALICEAction />
            <MuanPioneerAction />
          </span>
        </FadeIn>
      </div>
    </div>
  );
};

const NewBonALICEAction = () => {
  const newBonALICEFloatingIconVariants = {
    initial: {
      left: -4 * 4,
      bottom: -9 * 4,
      transform: 'rotate(0deg)',
    },
    animate: {
      left: -10 * 4,
      bottom: 13 * 4,
      transform: 'rotate(30deg)',
    },
  };
  return (
    <Link
      className="get-started__actions__action-container relative"
      to={routes.create.path}
    >
      <motion.span whileHover="animate">
        <motion.img
          variants={newBonALICEFloatingIconVariants}
          className="get-started__actions__action__floating-object hidden h-[186px] w-auto md:absolute -left-4 -bottom-9"
          src="/assets/images/get-started/new-bon-alice-floating-icon.svg"
          alt=""
        />
        <div className="get-started__actions__action">
          <img
            className="h-8 mr-3 md:mr-0 md:mb-12 md:h-16 w-auto"
            src="/assets/images/get-started/new-bon-alice-icon.svg"
            alt=""
          />
          <div className="font-semibold md:text-2xl md:font-light md:min-h-[4rem] flex items-center md:text-center text-white mx-auto">
            Get Started with a New {strings.nft}
          </div>
        </div>
      </motion.span>
    </Link>
  );
};

const MuanPioneerAction = () => {
  const muanFloatingIconVariants = {
    initial: {
      top: -7 * 4,
      right: -20 * 4,
      transform: 'rotate(0deg)',
    },
    animate: {
      top: 22 * 4,
      right: -10 * 4,
      transform: 'rotate(45deg)',
    },
  };
  return (
    <Link
      className="get-started__actions__action-container relative"
      to={routes.claim.path}
    >
      <motion.span whileHover="animate">
        <motion.img
          variants={muanFloatingIconVariants}
          className="hidden md:absolut get-started__actions__action__floating-object h-[203px] w-auto -top-7 -right-20"
          src="/assets/images/get-started/muan-pioneer-floating-icon.svg"
          alt=""
        />
        <div className="get-started__actions__action">
          <img
            className="h-8 mr-3 md:mr-0 md:mb-12 md:h-16 w-auto"
            src="/assets/images/get-started/muan-pioneer-icon.svg"
            alt=""
          />
          <div className="font-semibold md:text-2xl md:min-h-[4rem] flex items-center md:font-light md:text-center text-white mx-auto">
            Claim Your Node-Drop
          </div>
        </div>
      </motion.span>
    </Link>
  );
};

export default GetStarted;
