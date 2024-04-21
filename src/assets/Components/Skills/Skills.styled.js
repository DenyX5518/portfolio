import styled from "styled-components";

const SkillsStyled = styled.div`
    .skills-items{
      
      display: grid;
      grid-template-rows: repeat(2, 270px);
      grid-template-columns: repeat(4, 270px);
      //gap: 40px;
      grid-gap: 40px;
      position: relative;
      margin-top: 100px;
      justify-content: center;
      .item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-7{
        background: var(--third);
        border-radius: 30px;
        box-shadow: black 0 5px 20px;
        h1{
          font-size: 48px;
          color: var(--four);
          position: relative;
          text-align: center;
          height: 75px;
          font-family: "Next Art", sans-serif;
          margin-top: 80px;
        }
        h3{
          font-family: "Arodora", sans-serif;
          font-size: 24px;
          color: var(--five);
          text-align: center;
          font-weight: lighter;
          position: relative;
          top: 20px;
        }
        img{
          margin-top: 77px;
          width: 75px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          height: 75px;
        }
      }
      .item-5, .item-6, .item-7{
        position: relative;
        left: 55%;
      }
    }

`

export default SkillsStyled;