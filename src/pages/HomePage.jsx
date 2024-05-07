import DocumentTitle from "../components/documentTitle/DocumentTitle";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Phonebook - home page</DocumentTitle>

      <div>
        <h1>
          Task manager welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
};

export default HomePage;
