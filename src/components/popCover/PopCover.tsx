import styles from "./styles.module.css"

type HoverCard = {
  bgImgSrc: string;
  logoImgSrc: string;
  fgImgSrc: string;
};

export const darkSideCover: HoverCard =   {
    bgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_bg.jpeg?raw=true",
    logoImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_logo.png?raw=true",
    fgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_fg.png?raw=true",
  }

  export const lightSideCover: HoverCard =   {
    bgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/op_bg.jpg?raw=true",
    logoImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/onepiece_logo.png?raw=true",
    fgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/op_fg.png?raw=true",
  }

export const hoverCards: HoverCard[] = [
  {
    bgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_bg.jpeg?raw=true",
    logoImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_logo.png?raw=true",
    fgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/tyrion_fg.png?raw=true",
  },
  {
    bgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/op_bg.jpg?raw=true",
    logoImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/onepiece_logo.png?raw=true",
    fgImgSrc:
      "https://github.com/ImCitizen13/3d-cover-hover/blob/main/src/assets/op_fg.png?raw=true",
  },
];

export function HoverCardView({ bgImgSrc, logoImgSrc, fgImgSrc }: HoverCard) {
  return (
    <div className={styles.card}>
      <div className={styles.pop_out}>
        <img className={styles.logo_image + " " + styles.imgs} src={logoImgSrc} alt="logo" />
        <img className={styles.front_image+ " " + styles.imgs} src={fgImgSrc} alt="fg" />

        <img className={styles.bg_image+ " " + styles.imgs} src={bgImgSrc} alt="fg" />
      </div>
    </div>
  );
}

export default function PopCover() {
  return (
    <div className={styles.hover_cards}>
      {hoverCards.map((hCard) => {
        return (
          <HoverCardView
            bgImgSrc={hCard.bgImgSrc}
            logoImgSrc={hCard.logoImgSrc}
            fgImgSrc={hCard.fgImgSrc}
          ></HoverCardView>
        );
      })}
    </div>
  );
}
