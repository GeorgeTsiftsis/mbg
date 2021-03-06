import styled from "styled-components";

const email = "mailto:";

const SingleMemberofSandalGroup = ({
  className,
  membername,
  img,
  mail,
  sector,
  role,
}) => (
  <div className={className}>
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-back">
          <figure>
            <div className="img-bg"></div>
            {/* <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Brohm Lake"
            /> */}
            <figcaption>{membername}</figcaption>
          </figure>

          <ul>
            <li>{sector}</li>
            <li>{role}</li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={email + mail}
              className="pointer"
            >
              {mail}
            </a>
          </ul>
        </div>

        <div className="card-front">
          <figure>
            <div className="img-bg"></div>
            <img src={img} alt={img} />
          </figure>

          <button>{membername}</button>
        </div>
      </div>
    </div>
  </div>
);
export const ElementofSingleMember = styled(SingleMemberofSandalGroup)`
  /* .flip-card-container */
  .flip-card-container {
    --hue: 150;
    --primary: hsl(var(--hue), 50%, 50%);
    --white-1: hsl(0, 0%, 90%);
    --white-2: hsl(0, 0%, 80%);
    --dark: hsl(var(--hue), 25%, 10%);
    --grey: hsl(0, 0%, 50%);

    width: 300px;
    height: 390px;
    margin: 20px;

    perspective: 1000px;
  }

  /* .flip-card */
  .flip-card {
    width: inherit;
    height: inherit;

    position: relative;
    transform-style: preserve-3d;
    transition: 2s 1s;
  }

  /* hover and focus-within states */
  .flip-card-container:hover .flip-card,
  .flip-card-container:focus-within .flip-card {
    transform: rotateY(180deg);
  }

  /* .card-... */
  .card-front,
  .card-back {
    width: 100%;
    height: 100%;

    background: var(--dark);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    backface-visibility: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .card-front */
  .card-front {
    transform: rotateY(0deg);
    z-index: 2;
  }

  /* .card-back */
  .card-back {
    transform: rotateY(180deg);
    z-index: 1;
  }

  /* figure */
  figure {
    z-index: -1;
  }

  /* figure, .img-bg */
  figure,
  .img-bg {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  /* img */
  img {
    height: 100%;
    // border-radius: 24px;
  }

  /* figcaption */
  figcaption {
    display: block;

    width: auto;
    margin-top: 32%;
    padding: 8px 22px;

    font-weight: bold;
    line-height: 1.6;
    letter-spacing: 2px;
    word-spacing: 6px;
    text-align: center;

    color: var(--white-1);
    background: hsla(var(--hue), 25%, 10%, 0.5);
  }

  /* .img-bg */
  .img-bg {
    background: hsla(var(--hue), 25%, 10%, 0.5);
  }

  .card-front .img-bg {
    clip-path: polygon(0 80%, 100% 90%, 100% 100%, 0 100%);
  }

  .card-front .img-bg::before {
    content: "";

    position: absolute;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(18deg);

    width: 100%;
    height: 6px;
    border: 1px solid var(--primary);
    border-left-color: transparent;
    border-right-color: transparent;

    transition: 0.1s;
  }

  .card-back .img-bg {
    clip-path: polygon(0 0%, 100% 0, 100% 80%, 0 60%);
  }

  /* hover state */
  .flip-card-container:hover .card-front .img-bg::before {
    width: 6px;
    border-left-color: var(--primary);
    border-right-color: var(--primary);
  }

  /* ul */
  ul {
    padding-top: 50%;
    margin: 0 auto;
    width: 70%;
    height: 100%;

    list-style: none;
    color: var(--white-1);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /* li */
  li {
    width: 100%;
    margin-top: 12px;
    padding-bottom: 12px;

    font-size: 14px;
    text-align: center;

    position: relative;
  }

  li:nth-child(2n) {
    color: var(--white-2);
  }

  li:not(:last-child)::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background: currentColor;
    opacity: 0.2;
  }

  /* button */
  button {
    font-family: inherit;
    font-weight: bold;
    color: var(--white-1);
    position: absolute;
    bottom: 15px;

    letter-spacing: 2px;

    padding: 9px 15px;
    border: 1px solid var(--grey);
    border-radius: 1000px;
    background: transparent;
    transition: 0.8s;

    cursor: pointer;
  }

  button:hover,
  button:focus {
    color: var(--primary);
    background: hsla(var(--hue), 25%, 10%, 0.2);
    border-color: currentColor;
  }

  button:active {
    transform: translate(2px);
  }

  /* states */
  button:hover + .design-container,
  button:active + .design-container,
  button:focus + .design-container {
    --tr: 20;
    --op: 0.7;
  }
`;

const MembersOfSandaltzopoulosGroup = () => {
  return (
    <>
      <ElementofSingleMember
        membername="?????????? ????????????????"
        img="./Staff/profil-mt2.jpg"
        mail="tokamanimaria@hotmail.com"
        sector="???????????????? ???????????????? ?????? ??????????????????????"
        role="?????????????????????????????? ????????????????????"
      />
      <ElementofSingleMember
        membername="?????????? ??????????????????????????"
        img="./Staff/profil-it.png"
        mail="iliatsoc@gmail.com"
        sector="???????????????? ???????????????? ?????? ????????????????????"
        role="???????????????????????????????? ??????????????????"
      />
      <ElementofSingleMember
        membername="?????????? ??????????????????????"
        img="./Staff/profil-sc.jpg"
        mail="sofiachron96@gmail.com"
        sector="????????????????"
        role="???????????????? ????????????????"
      />
      <ElementofSingleMember
        membername="???????????? ????????????????????"
        img="./Staff/profil-pt.jpg"
        mail="petrostsomakidis@gmail.com"
        role="?????????????????????????? ????????????????"
        sector="???????????????? ???????????????? ?????? ????????????????????"
      />
      <ElementofSingleMember
        membername="???????????????? ????????????????????????"
        img="./Staff/profil-kdk.jpg"
        mail="kerasoula.kok@hotmail.com"
        role="???????????????????????? ??????????????????"
        sector="???????????????? ???????????????? ?????? ??????????????????????"
      />
    </>
  );
};
export default MembersOfSandaltzopoulosGroup;
