# node-auth

Node auth

## Installing Procedure

i-> npm install

## Runing Procedure

ii-> npm run dev

## Unit Testing

npm test

## Hitting Api URL

## For Staff

Signup
http://localhost:5000/api/v1/staff/register
parameters required to hit
{name,email,password}

Login

http://localhost:5000/api/v1/staff/login
{email,password}

Forgotpassword

http://localhost:5000/api/v1/staff/forgotpassword
{email}

Reset Password

http://localhost:5000/api/v1/staff/resetPassword
{token,newPassword}

## For User

Signup
http://localhost:5000/api/v1/auth/register

parameters required to hit
{name,email,password,companyEmail}

Login

http://localhost:5000/api/v1/auth/login
{email,password}

Forgotpassword

http://localhost:5000/api/v1/auth/forgotpassword
{email}

Reset Password

http://localhost:5000/api/v1/auth/resetPassword
{token,newPassword}

Also There is a profile api For both that's hit when you have token
and you've to pass token in header as Authorization
