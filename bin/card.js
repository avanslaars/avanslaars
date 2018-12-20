#!/usr/bin/env node

var chalk = require('chalk')
var boxen = require('boxen')

let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

let data = {
  name: chalk.white('Andy Van Slaars /'),
  handle: chalk.cyan('avanslaars'),
  work: chalk.white('Enterprise Architect at Cengage Learning'),
  egghead: chalk.cyan('https://egghead.io/instructors/andrew-van-slaars'),
  twitter: chalk.cyan('https://twitter.com/avanslaars'),
  github: chalk.cyan('https://github.com/avanslaars'),
  linkedin: chalk.cyan('https://linkedin.com/in/avanslaars'),
  web: chalk.cyan('https://vanslaars.io'),
  npx: chalk.white('npx avanslaars'),
  labelWork: chalk.white.bold('      Work:'),
  labelEgghead: chalk.white.bold('   egghead:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var eggheading = `${data.labelEgghead}  ${data.egghead}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

let output =
  heading +
  newline +
  newline +
  working +
  newline +
  eggheading +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
