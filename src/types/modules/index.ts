import { IBrandModule } from './brandModule';
import { IButtonBelowTextModule } from './buttonBelowText';
import { ICardListModule } from './cardListModule';
import { IGraphicTextModule } from './graphicTextModule';
import { IPartnersModule } from './partnersModule';

export type Module = IBrandModule | IGraphicTextModule | ICardListModule | IPartnersModule | IButtonBelowTextModule;

export enum ModuleType {
  BrandModule = 'BrandModule',
  GraphicTextModule = 'GraphicTextModule',
  CardListModule = 'CardListModule',
  PartnersModule = 'PartnersModule',
  ButtonBelowText = 'ButtonBelowText',
}
