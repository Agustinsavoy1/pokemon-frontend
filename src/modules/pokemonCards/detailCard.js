import React from "react";
import { connect, useDispatch } from "react-redux";
import setIcon from "../pokemonCards/setIcon";
import "./detailCard.css";
import { motion } from "framer-motion/dist/framer-motion";

// actions
import { getByName } from "../../store/actions/getByNameActions";
import { getDetails } from "../../store/actions/detailCardActions.js";
import { clearPokemon } from "../../store/actions/clearPokemonActions";

//images
import pokeBall from "../../images/pokeball.png";
import ballWaiting from "../../images/ballWaiting3.gif";
import closeIcon from "../../images/X.png";
import leftArrow from "../../images/leftArrow2.png";
import rightArrow from "../../images/rightArrow2.png";

function DetailCard({ byName, setShowDetail }) {
  const dispatch = useDispatch();
  let idCheck = 0;
  let random = Math.floor(Math.random() * -60 + Math.random() * 60);

  const closeModal = (e) => {
    dispatch(clearPokemon());
    setShowDetail(false);
  };

  const leftArrowSubmit = (e, id) => {
    dispatch(clearPokemon());
    idCheck = id === 1 ? 900 : id - 1;
    if (byName) {
      dispatch(getByName(idCheck));
    }
  };

  const rightArrowSubmit = (e, id) => {
    dispatch(clearPokemon());
    const idCheck = id === 900 ? 1 : id + 1;
    if (byName) {
      dispatch(getByName(idCheck));
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="allDetailCard">
        <div className="cardArrowContainer">
          <div>
            <img
              src={leftArrow}
              onClick={byName ? (e) => leftArrowSubmit(e, byName.id) : null}
              className={
                byName && typeof byName.id === "number"
                  ? "leftArrowModal"
                  : "leftArrowModal noShow"
              }
              alt=""
            />
          </div>
          <div className="card" style={{ filter: `hue-rotate(${random}deg)` }}>
            <br></br>
            <p className="detailName">{byName ? byName.name : ""}</p>
            <p
              className={
                byName?.id
                  ? typeof byName.id === "number"
                    ? "parrafId"
                    : "parrafId idDb"
                  : null
              }
            >
              # {byName ? byName.id : null}
            </p>
            {byName && (
              <img
                src={
                  byName.img
                    ? byName.img
                    : byName.image
                    ? byName.image
                    : pokeBall
                }
                alt=""
                className={byName.image ? "detailPic" : "detailPic picDataBase"}
              />
            )}
            {!byName && (
              <div>
                <img src={ballWaiting} alt="" className="waitingBallPic" />
              </div>
            )}
          </div>
          {byName && typeof byName.id === "number" && (
            <div>
              <img
                src={rightArrow}
                onClick={byName ? (e) => rightArrowSubmit(e, byName.id) : null}
                className="rightArrowModal"
                alt=""
              />
            </div>
          )}
        </div>

        <div className="detailsData">
          <p className="parraf">
            Hp: {byName?.hp ? byName.hp.toString() : "..."}
          </p>
          <p className="parraf">
            Attack: {byName?.attack ? byName.attack.toString() : "..."}
          </p>
          <p className="parraf">
            Defense: {byName?.defense ? byName.defense.toString() : "..."}
          </p>
          <p className="parraf">
            Speed: {byName?.speed ? byName.speed.toString() : "..."}
          </p>
          <p className="parraf">
            Height:{" "}
            {byName?.height ? (byName.height / 10).toString() + "m" : "..."}
          </p>
          <p className="parraf">
            Weight:{" "}
            {byName?.weight ? (byName.weight / 10).toString() + "kg" : "..."}
          </p>
          <p className="parraf">
            Type:{" "}
            {byName && byName?.types
              ? byName?.types[0]?.name
              : byName &&
                byName?.type[0]?.concat(
                  byName?.types
                    ? ", " + byName?.types[1]?.name
                    : byName?.type[1]
                    ? ", " + byName?.type[1]
                    : ""
                )}
            {byName ? setIcon(byName) : null}
          </p>
        </div>

        <img
          src={closeIcon}
          alt=""
          className="closeButtonModal"
          onClick={(e) => closeModal(e)}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    byName: state.byName,
    details: state.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getByName: (byName) => {
      dispatch(getByName(byName));
    },
    getDetails: (details) => {
      dispatch(getDetails(details));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCard);
