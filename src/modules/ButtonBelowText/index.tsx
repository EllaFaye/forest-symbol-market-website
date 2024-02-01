import { IButtonBelowTextModule } from '@/types/modules/buttonBelowText';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CommonButton from '@/components/CommonButton';
import { openWithBlank } from '@/utils/router';
import { ButtonKey } from '@/types/components/button';

export interface IButtonBelowTextProps {
  module: IButtonBelowTextModule;
}

export function ButtonBelowTextModule({ module }: IButtonBelowTextProps) {
  const { title, subTitle, buttonList, commonStyles } = module;
  return (
    <section
      className={clsx(['section-container', styles.sectionWrap])}
      style={{
        backgroundColor: commonStyles.defaultBackgroundColor,
        paddingTop: commonStyles?.paddingVertical + 'px' || 'auto',
        paddingBottom: commonStyles?.paddingVertical + 'px' || 'auto',
      }}>
      <section className={styles.container}>
        <h1 className={styles.title}>{title.text}</h1>
        <h3 className={styles.subTitle}>{subTitle?.text}</h3>
        <section className={styles.buttonGroup}>
          {buttonList.map((btn, index) => {
            if (btn.key === ButtonKey.Common) {
              return (
                <CommonButton
                  key={'ButtonBelowTextModule' + '_' + index + '_' + btn.key}
                  text={btn?.text || ''}
                  fontColor={btn.commonStyles.default?.fontColor}
                  backgroundColor={btn.commonStyles.default?.backgroundColor}
                  borderColor={btn.commonStyles.default?.borderColor}
                  onClick={() => openWithBlank(btn.link?.url, btn.link?.target)}
                />
              );
            }
            return null;
          })}
        </section>
      </section>
    </section>
  );
}
