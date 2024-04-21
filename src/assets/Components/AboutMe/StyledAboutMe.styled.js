import styled from "styled-components";

const StyledAboutMe  = styled.div`

  .main {
    width: 100%;
    margin-top: 200px;
    height: 875px;

    .main-content {
      width: 100%;
      position: relative;
      height: 100%;

      .other_1 {
        width: 240px;
        height: 275px;
        position: absolute;
        top: 0;
        border-radius: 20px;
        background: #2A2A2A;
        box-shadow: black 0 0 20px;
        margin-top: -10%;
        margin-left: -55%;
        .img_1 {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        img {
          position: relative;
          width: 80%;
          border-radius: 20px;
          border: #b1b1b1 solid 2px;
          height: 250px;
        }
      }


      .other_2 {
        width: 240px;
        height: 275px;
        position: absolute;
        top: 0;
        border-radius: 20px;
        background: #2A2A2A;
        box-shadow: black 0 0 20px;
        margin-top: 110%;
        margin-left: -55%;
        .img_2 {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        img {
          position: relative;
          width: 80%;
          border-radius: 20px;
          border: #b1b1b1 solid 2px;
          height: 250px;
        }
      }


      .other_3 {
        width: 350px;
        height: 410px;
        position: absolute;
        top: 0;
        border-radius: 20px;
        background: #2A2A2A;
        box-shadow: black 0 0 20px;
        margin-top: 40%;
        margin-left: 99%;
        .img_3 {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        img {
          position: relative;
          width: 90%;
          border-radius: 20px;
          border: #b1b1b1 solid 2px;
          height: 380px;
        }
      }
      
      

      .Hero-block {
        z-index: 1;
        width: 25%;
        height: 80%;
        border-radius: 25px;
        box-shadow: black 0 5px 20px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        background: #2A2A2A;

        h1 {
          text-align: center;
          position: relative;
          color: white;
          font-family: "Next Art", sans-serif;
          top: -25px;
          text-shadow: white 0 0 2px;
          font-size: 48px;
          font-weight: 700;
        }

        h3 {
          width: 75%;
          color: var(--primary);
          line-height: 25px;
          font-size: 20px;
          font-family: "Arodora", sans-serif;
          font-weight: 300;
          left: 50%;
          transform: translateX(-50%);
          letter-spacing: 0.01em;
          position: relative;
        }
      }
      .white-ellipse{
        position: absolute;
        z-index: 0;
        left: 5%;
        top: 0;
        margin-top: -2%;
        img{
          height: 792px;
          width: 792px;
        }
      }
      .orange-ellipse{
        position: absolute;
        z-index: 0;
        left: 50%;
        top: -10%;
        img{
          height: 500px;
          width: 500px;
        }
      }
      .blue-ellipse{
        position: absolute;
        z-index: 0;
        left: 45%;
        top: 30%;
        img{
          height: 600px;
          width: 600px;
        }
      }
    }
  }



`

export default StyledAboutMe;