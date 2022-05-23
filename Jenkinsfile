
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm cache clean --force"
                sh "rm -rf node_modules"
                sh "sudo npm install"
                sh "sudo npm install react"
                sh "npm i react-phone-number-input"
                
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo npm run dev"
            }
        }
    }
}
