import { FunctionComponent} from "react";
import useDoctors from "../hooks/doctor.hook";
import {Doctorcard, Header} from "../components";
import { Wrapper, Wrapcard, Loader } from "../css/element";

const Home:FunctionComponent = ()=> {

  // Doctors list and spinner state
  const {doctors, spinner} = useDoctors();
  
  // Loop doctors list
  const doctorList = doctors.map((d) => (
      <Doctorcard key={d.id} doctor={d}/>
  ));
  return<>
      <Header/>
      {spinner === false ? (<Wrapper>
        <Wrapcard>{doctorList}</Wrapcard>
      </Wrapper>) : (<Loader><i className="fas fa-spinner rotating"></i></Loader>)}
    </>;
}

export default Home;