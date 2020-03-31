import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 190px;
  background: white;
  border-radius: 4px;
  margin: 14px;
  border-top: 4px solid #109cbc;
  &:hover {
    border-color: #ffd282;
    box-shadow: 0 0 14px #109cbc;
  }

  .card-body {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 14px 16px;

    .person-info {
      ul {
        display: flex;
        flex-direction: column;
        width: 150px;
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
      cursor: pointer;
      transition: all ease 0.4s;
      &:hover {
        opacity: 0.8;
        box-shadow: 0 0 6px #109cbc;
      }
    }
  }
  .card-footer {
    display: flex;
    padding: 14px;
    background: #f3f3f3;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    border-radius: 0 0 4px 4px;
    // &:hover {
    //   background: #109cbc;
    //   color: white;
    // }

    .person-name {
      font-weight: bold;
    }
  }
`;
