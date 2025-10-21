import styles from "../../pages/Project/Project.module.css";
import ImageTrailEffect from "../../components/lightswind/image-trail-effect";
import { InteractiveCard } from "../../components/lightswind/interactive-card";
import Card from "../../components/Card/Card";
import React, { forwardRef } from "react";

function Project(props, ref) {
  return (
    <div ref={ref} className={styles.projectOuter}>
      <ImageTrailEffect
        imageSources={[
          "./src/utils/images/project7.png",
          "./src/utils/images/project6.png",
          "./src/utils/images/project5.png",
          "./src/utils/images/project4.png",
          "./src/utils/images/project3.png",
          "./src/utils/images/project2.png",
          "./src/utils/images/project1.png",
          "./src/utils/images/project8.png",
          "./src/utils/images/project9.png",
          "./src/utils/images/project10.png",
          "./src/utils/images/project112.png",
          "./src/utils/images/project113.png",
          "./src/utils/images/project114.png",
          "./src/utils/images/project115.png",
          "./src/utils/images/project116.png",
          "./src/utils/images/project117.png",
          "./src/utils/images/project118.png",
          "./src/utils/images/project119.png",
          "./src/utils/images/project120.png",
          "./src/utils/images/project121.png",
          "./src/utils/images/project122.png",
          "./src/utils/images/project123.png",
          "./src/utils/images/project124.png",
        ]}
        content={<h1 className="text-3xl font-bold">Projects</h1>}
      />

      <div className={styles.projectContainer}>
        <Card
          link={"https://github.com/farazazeem-6/FoodPandaClone"}
          img={"./src/utils/images/project120.png"}
        />
        <Card
          link={
            "https://github.com/farazazeem-6/Responsive-Food-Website-with-HTML-and-CSS"
          }
          img={"./src/utils/images/project7.png"}
        />
        <Card
          link={"https://github.com/farazazeem-6/Movie-App-Using-React"}
          img={"./src/utils/images/project117.png"}
        />
        <Card
          link={"https://github.com/farazazeem-6/Quiz-React-App-Using-APIs"}
          img={"./src/utils/images/project115.png"}
        />
        <Card
          link={"https://github.com/farazazeem-6/Brand-Page-UI-Using-React-19"}
          img={"./src/utils/images/project116.png"}
        />
        <Card
          link={
            "https://github.com/farazazeem-6/Building-Baloch-Bus-Service-Website-Clone"
          }
          img={"./src/utils/images/project124.png"}
        />
      </div>
    </div>
  );
}
export default React.forwardRef(Project);
