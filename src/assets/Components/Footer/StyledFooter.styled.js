import styled from "styled-components";


const StyledFooter = styled.div`
  background: rgb(63,63,63);
  .main{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    .main-content{
      #footer-text{
        position: relative;
        font-family: "Next Art", sans-serif;
        font-weight: bold;
        color: #00C1EC;
        font-size: 35px;
        img {
          width: 45px;
          margin-top: -10px;
          height: 35px;
        }
      }
      display: flex;
      justify-content: center;
      .items{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 250px 300px 300px;
        .item-right{
          display: grid;
          height: 130px;
          grid-template-rows: repeat(4, 1fr);
          grid-template-columns: 1fr;
          h1{
            color: #b1b1b1;
            font-family: 'Arodora', sans-serif;
            font-size: 18px;
            line-height: 25px;
          }
          .item-4{
            text-align: center;
          }
        }
        .item-1, .item-2, .item-3{
          #inst:hover{
            cursor: pointer;
            color: #E4E4E4;
          }
          h1{
            color: #b1b1b1;
            font-family: 'Arodora', sans-serif;
            font-size: 18px;
            line-height: 25px;
          }
        }
        .item-right{
          width: 250px;
          .item-4-gg{
            display: flex;
            justify-content: center;
          }
          .item-2-gg{
            display: flex;
            justify-content: center;
            img{
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
              width: 50px;
              opacity: 0.5;

              height: 50px;
              transform: rotateZ(-90deg);
            }
            img:hover{
              opacity: 1;
            }
          }
          
        }
      }
      .arrow-img{
        position: absolute;
        left: 0;
        display: flex;
        flex-direction: row;
        align-content: center;
      }
    }
  }
  #AboutMe:hover{
    color: #E4E4E4;
    cursor: pointer;
  }
  #Projects:hover{
    color: #E4E4E4;
    cursor: pointer;
  }
  #Home:hover{
    color: #E4E4E4;
    cursor: pointer;
  }
  #Skills:hover{
    color: #E4E4E4;
    cursor: pointer;
  }
  

`

export default StyledFooter;