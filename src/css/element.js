import styled from "styled-components";

const blue = "#ccecfa";
const red = "#EE737F";
const redLight = "#FEEFED";

export const Wrapper = styled.div`
  max-width: 1350px;
  padding: 8px;
  margin: 0 auto;
`;

export const Wrapcard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 289px;
  text-align: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  background: ${blue};
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Profile = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #000;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
`;

export const Profilename = styled.h2`
  color: ${red};
  margin: 0 0 10px;
`;

export const Address = styled.div`
  margin-bottom: 10px;
  i {
    color: ${red};
  }
`;

export const Wrapbutton = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: ${redLight};
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 6px;
  margin-bottom: 6px;
  width: 90px;
  &:hover {
    background: ${red};
    color: #fff;
  }
  &:active {
    outline: none;
  }
`;

export const Loader = styled.div`
  text-align: center;
  .rotating {
    animation: rotating 2s linear infinite;
    color: ${red};
    font-size: 55px;
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const WrapBooking = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Titlebooking = styled.h2`
  text-align: center;
  span {
    color: ${red};
  }
`;

export const Bookingcard = styled.div`
  background: ${blue};
  align-self: center;
  border-radius: 4px;
  padding: 10px;
  ${Titlebooking} {
    margin-top: 0;
  }
  strong {
    display: inline-block;
    margin-bottom: 10px;
  }
  ${Address} {
    margin: 0;
    div:first-child {
      margin-bottom: 10px;
    }
  }
`;
