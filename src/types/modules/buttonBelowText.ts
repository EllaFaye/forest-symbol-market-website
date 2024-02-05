import { ModuleType } from '.';
import { ButtonComponent } from '../components/button';

export interface IButtonBelowTextModule {
  key: ModuleType.ButtonBelowTextModule;
  index: number;
  title: {
    text: string;
  };
  subTitle?: {
    text: string;
  };
  buttonList: Array<ButtonComponent>;
  commonStyles: {
    paddingVertical?: string;
    defaultBackgroundColor?: string;
  };
}
