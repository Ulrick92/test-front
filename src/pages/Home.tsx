import { FunctionComponent } from "react";
import { useDoctors } from "../hooks";
import { Doctorcard, Header } from "../components";
import { Wrapper, Wrapcard, Loader } from "../css/element";

const Home: FunctionComponent = () => {

  // Doctors list and loader state
  const { doctors, loader } = useDoctors();

  // Loop doctors list
  const doctorList = doctors.map((d) => (
    <Doctorcard key={d.id} doctor={d} />
  ));
  return <>
    <Header />
    {!loader ? (<Wrapper>
      <Wrapcard>{doctorList}</Wrapcard>
    </Wrapper>) : (<Loader><i className="fas fa-spinner rotating"></i></Loader>)}
  </>;
}

export default Home;