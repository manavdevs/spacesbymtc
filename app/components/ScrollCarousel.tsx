import styles from './ScrollCarousel.module.css';

const ScrollCarousel = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src="/Assets/image1.jpg" alt="" />
        <div className={styles.card_content}>
          <div className={styles.userInfo}>

            <div>
              <div className={styles.userName}>Rajesh And Priya Gupta</div>
              <div className={styles.subName}>Mumbai</div>
            </div>
          </div>
          <div className={styles.mainText}>We are delighted with the transformation of our home by Manjusha. Her blend of traditional Indian aesthetics with futuristic design elements created a space that feels both culturally rich and refreshingly modern. A big Kudos!. </div>
        </div>
      </div>
      <div className={styles.card}>
        <img src="/Assets/image2.jpg" alt="" />
        <div className={styles.card_content}>
          <div className={styles.userInfo}>

            <div>
              <div className={styles.userName}>Ananya And Arjun</div>
              <div className={styles.subName}>Bengaluru</div>
            </div>
          </div>
          <div className={styles.mainText}>The team at MTC Space, led by Kanika, understood our desire for a home that reflects our love for nature. Their eco-friendly approach and use of natural materials have made our living space not only beautiful but also sustainable. Hats off to their work and I would highly recommend this to everyone around!</div>
        </div>
      </div>
      <div className={styles.card}>
        <img src="/Assets/image3.jpg" alt="" />
        <div className={styles.card_content}>
          <div className={styles.userInfo}>

            <div>
              <div className={styles.userName}>Amit Kumar</div>
              <div className={styles.subName}>New Delhi</div>
            </div>
          </div>
          <div className={styles.mainText}>I couldn't be happier with how the team at Spaces contributed to shaping our office space. Their commitment to incorporating natural light and green elements has created a workspace that feels energizing and conducive to creativity.</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
