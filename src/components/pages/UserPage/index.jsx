import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";
import classNames from "classnames";

const UserPage = () => {
  const [user, setUser] = useState();
  let { userId } = useParams();
  const navigate = useNavigate();
  const [screenSaver, setScreenSaver] = useState(false);

  const runTimer = () => {
    return setTimeout(() => {
      setScreenSaver(true);
    }, 10000);
  };

  useEffect(() => {
    let timer = runTimer();
    const handleMouseMove = () => {
      setScreenSaver(false);
      clearTimeout(timer);
      timer = runTimer();
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const fetchUser = async () => {
    await fetch(`https://gorest.co.in/public/v2/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message && data.message === "Resource not found") {
          setUser(null);
        } else {
          setUser(data);
        }
      });
  };
  useEffect(() => {
    fetchUser();
  }, [userId]);

  const handleClickNext = () => {
    const id = parseInt(userId);
    navigate(`/user/${id + 1}`);
  };
  const handleClicPrevious = () => {
    const id = parseInt(userId);
    navigate(`/user/${id - 1}`);
  };

  return (
    <div className="user-page">
      <div
        className={classNames(
          "user-page__overlay",
          screenSaver && "-show"
        )}></div>
      <h1>User #{userId}</h1>
      <div className="user-page__back-button">
        <Button
          color="black"
          label="Back to list"
          onClick={() => navigate("/")}
        />
      </div>
      {user ? (
        <>
          <div className="user-page__user-data">
            <div className="user-page__row">
              <p className="user-page__row-title">Name:</p>
              <div>{user.name}</div>
            </div>
            <div className="user-page__row">
              <p className="user-page__row-title">Email:</p>
              <div>{user.email}</div>
            </div>
            <div className="user-page__row">
              <p className="user-page__row-title">Gender:</p>
              <div>{user.gender}</div>
            </div>
            <div className="user-page__row">
              <p className="user-page__row-title">Status:</p>
              <div>{user.status}</div>
            </div>
          </div>
        </>
      ) : (
        <p>No user found with this id</p>
      )}
      <div className="user-page__navigation-buttons">
        <Button label="previous" onClick={handleClicPrevious} />
        <Button label="next" onClick={handleClickNext} />
      </div>
    </div>
  );
};

export default UserPage;
