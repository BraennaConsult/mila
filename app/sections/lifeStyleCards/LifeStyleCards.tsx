import React from 'react';
import styles from './styles.module.scss'; 
// import { ReactComponent as BullsEye } from '../../../public/visuals/icons/bullseye.svg';
import BullsEye from '../../../public/visuals/icons/bullseye.png';
import Image from 'next/image';
// import img2 from '../../../public/visuals/images/bali.jpeg'; 
// import img3 from '../../../public/visuals/images/diva.png';
// import img4 from '../../../public/visuals/images/hut.jpeg';
// import img5 from '../../../public/visuals/images/boat.png';
// import img6 from '../../../public/visuals/images/looking.png';

interface Card {
    image: string;
    tier: string;
    points: string;
    discount: string;
}

const LifeStyleCards: React.FC = () => {
    const cards: Card[] = [
        { image: '/visuals/images/bali.jpeg', tier: 'Step', points: '1,000 Points', discount: '15%' },
        { image: '/visuals/images/diva.png', tier: 'Sprint', points: '2,500 Points', discount: '25%' },
        { image: '/visuals/images/hut.jpeg', tier: 'Soar', points: '5,000 Points', discount: '45%' },
        { image: '/visuals/images/boat.png', tier: 'Flight', points: '7,500 Points', discount: '60%' },
        { image: '/visuals/images/looking.png', tier: 'Ascend', points: '10,000 Points', discount: '85%' }, 
    ];

    return (
        <div className={styles.container}>
            <div className={styles.overskrift}>Introduserer LifeStyle programmet</div>
            <div className={styles.scrollingContent}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={styles.tierCard}
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className={styles.subCard}>
                            <div className={styles.subC1}>
                                <div className={styles.subOverkrift}>Din LifeStyle Tier</div>
                                <div className={styles.cardOverskrift}>{card.tier}</div>
                                <div className={styles.cardPoints}>
                                    <Image className={styles.bullseyeIcon} src={BullsEye} alt="Bulls Eye Icon" />
                                    {card.points}
                                </div>
                            </div>
                            <div className={styles.subC2}>
                                <div className={styles.cardNext}>Neste maraton rabatt</div>
                                <div className={styles.cardPercentage}>{card.discount}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LifeStyleCards;