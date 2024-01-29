import { DappPage } from '.';
import { ImageWrapper } from '../components/image';
import { Footer, SocialMedia } from '../global/footer';
import { Header, TopMenu } from '../global/header';

export interface IHomePageProps {
  headerData: Header;
  footerData: Footer;
  pageData: DappPage;
}
