
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm cache clean --force"
                sh "rm -rf node_modules"
                sh "sudo npm install"
                sh "sudo npm install react"
                sh "sudo npm i react-phone-number-input"
                sh "sudo npm install -g ts-node"
                sh "sudo npm run build"
                
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo npm run dev"
            }
        }
    }
}
