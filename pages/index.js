// import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import WordsIBelieveIn from "../components/WordsIBelieveIn";
// import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
// import getLatestRepos from "@lib/getLatestRepos";
// import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Akshay R R - Full Stack Enginner, curious, learner"
      description="I am a full Stack Enginner | This is my portfolio website"
    >
      <Hero />
      <WordsIBelieveIn />
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   console.log(process.env.GITHUB_AUTH_TOKEN);
//   let token = process.env.GITHUB_AUTH_TOKEN;

//   const repositories = await getLatestRepos(userData, token);
//   // console.log("REPOSITORIES", repositories);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };
