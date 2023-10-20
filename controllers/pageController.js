const getIndexPage = (req, res) => {
    res.render('index');
    res.render('index', {
      link: 'index',
    });
  };
  
  const getAboutPage = (req, res) => {
    res.render('about');
    res.render('about', {
      link: 'about',
    });
  };
  
  export { getIndexPage, getAboutPage };