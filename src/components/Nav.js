import React from "react";


//Material UI imports
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Nav(props) {
  return (
    <nav className="navbar">
      <div className="navtop">
      <DehazeIcon className="navIcons" />
      <h3 className="schedulingH3">Scheduling</h3>
      <section className="topRight">
      <AppsIcon className="navIcons" />
      <div className="roundInitial">D</div>
      </section>
      </div>
      <div className="navmid">
        <h3>Sites</h3>
      </div>
      <footer className="navfoot">
        <h3>All sites</h3>
        <ArrowDropDownIcon />
        <section className="navSideIcons">
          <FilterListIcon />
          <SearchIcon />
        </section>
      </footer>
    </nav>
  );
}