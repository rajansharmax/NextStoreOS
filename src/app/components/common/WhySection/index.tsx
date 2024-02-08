import PartnerData from "@/assets/data/Home/PartnerData";
import { Container, SectionContent, SectionWrapper, Section } from "./styled"
import TitleSection from "@/app/components/common/TitleSection";
import Image from "next/image";
import WhySectionData from "@/assets/data/Home/WhySectionData";

const WhySection = () => {
  return (<>
    <SectionWrapper>
      <Container className="container">
        <TitleSection
          isCenter={true}
          subtitle="What Makes"
          title="Our Custom Neon Signs Stands Out?"
          className="md-pb-20"
        />
        <SectionContent>
          <ul>
            {WhySectionData?.map((item, i) => (
              <li key={i}>
                <h4 className={item.mintColor}>{item.num}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </SectionContent>
      </Container>
    </SectionWrapper>
  </>);
}

export default WhySection;