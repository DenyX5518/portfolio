import styled from "styled-components";

const HeaderStyled = styled.div`
  .main {
    border-bottom: 2px solid grey;
    width: 100%;
    height: 800px;
    background: #2A2A2A;
    .main-nav {
      .nav-bar {
        position: relative;
        top: 40px;
        display: flex;
        justify-content: center;
        .nav-h1 {
          font-family: 'Arodora', sans-serif;
          font-style: normal;
          font-weight: lighter;
          font-size: 18px;
          margin-left: 5%;
          flex-direction: row;
          text-transform: uppercase;
          text-decoration: none;
          color: #b1b1b1;
        }
        .nav-h1:hover{
          text-decoration: #00C1EC underline;
          //border-bottom: #c89000 solid 2px;
        }
        h1 {
          font-family: "Next Art", sans-serif;
          font-weight: bold;
          font-size: 35px;
          color: #00C1EC;
        }
        .logo {
          position: absolute;
          top: 0;
          margin-top: -15px;
          left: 2%;
          h1 {
            margin: 0;
            padding: 0;
            span {
              top: -5px;
              margin-right: 10px;
              position: relative;
              img {
                width: 45px;
                height: 35px;
              }
            }
          }
        }
      }
    }

    .main-content {
      .article-title {
        margin-left: 300px;
        margin-top: 250px;
        width: 500px;
        span {
          font-family: "Arodora", sans-serif;
          text-transform: uppercase;
        }

        h1 {
          font-size: 72px;
          margin-bottom: 0;
          line-height: normal;
          font-family: "Next Art", sans-serif;
          color: white;
        }
      }

      .secondary-title {
        margin-left: 300px;
        width: 500px;

        h3 {
          font-size: 16px;
          font-family: "Arodora", sans-serif;
          font-weight: lighter;
          width: 450px;
          color: #adadad;
        }
      }

      .article-btn {
        margin-left: 300px;
        width: 500px;
        button {
          width: 200px;
          height: 45px;
          background: var(--four);
          color: black;
          margin-top: 20px;
          font-family: "Next Art", sans-serif;
          border-radius: 5px;
          box-shadow: var(--four) 0 0 10px;
          font-size: 17px;
          border: none;
        }
      }

      #Me-img {
        position: absolute;
        top: 6.7%;
        left: 45%;
      }
    }
  }
  @media screen and (max-width: 500px){
    #Me-img{
      width: 100%;
      height: 50%;
    }
  }




`
export default HeaderStyled;