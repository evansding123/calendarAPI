# helloWorld

# Index
<ol>
    <li><a href="#Summary">Summary</a></li>
    <li><a href="#Prerequisites">Prerequisites</a></li>
    <li><a href="#Usage">Usage</a></li>
</ol>

## Summary
JobSite is an employment web application, which allows job seekers to find good fitting jobs and employers to match with the right candidates. What distinguishes JobSite from other competitors is a calendar and notes tool that allows users to keep track of upcoming interviews and record any information about jobs. 

## Prerequisites
```sh
Node v14.16.0
npm 7.16.0
express 4.17.2
```
## Usage
1. Run `npm install` to get all dependencies

2. Run `npm start` to start the server

3. The shape of the inputs are all JSON objects. For example the GET list of appointments request body is 

  `{
    "Name": "Bob Jones",
    "Time": "11:30AM"
  }`
  
  while the DELETE is 
  
  `{
    "Name": "Bob Jones",
    "ID": "543"
  }`
  
  while the POST is 
  
    "Name": "Bob Jones",
    "541": {
            "Patient": "Billy Bobby",
            "Date": "January 1, 2022",
            "Time": "11:30AM",
            "Kind": "New"
          }
  
