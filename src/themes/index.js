export default {
  colors: {
    text: '#fafafa',
    background: '#212121',
    primary: '#121212',
    modes: {
      light: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      }
    }
  },
  text: {
    primary: {
      color: 'text'
    }
  },
  buttons: {
    circleIcon: {
      bg: '#00000000',
      color: 'text',
      padding: 1,
      borderRadius: '100%',
      outline: 'none',
      '&:hover': {
        boxShadow: '0px 0px 0px 2px',
        cursor: 'pointer',
      },
    }
  },
  variants: {
    circleHeaderImage: {
      width: ["35%", "30%", "25%", "15%"],
      borderRadius: "100%",
    },
    flexMargins: {
      px: [0, 0, 4, 6]
    }
  }
}