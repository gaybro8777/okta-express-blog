# okta-express-blog

A simple Node.js/Express.js CRUD app (a blog).

![Blog homepage](https://raw.githubusercontent.com/rdegges/okta-express-blog/master/assets/blog-homepage.png)


## Purpose

This is a simple blogging app built with Node.js and Express.js. It uses
[Okta](https://developer.okta.com) for handling user authentication. Why am I
using Okta? Because it makes the authentication component really simple, and
that's what I'm all about: simple stuff.


## Prerequisites

If you don't already have an Okta account, please go create one:
[https://developer.okta.com/signup/](https://developer.okta.com/signup/).

Okta accounts are free and last forever, you can use them to store the users for
all of your applications, it's pretty nifty.

Now go clone this GitHub repository locally and change into the directory:

```bash
git clone https://github.com/rdegges/okta-express-blog.git
cd okta-express-blog
```

Next, you'll need to go create an Okta application. You can do this by logging
into the Okta dashboard, clicking the **Applications** tab, clicking **Add
Application**, clicking **Web** and **Next**, then entering the following
application settings:

- **Name**: `blog` or whatever you want to name your project
- **Base URIs**: `http://localhost:3000`
- **Login redirect URIs**: `http://localhost:3000/users/callback`

Leave all the other settings as their default values, then click **Done**. On
the following page, copy down the values for both **Client ID** and **Client
secret**, you will need these in a moment.

Next, click the **Dashboard** tab at the top of the page, then copy the **Org
URL** value from the top-right of the page.

Then click the **API** tab at the top of the page as well as the **Create
Token** button. Enter a name for your token (just give it the same name as your
project) then click **Create Token**. Copy the token value down as you will need
it in a moment.

Finally, create a file that holds environment variables. This application relies
on environment variables to specify credentials so that you don't need to
hard-code secrets into your application.

Create a file named `.envrc` and enter the following contents (**NOTE**: this
will only work if you are using *nix or Mac -- if you're using Windows you'll
need to figure out what to do as I'm not a Windows guy, sorry!):

```
export OKTA_ORG_URL={{ your org URL }}
export OKTA_TOKEN={{ your okta token }}
export OKTA_CLIENT_ID={{ your client ID }}
export OKTA_CLIENT_SECRET={{ your client secret }}
export SECRET={{ a long random string you create by mashing the keybaord for a second }}
```

These settings will be used to kickstart your blog application.

To "activate" these settings, you need to tell your terminal to "apply" these
variables so they can be used. To do this run the following command:

```bash
. .envrc
```

You can test to amke sure your environemnt variables are working by running the
following command. If successful, you should see the value you previously
entered into the `.envrc` file.:

```bash
echo $OKTA_ORG_URL
```

Now you've got your app fully configured and the only thing you need to do is
install all of the project's dependencies. To do this, you must have Node.js
installed. If you don't, go view [this page](https://nodejs.org/en/download/package-manager/<Paste>) to learn how.

Once Node.js is isntalled (please install the latest release!), run the following
command to install all dependencies:

```bash
npm install
```


## Start the App

Now that everything is ready, you can start up the app. To do this, run the
following command -- this will start the webserver on port 3000:

```bash
npm start
```

Now open your browser and go visit `http://localhost:3000` to view the website.
If you click the **Log In** button at the top of the page, you will be able to
log into the blog using your Okta account you created earlier.

![Okta Login Page](https://raw.githubusercontent.com/rdegges/okta-express-blog/master/assets/okta-login-page.png)

Once you're logged in, you'll be able to create new posts, edit posts, delete
posts, etc.

![Using the blog](https://raw.githubusercontent.com/rdegges/okta-express-blog/master/assets/using-the-blog.gif)


## Contribute

Want to contribute to this project and make it better? Feel free to send me a
pull request. I'll do my best to get back quickly.
