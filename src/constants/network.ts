import { BackEndNetworkType, NetworkItem } from '@/types/network';
import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from './misc';

export type WebsiteNetworkConfig = {
  [key in BackEndNetworkType]: NetworkItem;
};

export const BackEndNetWorkMap: Record<string, WebsiteNetworkConfig> = {
  TSM: {
    dev: {
      name: 'tsm dev',
      networkType: 'TESTNET',
      cmsUrl: 'https://testhome.symbolmarket.io/cms',
      s3Url: 'https://symbolmarket-cms-dev.s3.ap-northeast-1.amazonaws.com/',
    },
    mainnet: {
      name: 'tsm Mainnet',
      networkType: 'MAIN',
      cmsUrl: '',
      s3Url: 'https://symbolmarket-cms-mainnet.s3.ap-northeast-1.amazonaws.com/',
    },
  },
};

export const s3Url =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.s3Url
    : '';
