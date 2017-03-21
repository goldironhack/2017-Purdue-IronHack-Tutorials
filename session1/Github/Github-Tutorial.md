# GitHub Tutorial   

This tutorial introduces GitHub and git commands which would be required for the course of Purdue Ironhacks.


### 1. What is **git**?
**Git** is a Distributed Version Control System developed by Linus Torvalds. Git is responsible for keeping track of changes to content (usually source code files), and it provides mechanisms for sharing that content with others.  

### 2. What is **GitHub**?
**GitHub** is a company that provides Git repository hosting. Please note that _**git**_ and _**GitHub**_ are two different things.

### 3. Open a GitHub Account
If you don't already have an account, please sign up at [GitHub](https://github.com/)

### 4. What is a **repository** in git workflow?  

  A **repository** or '**repo**' for short, is a digital directory or storage space where you can access your project, its files and all the versions of its files that Git saves.

### 5. Use GitHub in Ironhacks
  _**For convenient, we will create a repository for every participant and invite him/her to be a collaborator of this repository**_. To finish the hack, you only need to clone this repository and add you project into it before you push it to GitHub. We will introduce more about that later.

### 6. Download GitHub for your machine  

  Linux Users should install git to be able to interact with GitHub repositories.   
  To install git from Linux terminal, Fedora Users should use
>$ sudo yum install git-all

  For Debian-based distribution like Ubuntu, use
>$ sudo apt-get install git-all

  Windows users can download GitHub for Desktop [here](https://desktop.github.com/)

  Mac users can download GitHub for Mac [here](https://git-scm.com/download/mac) or [here](https://desktop.github.com)

  Git could be used by terminal on all OS and you can also find git application with GUI on all OS.

### 7. Configuration

  Execute following commands on terminal, so that GitHub knows who you are
> git config --global user.name "**YOUR NAME**"  
> git config --global user.email "**YOUR EMAIL**"

For more details about how to setup Git and upload your project on your machine, please check the tutorial for [Linux](Github-Setup-For-Linux.md), [Mac](Github-Setup-For-Mac.md) and [Windows](Github-Setup-For-Windows.md)

It is easy to use https for authentication when you connect to GitHub server. SSH is also available and you can find more docuemnt [here](https://help.github.com/articles/connecting-to-github-with-ssh/) and video [here](https://www.youtube.com/watch?v=H5qNpRGB7Qw&t=609s).

### 8. Clone a repository

  Every participant of Purdue Ironhacks is supposed to clone a repository to his/her computer. Cloning a repository is similar to downloading an entire project source code online, with the addition that all git objects are download which saves the history of edits to the source code among other things. You would be given a link to clone from, the link is specific to each participant. For the purpose of this tutorial we would clone this [repo](https://github.com/priyankjain/image-grabber).   


  Open GitHub terminal on your machine (This is the terminal for linux users. Other users can click on the GitHub Shell icon on Desktop)  
  Clone the repo using the following command:
> git clone https://github.com/priyankjain/image-grabber.git

  This will create a folder named image-grabber in the current directory.

### 9. You're all set to start coding

  Go ahead and start coding. Come back to follow the next steps to upload your code to GitHub.

### 10. Upload your code to GitHub.com

  After you have done changes to the code, you need to upload the code to GitHub.com so we can grade you. You can execute this step multiple times, but make sure you do this step once just before submission so that we have the latest copy of your code.
> git add *   
> git commit -m "Short message describing the changes you made"  
> git push origin master     

  First command asks git to include all code changes in your repository for the next commit.  
  Second command commits the changes and finalizes them to your _LOCAL_ repository.  
  Third command uploads the code the _remote_ repository on GitHub.com, from where we can access your code to grade you. We will discuss more later.
