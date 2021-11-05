# auth-n-query

Demo nodejs project jwt authentication, auth middleware for specific route, mongo database queries and event emitter for non sycnhronous procedures like analytics and a demo sending email service.


#### Register and login
Token is generated and exported
<p float="left">
<img src="https://github.com/athangk/auth-n-query/blob/main/Capture_1_register.JPG" height="250">
<img src="https://github.com/athangk/auth-n-query/blob/main/Capture_2_login.JPG" height="250">
</p>
  
#### Auth Middleware
Based on valid bearer token user can go to specific auth route
<p float="left">
<img src="https://github.com/athangk/auth-n-query/blob/main/Capture_3_auth_middleware.JPG" height="250">
</p>

#### Update user analytics via event emitter
Whenever user logins, the logins field gets updated with the current timestamp
<p float="left">
<img src="https://github.com/athangk/auth-n-query/blob/main/Capture_4_user_analytic.JPG" width="350">
</p>
