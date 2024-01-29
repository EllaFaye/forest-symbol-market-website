import { IBrandModule } from './brandModule';
import { ICardListModule } from './cardListModule';
import { IGraphicTextModule } from './graphicTextModule';
import { IPartnersModule } from './partnersModule';

export type Module = IBrandModule | IGraphicTextModule | ICardListModule | IPartnersModule;

export enum ModuleType {
  BrandModule = 'BrandModule',
  GraphicTextModule = 'GraphicTextModule',
  CardListModule = 'CardListModule',
  PartnersModule = 'PartnersModule',
}
