export default {
    install(app) {
      const loadFont = () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap';
        document.head.appendChild(link);
      };
  
      app.config.globalProperties.$loadFont = loadFont;
    },
  };
  