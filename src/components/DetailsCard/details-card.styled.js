import styled from "styled-components";

const mobileMediaQuery = `(min-device-width: 320px) and (max-device-width: 1024px)`;

export const DetailCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  height: 80vh;
  margin: 30px auto;
  background: white;
  border-radius: 4px;
  padding: 22px;
  @media only screen and ${mobileMediaQuery} {
    width: 90%;
    height: auto;
  }

  .person-name {
    position: absolute;
    top: -18px;
    left: 20px;
    padding: 4px 12px;
    background: #109cbc;
    @media only screen and ${mobileMediaQuery} {
      position: relative;
      background: none;
      top: auto;
      left: auto;
      text-align: center;
      padding-top: 0;
      margin-bottom: 20px;
    }
  }

  .person-image {
    position: absolute;
    left: -150px;
    top: 100px;
    width: 300px;
    height: 300px;
    z-index: 1000;
    background: #f3f3f3;
    border-radius: 50%;
    border: 10px solid #109cbc;
    background-image: url("https://i.pinimg.com/originals/ef/8a/54/ef8a54b3f1e525e2e03819842278cee1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 2px black;
    @media only screen and ${mobileMediaQuery} {
      position: relative;
      align-self: flex-start;
      flex-grow: 0;
      flex-shrink: 0;
      margin: auto;
      left: auto;
      top: auto;
      border: 1px solid #109cbc;
      width: 130px;
      height: 130px;
      border-radius: 50%;
    }
  }
`;

export const DetailsCardBody = styled.div`
  padding-left: 140px;
  padding-top: 40px;

  @media only screen and ${mobileMediaQuery} {
    padding-left: 0;
    padding-top: 0;
  }
  .person-attributes {
    margin-top: 20px;
    h2 {
      margin-bottom: 30px;
    }
    ul {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      list-style: none;
      li {
        display: flex;
        width: 90%;
        margin-bottom: 6px;
        padding: 4px;
        justify-content: space-between;
        &:nth-child(odd) {
          background: #f3f3f3;
        }
      }
    }
  }
`;

export const StarshipBox = styled(DetailsCardBody)`
  display: flex;
  padding-left: 40px;
  padding-right: 10px;
  padding-top: 10px;
  margin-top: 130px;
  border-top: 1px solid #109cbc;
  border-right: 1px solid #109cbc;

  @media only screen and ${mobileMediaQuery} {
    flex-direction: column;
  }

  .starship-card {
    margin: 5px;
    border: 1px solid #109cbc;
    padding: 6px;
    width: 33%;
    @media only screen and ${mobileMediaQuery} {
      width: 100%;
    }
    h3 {
      margin-bottom: 5px;
      font-size: 0.9em;
    }
    ul {
      padding-left: 20px;
      li {
        font-size: 0.8em;
      }
    }
  }
`;
