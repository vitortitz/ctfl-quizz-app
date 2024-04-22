// eslint-disable-next-line no-unused-vars
import React from "react";
import Style from "./Home.module.css";
import "./Home.module.css";
import me from "../../img/self.png";
import classNames from "classnames";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Layout from "../layout/Layout";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <Layout>
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 200px)"}
      >
        <Box
          className={classNames(Style.avatar, Style.shadowed)}
          alt={"image of developer"}
          style={{ background: info.gradient }}
          component={"img"}
          src={me}
          width={{ xs: "35vh", md: "40vh" }}
          height={{ xs: "35vh", md: "40vh" }}
          borderRadius={"50%"}
          p={"0.75rem"}
          mb={{ xs: "1rem", sm: 0 }}
          mr={{ xs: 0, md: "2rem" }}
        />
        <Box>
          <h1>
            Olá, eu sou{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {info.firstName}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>
          <h2>Sou {info.position}.</h2>
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Esse site foi criado com o intuito de realizar simulados para que
            possa se preparar para concluir a prova e receber o certificado
            CTFL, todas as perguntas foram retiradas dos PDFs oficial forneceido
            pela BSTQB
          </h3>
          <div className="container align-self-center" id="container-home">
            <div className="border border-dark" id="div-home">
              <Box
                display={"flex"}
                gap={"1.5rem"}
                justifyContent={"center"}
                fontSize={{ xs: "1rem", md: "1.5rem" }}
              >
                <span className="icon-text has-text-info">
                  <span className="icon">
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </span>
                  <span>
                    <a href="https://bcr.bstqb.org.br/docs/exam_ctfl_4.0_sample_A[v1br].pdf">
                      {" "}
                      Prova 1
                    </a>
                  </span>
                </span>
                <span className="icon-text has-text-info">
                  <span className="icon">
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </span>
                  <span>
                    <a href="https://bcr.bstqb.org.br/docs/exam_ctfl_2018_sample_B[v1.3br].pdf">
                      {" "}
                      Prova 2
                    </a>
                  </span>
                </span>
                <span className="icon-text has-text-info">
                  <span className="icon">
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </span>
                  <span>
                    <a href="https://bcr.bstqb.org.br/docs/exam_ctfl_2018_sample_C[v1.2br].pdf">
                      {" "}
                      Prova 3
                    </a>
                  </span>
                </span>
              </Box>
            </div>
          </div>
          <Box component={"ul"} p={"0.8rem"}>
            {info.miniBio.map((bio, index) => (
              <Box
                key={index}
                component={"ul"}
                fontSize={"1rem"}
                lineHeight={1.5}
                style={{ cursor: "default" }}
              >
                <Box
                  component={"span"}
                  aria-label="cheese"
                  role="img"
                  mr={{ xs: "0.5rem", md: "1rem" }}
                  fontSize={"1.5rem"}
                >
                  {bio.emoji}
                </Box>{" "}
                {bio.text}
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            {info.socials.map((social, index) => (
              <SocialIcon
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default Home;
