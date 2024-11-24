import { VerticalTimelineElement } from "react-vertical-timeline-component";

const AboutImage = ({ image }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={image.title}
      iconStyle={{ background: image.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={image.icon}
            alt={image.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{image.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

export default AboutImage;
