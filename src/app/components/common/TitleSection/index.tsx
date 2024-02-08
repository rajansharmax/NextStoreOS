import sectionTitleShape from "@/assets/images/icon/title_shapes.svg";
import sectionTitleShape2 from "@/assets/images/icon/title_shapes2.svg";

import { SectionWrapper } from "./styled";
import Image from "next/image";

const SectionTitle = ({ title, subtitle, isCenter, ...props }: any) => {
  return (
    <SectionWrapper {...props}>
      {subtitle && (
        <h2>
          {isCenter ? <Image src={sectionTitleShape2} alt="" /> : ""}
          {subtitle}{" "}
          <Image src={sectionTitleShape} alt="section title shape" />{" "}
        </h2>
      )}
      {title && <h3>{title}</h3>}
    </SectionWrapper>
  );
};

export default SectionTitle;
