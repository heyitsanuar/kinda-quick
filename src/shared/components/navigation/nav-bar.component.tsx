import * as React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import logoImg from "shared/assets/images/logo.png";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "30px 0px",
  },
  nav: {
    padding: "25px 0px",
    "& a": {
      color: "#1c1c1c",
      textDecoration: "none",
      padding: "10px 15px",
      margin: "0px 10px",
      transition: "all .3s ease",
      "&.active": {
        backgroundColor: "#1c1c1c",
        color: "#fff",
      },
    },
  },
  logo: {
    width: "100%",
    textAlign: "center",
    "& img": {
      width: 300,
    },
  },
});

const NavBarComponent = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={logoImg} alt='kinda-quick' />
      </div>
      <nav className={classes.nav}>
        <Link
          to='/bubble-sort'
          className={activeTab === 0 ? "active" : ""}
          onClick={() => setActiveTab(0)}
        >
          Bubble Sort
        </Link>
        <Link
          to='/insertion-sort'
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          Insertion Sort
        </Link>
        <Link
          to='/selection-sort'
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          Selection Sort
        </Link>
        <Link
          to='/merge-sort'
          className={activeTab === 3 ? "active" : ""}
          onClick={() => setActiveTab(3)}
        >
          Merge Sort
        </Link>
        <Link
          to='/quick-sort'
          className={activeTab === 4 ? "active" : ""}
          onClick={() => setActiveTab(4)}
        >
          Quick Sort
        </Link>
        <Link
          to='/radix-sort'
          className={activeTab === 5 ? "active" : ""}
          onClick={() => setActiveTab(5)}
        >
          Radix Sort
        </Link>
      </nav>
    </div>
  );
};

export default NavBarComponent;
