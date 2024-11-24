import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Grow more with the same effort',
    Svg: require('@site/static/img/grow-more-plants.svg').default,
    description: (
      <>
        Coltiva was designed to make hydroponic growing less time-consuming, and to give you more results for each minute invested.
      </>
    ),
  },
  {
    title: 'Treat your plants like queens',
    Svg: require('@site/static/img/treat-your-plants-like-queens.svg').default,
    description: (
      <>
        Keep pH, EC and water level in the optimal range for your plants at all times.
      </>
    ),
  },
  {
    title: 'Grow on autopilot',
    Svg: require('@site/static/img/grow-on-autopilot.svg').default,
    description: (
      <>
        Let your plants thrive without requiring constant attention from you. Concentrate your efforts to when they're actually needed.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
