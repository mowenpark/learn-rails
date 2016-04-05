#Learning Rails
==

Learning Rails with a tutorial from the RailsApps project.

- [x] Uses an alternative set of form helpers named SimpleForm, provided by the SimpleForm gem.
- [x]
- [x]
- [x]
- [x]

View it live at [datavis][datavis].

[datavis]: https://mowenpark-learn-rails.herokuapp.com/


## Overall Structure

###Back end

Code Camp is built on the web framework, Ruby on Rails, and uses a postgreSQL database. All data requests are completed using AJAX and are fulfilled through a JSON API. Associations are in place to prefetch data in order to minimize SQL queries to the database.

###Front end

The front end is built in React.js and JavaScript, utilizing React's Flux architecture. React's virtual DOM allows for quick re-rendering of individual elements without requiring new pages to be sent from the server.

###Libraries

* [React.js][react]
* [Flux][flux]
* [BCrypt][bcrypt]
* [Faker][faker]

[react]: https://facebook.github.io/react/index.html
[flux]: https://facebook.github.io/react/docs/flux-overview.html
[bcrypt]: https://github.com/codahale/bcrypt-ruby
[faker]: https://github.com/stympy/faker

## Primary Components

###User Authorization

User authentication is handled in Rails using BCrypt's password hashing. User passwords are not saved to the database, only password hashes. When users log in, their password is rehashed and checked against the original encrypted password hash to verify credentials.

![login image](/app/assets/images/cc_login.png)

###Profile

Profile page combines react elements to determine what is rendered.

![profile image](/app/assets/images/cc_profile.png)

###Reviews

Bootstrap modal allows logged in users to submit review to backend. Reviews and ratings trigger re-rendering of program panel.

![reviews image](/app/assets/images/cc_reviews.png)

###Search

Codecamp utilizes keyword search to find programs and companies based on like matching. Using the autofill function, users may select locations to narrow their search quickly and easily.

![search image](/app/assets/images/cc_search.png)
