import styled from "styled-components";

const StyledProjects = styled.div`
    background: #2A2A2A;
    margin-top: -50px;
    height: 800px;
    .article{
    display: flex;
    justify-content: center;
    h1{
      margin-top: 75px;
      margin-bottom: 25px;
      color: #E4E4E4;
      font-family: "Next Art", sans-serif;
    }
  }
  
  .main{
    display: flex;
    justify-content: center;
    .main-content{
      box-shadow: black 0 0 20px;
      border-radius: 30px;
      width: 970px;
      height: 550px;
      background: rgb(63,63,63);
      .carousel{
        .item-1{
          display: flex;
          height: 550px;
          flex-direction: row;
          .img-1{
            margin-top:50px;
            margin-left: 25px;
            display: flex;
            justify-content: center;
            width:550px;
            height: 450px;
            img{
              box-shadow: black 0 3px 20px;
              border-radius: 25px;
            }
          }
          .text-item-1{
            width: 50%;
            margin-top: 7%;
            h1{
              color: #E4E4E4;
              text-align: center;
              font-family: 'Arodora', sans-serif;
            }
            h3{
              color: #b1b1b1;
              text-align: center;
              font-family: 'Arodora', sans-serif;
              font-size: 18px;
              font-weight: lighter;
            }
          }
        }

        .item-2{
           display: flex;
           height: 550px;
           flex-direction: row;
           .img-2{
             margin-top:50px;
             margin-left: 25px;
             display: flex;
             justify-content: center;
             width:550px;
             height: 450px;
             img{
               border-radius: 25px;
               box-shadow: black 0 0 20px;
             }
           }
           .text-item-2{
             width: 50%;
             margin-top: 7%;
             h1{
               color: #E4E4E4;
               text-align: center;
               font-family: 'Arodora', sans-serif;
             }
             h3{
               color: #b1b1b1;
               text-align: center;
               font-family: 'Arodora', sans-serif;
               font-size: 18px;
               font-weight: lighter;
             }
           }
         }



        .item-3{
          display: flex;
          height: 550px;
          flex-direction: row;
          .img-3{
            margin-top:50px;
            margin-left: 25px;
            display: flex;
            justify-content: center;
            width:550px;
            height: 450px;
            img{
              border-radius: 25px;
              box-shadow: black 0 0 20px;
            }
          }
          .text-item-3{
            width: 50%;
            margin-top: 7%;
            h1{
              color: #E4E4E4;
              text-align: center;
              font-family: 'Arodora', sans-serif;
            }
            h3{
              color: #b1b1b1;
              text-align: center;
              font-family: 'Arodora', sans-serif;
              font-size: 18px;
              font-weight: lighter;
            }
          }
        }
      }
    }
  }
`

export default StyledProjects;

