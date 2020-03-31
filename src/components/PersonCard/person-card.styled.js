import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 180px;
  background: white;
  border-radius: 4px;
  margin: 14px;

  .card-body {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 14px;

    .person-info {
      ul {
        display: flex;
        flex-direction: column;
        width: 160px;
        margin: 20px 0 0 0;
        padding: 0;
        list-style: none;
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    }

    .person-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-image: url("https://i.pinimg.com/originals/ef/8a/54/ef8a54b3f1e525e2e03819842278cee1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #f3f3f3;
      border: 4px solid white;
      box-shadow: 0 0 2px #292929;
    }
  }
  .card-footer {
    display: flex;
    padding: 14px;
    background: #f3f3f3;
    justify-content: flex-start;
    align-items: center;
    .person-name {
      font-weight: bold;
    }
  }
`;
