const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const ldapAuth = require('express-ldapauth');

const app = express();
app.set('views', __dirname + '/../client/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
app.use(ldapAuth({
    url: 'ldap://your_ldap_host:your_ldap_port',
    bindDN: 'your_bind_user_dn',
    bindCredentials: 'your_bind_user_password',
    searchBase: 'your_search_base',
    searchFilter: 'your_search_filter',
    groupSearchBase: 'your_group_search_base',
    groupSearchFilter: 'your_group_search_filter',
    groupDnProperty: 'your_group_dn_property',
    groupAttribute: 'your_group_attribute',
    groupMembershipAttribute: 'your_group_membership_attribute',
    groupMembershipFilter: 'your_group_membership_filter',
    ldapOpts: {
        tlsOptions: {
            rejectUnauthorized: false
        }
    }
}));
app.get('/login', function(req, res) {
    res.render('login', { error: false });
});
app.post('/login', function(req, res) {
    if (req.session.ldapAuth) {
        res.redirect('/hello');
    } else {
        res.render('login', { error: true });
    }
});
app.get('/hello', ldapAuth.ensureAuthenticated(), function(req, res) {
    res.send('Hello, World!');
});
app.listen(3000);
