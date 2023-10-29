import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";
import ProfileTab from "./Profile/ProfileTab";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import OpenLayout from "../Dashboard/OpenLayout";

const PagesStarter = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Starter | My Tax Network</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Welcome to Our" breadcrumbItem="Starting Page" />
          <div className="text-center space-top">
            <h2>Welcome To My Tax Network</h2>
            <p className="space-25">
              We would like to give you a tour <br /> of the new style of the
              dashboard
            </p>

            <OpenLayout />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PagesStarter;
