const theme = {
  colors: {
    text: "#fafafa",
    background: "#212121",
    primary: "#121212",
    linkHover: "#cc3300",
    modes: {
      light: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  body: {
    color: "text",
    backgroundColor: "background",
  },
  text: {
    primary: {
      color: "text",
    },
    sectionHeader: {
      color: "text",
      fontSize: [4, 5],
      fontWeight: "bold",
    },
    sectionItemTitle: {
      color: "text",
      fontSize: [1, 3],
      fontWeight: "bold",
    },
  },
  buttons: {
    circleIcon: {
      bg: "#00000000",
      color: "text",
      padding: 1,
      borderRadius: "100%",
      outline: "none",
      "&:hover": {
        boxShadow: "0px 0px 0px 2px",
        cursor: "pointer",
      },
    },
  },
  variants: {
    circleHeaderImage: {
      width: ["35%", "30%", "25%", "15%"],
      borderRadius: "100%",
      color: "text",
      padding: 0,
      boxShadow: "0px 0px 0px 4px",
    },
    flexMargins: {
      px: [0, 0, 4, 6],
    },
    contactIconLink: {
      display: "inline-block",
      mx: "5px",
      color: "text",
      "&:hover": {
        color: "linkHover",
        cursor: "pointer",
      },
    },
    textLink: {
      display: "inline-block",
      color: "text",
      textDecoration: "underline",
      "&:hover": {
        color: "linkHover",
      },
    },
  },
};

export default theme;
