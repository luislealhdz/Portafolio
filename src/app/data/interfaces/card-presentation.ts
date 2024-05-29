export default interface CardPresentation {
  hasMainTitle?: boolean;
  mainTitle?: string;
  hasSecondaryTitle?: boolean;
  secondaryTitle?: string;
  hasSecondaryDescription?: boolean;
  secondaryDescription?: string;
  hasThirdTitle?: boolean;
  thirdTitle?: string;
  hasThirdDescription?: boolean;
  thirdDescription?: string;
  hasExperienceBlock?: boolean;
  experience?: Experience[];
}

interface Experience {
  titlePosition: string;
  company: string;
  timeLaps: string;
}
