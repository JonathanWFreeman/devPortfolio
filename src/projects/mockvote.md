---
slug: "/mockvote"
title: "Mock Vote"
description: "Mock poll for 2020 Presidential Election."
cloud_ref: "MockVote"
media_type: "image"
image_desc: "Mock Vote"
stack: "React, Styled Components, Firebase, Netlify"
repo: "https://github.com/JonathanWFreeman/mock-vote"
demo: "https://mockvote.jonathanfreeman.dev/"
order: 1
---

## Summary

Mock Vote is a project I was interested in creating to simulate voting for the 2020 Presidential election. To accomplish this I used React for the frontend and Firebase for the backend to track votes. Facebook authentication is used to attempt to keep multiple votes being cast, and is only used to track the unique user ID and email to verify if the user has voted. I also make use of an API to get the users location (state) to use for tracking votes for individual states.

2021 Update: Removed Facebook authentication for easier use of app.

## Purpose and Goal

My main objective here was to add another React project to my portfolio and learn about authentication. I also wanted to get more familiar with Firebase and went with Firestore for the database.
