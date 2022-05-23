
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm cache clean --force"
                sh "rm -rf node_modules"
                sh "sudo npm install"
                sh "node --experimental-json-modules about.js"
                
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo npm run dev"
            }
        }
    }
}
