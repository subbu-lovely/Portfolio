import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Travelling life"
              description="Traveling Life – Best Trip Planningis a web-based application designed to help users plan the best trips and experiences for every month of the year. The platform suggests ideal travel destinations based on seasons, weather conditions, and user preferences, ensuring an optimal travel experience."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mining Competitors from Large Unstructured Datasets"
              description="This project focuses on extracting and identifying business competitors from large, unstructured datasets using data mining and natural language processing (NLP) techniques. It helps companies analyze market competition by automatically detecting relevant competitors based on publicly available data such as customer reviews, social media discussions, and business reports."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Today goals- project"
              description="Today Goals is a productivity and task management application designed to help users set, track, and accomplish daily goals efficiently. The platform provides an intuitive interface where users can list tasks, set priorities, and monitor progress throughout the day."
              ghLink=""
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
