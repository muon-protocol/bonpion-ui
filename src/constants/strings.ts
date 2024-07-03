const strings = {
  PION: {
    projectName: 'pion',
    token: 'PION',
    tokens: 'PIONs',
    nft: 'bonPION',
    nfts: 'bonPIONs',
    projectSubgraphAddress:
      'https://api.studio.thegraph.com/query/81515/bonpion-bsc/version/latest',
    // 'https://api.thegraph.com/subgraphs/name/rastegarishirazu/muon-nft-mainnet',
    projectTestnetSubgraphAddress:
      'https://api.studio.thegraph.com/query/81515/bonpion-test/version/latest',
    footerLogoSrc: '/assets/images/footer/pion-muon-logo.svg',
    navbar: {
      hamburgerSrc: '/assets/images/navbar/pion-hamburger-icon.svg',
      exitHamburgerSrc: '/assets/images/navbar/pion-exit-hamburger-icon.svg',
      logoSrc: '/assets/images/navbar/pion-logo.svg',
      tokenLogoSrc: '/assets/images/navbar/pion-token-logo.svg',
    },
    sidebar: {
      arrowSrc: '/assets/images/sidebar/arrow.svg',
      logoSrc: '/assets/images/sidebar/logo.svg',
      logoTextSrc: '/assets/images/sidebar/logo-text.svg',
      nftLogoSrc: '/assets/images/sidebar/pion-nft-logo.svg',
      tokenLogoSrc: '/assets/images/sidebar/pion-token-logo.svg',
    },
    actions: {
      hashtagSrc: '/assets/images/hashtag.svg',
      view: {
        icon: '/assets/images/actions/view-icon.svg',
        hoverIcon: '/assets/images/actions/view-colored-icon.svg',
        grayIcon: '/assets/images/actions/view-gray-icon.svg',
      },
      create: {
        icon: '/assets/images/actions/create-icon.svg',
        hoverIcon: '/assets/images/actions/create-colored-icon.svg',
        grayIcon: '/assets/images/actions/create-gray-icon.svg',
      },
      increase: {
        primaryIcon: '/assets/images/actions/upgrade-primary-icon.svg',
        icon: '/assets/images/actions/upgrade-icon.svg',
        hoverIcon: '/assets/images/actions/upgrade-colored-icon.svg',
        grayIcon: '/assets/images/actions/upgrade-gray-icon.svg',
        disabledIcon: '/assets/images/actions/upgrade-disabled-icon.svg',
      },
      merge: {
        primaryIcon: '/assets/images/actions/merge-primary-icon.svg',
        icon: '/assets/images/actions/merge-icon.svg',
        hoverIcon: '/assets/images/actions/merge-colored-icon.svg',
        grayIcon: '/assets/images/actions/merge-gray-icon.svg',
        disabledIcon: '/assets/images/actions/merge-disabled-icon.svg',
      },
      split: {
        icon: '/assets/images/actions/split-icon.svg',
        hoverIcon: '/assets/images/actions/split-colored-icon.svg',
        grayIcon: '/assets/images/actions/split-gray-icon.svg',
        disabledIcon: '/assets/images/actions/split-gray-icon.svg',
      },
      transfer: {
        icon: '/assets/images/actions/transfer-icon.svg',
        hoverIcon: '/assets/images/actions/transfer-colored-icon.svg',
        grayIcon: '/assets/images/actions/transfer-gray-icon.svg',
        disabledIcon: '/assets/images/actions/transfer-gray-icon.svg',
      },
    },
  },
  ALICE: {
    projectName: 'alice',
    token: 'ALICE',
    tokens: 'ALICEs',
    nft: 'bonALICE',
    nfts: 'bonALICEs',
    projectSubgraphAddress:
      'https://api.studio.thegraph.com/query/62454/muon-nft/version/latest',
    projectTestnetSubgraphAddress:
      'https://api.studio.thegraph.com/query/62454/muon-nft/version/latest',
    footerLogoSrc: '/assets/images/footer/alice-muon-logo.svg',
    navbar: {
      hamburgerSrc: '/assets/images/navbar/alice-hamburger-icon.svg',
      exitHamburgerSrc: '/assets/images/navbar/alice-exit-hamburger-icon.svg',
      logoSrc: '/assets/images/navbar/alice-logo.png',
      tokenLogoSrc: '/assets/images/navbar/alice-token-logo.svg',
    },
    sidebar: {
      arrowSrc: '/assets/images/sidebar/alice-arrow.svg',
      logoSrc: '/assets/images/sidebar/alice-logo.svg',
      logoTextSrc: '/assets/images/sidebar/alice-logo-text.svg',
      nftLogoSrc: '/assets/images/sidebar/alice-nft-logo.svg',
      tokenLogoSrc: '/assets/images/sidebar/alice-token-logo.svg',
    },
    actions: {
      hashtagSrc: '/assets/images/alice-hashtag.svg',
      view: {
        icon: '/assets/images/actions/alice-view-icon.svg',
        hoverIcon: '/assets/images/actions/alice-view-colored-icon.svg',
        grayIcon: '/assets/images/actions/alice-view-gray-icon.svg',
      },
      create: {
        icon: '/assets/images/actions/alice-create-icon.svg',
        hoverIcon: '/assets/images/actions/alice-create-icon.svg',
        grayIcon: '/assets/images/actions/alice-create-gray-icon.svg',
      },
      increase: {
        primaryIcon: '/assets/images/actions/alice-upgrade-primary-icon.svg',
        icon: '/assets/images/actions/alice-upgrade-icon.svg',
        hoverIcon: '/assets/images/actions/alice-upgrade-icon.svg',
        grayIcon: '/assets/images/actions/alice-upgrade-gray-icon.svg',
        disabledIcon: '/assets/images/actions/alice-upgrade-disabled-icon.svg',
      },
      merge: {
        primaryIcon: '/assets/images/actions/alice-merge-primary-icon.svg',
        icon: '/assets/images/actions/alice-merge-icon.svg',
        hoverIcon: '/assets/images/actions/alice-merge-colored-icon.svg',
        grayIcon: '/assets/images/actions/alice-merge-gray-icon.svg',
        disabledIcon: '/assets/images/actions/alice-merge-disabled-icon.svg',
      },
      split: {
        icon: '/assets/images/actions/alice-split-icon.svg',
        hoverIcon: '/assets/images/actions/alice-split-colored-icon.svg',
        grayIcon: '/assets/images/actions/alice-split-gray-icon.svg',
        disabledIcon: '/assets/images/actions/alice-split-gray-icon.svg',
      },
      transfer: {
        icon: '/assets/images/actions/alice-transfer-icon.svg',
        hoverIcon: '/assets/images/actions/alice-transfer-colored-icon.svg',
        grayIcon: '/assets/images/actions/alice-transfer-gray-icon.svg',
        disabledIcon: '/assets/images/actions/alice-transfer-gray-icon.svg',
      },
    },
  },
};

export default strings[import.meta.env.VITE_PROJECT_NAME as 'PION' | 'ALICE'];
