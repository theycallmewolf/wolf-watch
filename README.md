# Temp

# **"Excuse me! Do you have the time?!"**

### **wolf watch**

Started as a quick and fun winter locked-down saturday project just.

Kill some time but mostly to practice my CSS and JS skills.

### The goal?

Easy: let's recreate only with code the watch face that I most use on my Apple Watch.

While writing the JS to make the watch work, came another idea: this can be a good project to learn a little about Webpack.

So far I've only used it on React apps but never as a stand alone dependency.

At the end served well to give me the fundamentals.

While recreating the weather complications I've questioned myself: can I get the current weather from some API "lost" in the web?

After a quick research I've chosen the [Meta Weather](https://www.metaweather.com/) API.

Read the docs...

Tested some requests using Insomnia...

Okay, time to implement it!

Oh Sh\*t!

Meta Weather CORS policy don't allows requests on client-side!

Breath in, breath out...

Well, let's test it by coding a quick [Watch API](https://github.com/bruno-wolf/wolf-watch-api), a small node.js app.

On localhost my API was able to receive the Meta Weather responses! Gr8!!

Now... the question: witch provider to deploy this app?

So far I've only worked with Digital Ocean to deploy node apps, and for this saturday afternoon project I'm fine on spending my time, not my money.

Let's try AWS. Twelve months free. Sounds good. In an year I'll reconsider this project.

The issue... never used AWS to deploy node apps.

And now this "winter locked-down saturday project" turned to be a good pretext to learn a little about the [EC2](https://eu-west-3.console.aws.amazon.com/ec2/v2/home?region=eu-west-3#Home:) service from AWS.

Instance created, connect it...

Let's deploy, cloning the repo, installing [PM2](https://pm2.keymetrics.io/) for reverse proxy, [CertBot](https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx.html) for SSL...

...and now I realized that this "winter locked-down saturday project" became much more complex than my original idea.

...and I still label it as a Work in progress.

### I want to:

- [ ]  update the time for the search location
- [ ]  switch the weather icon depending the rain forecast
- [ ]  start the 5min timer after clicking on the bottom left complication
- [ ]  develop the bottom right complication
- [ ]  ...

**Still in progress but you can check the current status by visiting the [Watch page](https://watch.theycallmewolf.pt/).**

# 🐺 ⌚
