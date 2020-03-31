import styled from "styled-components";

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

  .person-name {
    position: absolute;
    top: -18px;
    left: 20px;
    background: red;
    padding: 4px 12px;
    background: #109cbc;
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
  }
`;

export const DetailsCardBody = styled.div`
  padding-left: 140px;
  padding-top: 40px;
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

  .starship-card {
    margin: 5px;
    border: 1px solid #109cbc;
    padding: 6px;
    width: 33%;
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
