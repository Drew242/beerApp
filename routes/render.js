module.exports = {
    root: (req, res) => {
        res.render('home.html', {
            pageTitle: 'Beer App',
            sectionTitle: 'Beer Fest!'
        });

        res.render('home.html', req.body);
    },
    dashboard: (req, res) => {
        // you can totally reuse html files as templates!
        // res.render('home.html', {
        //     pageTitle: 'Dashboard',
        //     sectionTitle: 'Dashboard Beer Fest!'
        // })

        res.render('dashboard.html', {
            pageTitle: 'Dashboard',
            sectionTitle: 'Welcome to the dashboard!'
        });
    }
}
