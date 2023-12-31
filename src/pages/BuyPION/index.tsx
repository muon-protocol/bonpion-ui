import { FadeIn } from '../../animations';
import strings from '../../constants/strings.ts';

const Home = () => {
  return (
    <div className="page__bg">
      <div className="page page--buy-pion page--centered flex flex-col gap-6">
        <FadeIn className="mr-auto mb-8" delay={0} duration={0.3}>
          <p className="text-2xl font-medium font-tomorrow">
            Buy ${strings.token}
          </p>
        </FadeIn>
        <div className="steps flex w-full flex-col gap-12 md:gap-8 md:flex-row justify-between md:justify-center">
          {import.meta.env.VITE_PROJECT_NAME === 'PION' ? (
            <>
              <FadeIn
                className="w-1/3 max-md:w-full dark:shadow-xl rounded-2xl"
                delay={0.1}
                duration={0.3}
              >
                <div
                  className={`shop-card flex flex-col items-center py-10 px-11 justify-between bg-cover bg-no-repeat bg-center rounded-2xl h-[270px] md:w-full gap-4 dark:bg-alice-card-background`}
                  style={{
                    backgroundImage:
                      import.meta.env.VITE_PROJECT_NAME === 'PION'
                        ? `url(/assets/images/buy-pion/background-1.svg)`
                        : '',
                  }}
                >
                  <span className="flex flex-col gap-4 items-center justify-center">
                    <span className="flex items-end gap-2">
                      <img
                        src="/assets/images/buy-pion/thena-logo.svg"
                        alt=""
                        className="h-7 mt-2"
                      />
                      <p className="text-2xl font-medium text-center font-tomorrow"></p>
                    </span>
                    <span className="flex gap-2">
                      <p className="text-lg font-semibold text-center text-white">
                        Native Liquidity Layer <br />
                        <span className="text-light-text">on</span>
                        <img
                          src="/assets/images/buy-pion/bnb.svg"
                          alt=""
                          className="pb-1 px-2 inline"
                        />
                        BNB Smart Chain
                      </p>
                    </span>
                  </span>
                  <button
                    className="btn !px-5 btn--white !w-full"
                    onClick={() =>
                      window.open(
                        'https://thena.fi/swap?inputCurrency=BNB&outputCurrency=0xb8067235c9b71feec069af151fdf0975dfbdfba5',
                        '_blank',
                      )
                    }
                  >
                    Buy on THENA
                  </button>
                </div>
              </FadeIn>

              {/*<FadeIn*/}
              {/*  className="w-1/3 max-md:w-full dark:shadow-xl rounded-2xl"*/}
              {/*  delay={0.1}*/}
              {/*  duration={0.3}*/}
              {/*>*/}
              {/*  <div*/}
              {/*    className={`shop-card flex flex-col items-center py-10 px-11 justify-between bg-cover bg-no-repeat bg-center rounded-2xl h-[270px] md:w-full gap-4 dark:bg-alice-card-background`}*/}
              {/*    style={{*/}
              {/*      backgroundImage:*/}
              {/*        import.meta.env.VITE_PROJECT_NAME === 'PION'*/}
              {/*          ? `url(/assets/images/buy-pion/background-2.svg)`*/}
              {/*          : '',*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <span className="flex flex-col gap-2 items-center justify-center">*/}
              {/*      <span className="flex items-end gap-2">*/}
              {/*        <img src="/assets/images/buy-pion/uniswap.svg" alt="" />*/}
              {/*        <p className="text-2xl font-medium text-center font-tomorrow">*/}
              {/*          Uniswap*/}
              {/*        </p>*/}
              {/*      </span>*/}
              {/*      <span className="flex gap-2">*/}
              {/*        <p className="text-lg font-medium text-center text-light-text">*/}
              {/*          on*/}
              {/*        </p>*/}
              {/*        <img src="/assets/images/buy-pion/bnb.svg" alt="" />*/}
              {/*        <p className="text-lg font-bold text-white text-center">*/}
              {/*          BNB Smart Chain*/}
              {/*        </p>*/}
              {/*      </span>*/}
              {/*    </span>*/}
              {/*    <button*/}
              {/*      className="btn !px-5 btn--white !w-full"*/}
              {/*      disabled*/}
              {/*      onClick={() =>*/}
              {/*        window.open(*/}
              {/*          'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xf81df93ab37d5b1396139f294418b2741143b280',*/}
              {/*          '_blank',*/}
              {/*        )*/}
              {/*      }*/}
              {/*    >*/}
              {/*      Coming Soon*/}
              {/*    </button>*/}
              {/*  </div>*/}
              {/*</FadeIn>*/}

              {/*<FadeIn*/}
              {/*  className="w-1/3 max-md:w-full dark:shadow-xl rounded-2xl"*/}
              {/*  delay={0.2}*/}
              {/*  duration={0.3}*/}
              {/*>*/}
              {/*  <div*/}
              {/*    className={`shop-card flex flex-col items-center py-10 px-11 justify-between bg-cover bg-no-repeat bg-center rounded-2xl h-[270px] md:w-full gap-4 dark:bg-alice-card-background`}*/}
              {/*    style={{*/}
              {/*      backgroundImage:*/}
              {/*        import.meta.env.VITE_PROJECT_NAME === 'PION'*/}
              {/*          ? `url(/assets/images/buy-pion/background-3.svg)`*/}
              {/*          : '',*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <span className="flex flex-col gap-2 items-center justify-center">*/}
              {/*      <span className="flex items-end gap-2">*/}
              {/*        <img*/}
              {/*          src="/assets/images/buy-pion/pancakeswap-cake-logo.png"*/}
              {/*          alt=""*/}
              {/*          className="w-11 h-11"*/}
              {/*        />*/}
              {/*        <p className="text-2xl font-medium text-center font-tomorrow">*/}
              {/*          PancakeSwap*/}
              {/*        </p>*/}
              {/*      </span>*/}
              {/*      <span className="flex gap-2">*/}
              {/*        <p className="text-lg font-medium text-center text-light-text">*/}
              {/*          on*/}
              {/*        </p>*/}
              {/*        <img src="/assets/images/buy-pion/bnb.svg" alt="" />*/}
              {/*        <p className="text-lg font-bold text-white text-center">*/}
              {/*          BNB Smart Chain*/}
              {/*        </p>*/}
              {/*      </span>*/}
              {/*    </span>*/}
              {/*    <button*/}
              {/*      disabled*/}
              {/*      className="btn !px-5 btn--white !w-full"*/}
              {/*      onClick={() => window.open('', '_blank')}*/}
              {/*    >*/}
              {/*      Coming Soon*/}
              {/*    </button>*/}
              {/*  </div>*/}
              {/*</FadeIn>*/}
            </>
          ) : (
            <FadeIn
              className="w-1/3 max-md:w-full dark:shadow-xl rounded-2xl"
              delay={0.1}
              duration={0.3}
            >
              <div
                className={`shop-card flex flex-col items-center py-10 px-11 justify-between bg-cover bg-no-repeat bg-center rounded-2xl h-[270px] md:w-full gap-4 dark:bg-alice-card-background`}
                style={{
                  backgroundImage:
                    import.meta.env.VITE_PROJECT_NAME === 'PION'
                      ? `url(/assets/images/buy-pion/background-2.svg)`
                      : '',
                }}
              >
                <span className="flex flex-col gap-2 items-center justify-center">
                  <span className="flex items-end gap-2">
                    <img
                      src="/assets/images/buy-pion/pancakeswap-cake-logo.png"
                      alt=""
                      className="w-10 h-10"
                    />
                    <p className="text-2xl font-medium text-center font-tomorrow">
                      PancakeSwap
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p className="text-lg font-medium text-center text-light-text">
                      on
                    </p>
                    <img
                      src="/assets/images/buy-pion/bnb.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <p className="text-lg font-bold text-white text-center">
                      BSC (testnet)
                    </p>
                  </span>
                </span>
                <button
                  className="btn !px-5 !w-full"
                  onClick={() =>
                    window.open(
                      'https://pancakeswap.finance/swap?chain=bscTestnet&outputCurrency=0xF43CD517385237fe7A48927073151D12f4eADC53&inputCurrency=tBNB',
                      '_blank',
                    )
                  }
                >
                  Buy on PancakeSwap
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
