import * as React from "react";
import { createUseStyles } from "react-jss";
import logoImg from "shared/assets/images/logo.png";

const useStyles = createUseStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#fff",
    transition: "all 0.5s ease",
    "&.is-blinking": {
      opacity: 0,
      zIndex: "-1",
      "& img": {
        filter: "opacity(0)",
      },
    },
  },
  logo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "30%",
    transition: "all 0.3s ease",
  },
});

const LoaderComponent: React.SFC = () => {
  const classes = useStyles();
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      panelRef.current?.classList.add("is-blinking");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={panelRef} className={classes.root}>
      <img className={classes.logo} src={logoImg} alt='kinda-quick' />
    </div>
  );
};

export default LoaderComponent;
