import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
                 projects: [{ name: "Devise-uncommon_password", url: "https://github.com/HCLarsen/devise-uncommon_password", description: "This published Gem is an extension to the popular Devise gem that adds a feature to enforce greater security for logins. It adds a validation to the Devise model that will reject any creation or update if the chosen password is on the list of most common passwords in the world."},
                 { name: "Swift HTML Parser", url: "https://github.com/HCLarsen/HTMLParser", description: "My first real Swift project. This is my response to a friend's challenge to create an HTML parser without using any external libraries. As Swift doesn't have any native Regex functions, this was quite a challenge."},
                 { name: "Ruby Radio", url: "https://github.com/HCLarsen/ruby-radio", description: "An IoT Clock Radio, with Raspberry Pi for hardware, and all software written in Ruby. It uses GTK for the GUI interface, streams internet radio, accesses weather information from OpenWeatherMap and changes colour into a \"night mode\" after the sun sets."},
                 { name: "Spending Money", url: "https://spending-money.herokuapp.com/", description: "A simple money management app. You save your regular income and expenses. Then, you enter your current bank balance, and the app will calculate how much \"spending money\" you have available until your next paycheque so that you don't fall behind your bills. I wrote this app in 8 hours."},
                 { name: "Round Table", url: "https://round-table-pm.herokuapp.com/", description: "My first Ruby on Rails web app, which is a project management application. It was completed in 6 days, with only minor improvements added since."}]
    }
  }
  render() {
    var projects = this.state.projects.map(function(p) {
      return <Project name={p.name} url={p.url} description={p.description} />
    });
    return(
      <section className="content">
        <p>These is a list of software that I have created on my own.</p>
        <dl>
          {projects}
        </dl>
      </section>
    );
  }
}

export default Projects;
