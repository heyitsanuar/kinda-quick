import * as React from "react";
import { Link } from "react-router-dom";
import logoImg from "shared/assets/images/logo.png";

import "./nav-bar.styles.scss"

const NavBarComponent = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="nav-bar-root">
      <div className="nav-bar-logo">
        <img src={logoImg} alt='kinda-quick' />
      </div>
      <nav className="nav-bar-navigator">
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
