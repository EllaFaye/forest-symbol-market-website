import { BackEndNetworkType, NetworkItem } from '@/types/network';
import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from './misc';

export type WebsiteNetworkConfig = {
  [key in BackEndNetworkType]: NetworkItem;
};

export const BackEndNetWorkMap: Record<string, WebsiteNetworkConfig> = {
  DAPP: {
    dev: {
      name: 'aelf Testnet',
      networkType: 'TESTNET',
      cmsUrl: 'http://192.168.11.224:8060/', //'https://localtest-applesign.portkey.finance/cms/',
      s3Url: 'http://192.168.11.224:8060/assets/', //'https://portkey-cms-dev.s3.ap-northeast-1.amazonaws.com/',
    },
    mainnet: {
      name: 'aelf Mainnet',
      networkType: 'MAIN',
      cmsUrl: 'https://cms.portkey.finance/',
      s3Url: 'https://portkey-cms-mainnet.s3.ap-northeast-1.amazonaws.com/',
    },
  },
  // Add More ...
};

export const s3Url =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.s3Url
    : '';
