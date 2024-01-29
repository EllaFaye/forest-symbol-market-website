import { ModuleType } from '.';
import { DescriptionComponent } from '../components/description';
import { ImageWrapper } from '../components/image';

export interface IGraphicTextModule {
  key: ModuleType.GraphicTextModule;
  index: number;
  image: ImageWrapper;
  title?: {
    text: string;
  };
  subTitle?: {
    text: string;
  };
  descriptionList?: Array<DescriptionComponent>;
  type: GraphicTextModuleType; // default value is "LeftPicture_RightText"
  commonStyles: {
    paddingVertical?: string;
    defaultBackgroundColor?: string;
  };
}

export enum GraphicTextModuleType {
  LeftPicture_RightText = 'LeftPicture',
  LeftText_RightPicture = 'RightPicture',
}
