const SubTitle = ({ label }: { label: string }) => {
  return <p>{label}</p>;
};

const Title = ({ label }: { label: string }) => {
  return <h1 className="text-4xl font-bold my-4">{label}</h1>;
};

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <header>
      <Title label={title} />
      <SubTitle label={subtitle} />
    </header>
  );
};

export const Context = () => {
  const pageInfo = {
    title: "Título maroto",
    subtitle: "Subtítulo muito legal",
  };

  return (
    <div className="container mx-auto mt-52">
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
};
