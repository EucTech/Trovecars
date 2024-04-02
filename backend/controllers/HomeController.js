const HomeController = {
  index: (req, res) => {
    res.status(200).json({
      message: "Welcome to the homepage",
    });
  },
};

module.exports = HomeController;
